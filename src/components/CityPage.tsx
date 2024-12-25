import { useParams } from "react-router-dom";
import { cities, type City } from "@/data/cities";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { CityHero } from "./city/CityHero";
import { CityIntroduction } from "./city/CityIntroduction";
import { CityFAQ } from "./city/CityFAQ";

const fetchCityContent = async (city: string) => {
  const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-city-content`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ city }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch city content');
  }
  
  const data = await response.json();
  console.log('Received city content:', data);
  return data;
};

export const CityPage = () => {
  const { city } = useParams<{ city: string }>();
  
  // Normalize the city name to match the format in the cities array
  const normalizedCity = city ? city.charAt(0).toUpperCase() + city.slice(1).toLowerCase() : '';
  const isValidCity = cities.includes(normalizedCity as City);

  console.log('Current city:', city);
  console.log('Normalized city:', normalizedCity);
  console.log('Is valid city:', isValidCity);

  const { data: content, isLoading, error } = useQuery({
    queryKey: ['cityContent', normalizedCity],
    queryFn: () => fetchCityContent(normalizedCity),
    enabled: isValidCity,
    staleTime: 1000 * 60 * 60 * 24 * 180, // Cache for 6 months
  });

  if (!isValidCity) {
    return <div className="container mx-auto p-4">City not found</div>;
  }

  if (isLoading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (error) {
    console.error('Error fetching city content:', error);
    return <div className="container mx-auto p-4">Error loading content</div>;
  }

  if (!content) {
    return <div className="container mx-auto p-4">No content available</div>;
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>

      <CityHero city={normalizedCity} title={content.title} />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            <CityIntroduction 
              city={normalizedCity} 
              introduction={content.introduction} 
            />
            <CityFAQ 
              city={normalizedCity} 
              faqs={content.faqs} 
            />
          </div>
        </div>
      </section>
    </div>
  );
};