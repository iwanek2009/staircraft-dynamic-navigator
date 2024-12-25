import { useParams } from "react-router-dom";
import { cities, type City } from "@/data/cities";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

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
  console.log('Received city content:', data); // Debug log
  return data;
};

export const CityPage = () => {
  const { city } = useParams<{ city: string }>();
  const isValidCity = cities.includes(city as City);

  const { data: content, isLoading, error } = useQuery({
    queryKey: ['cityContent', city],
    queryFn: () => fetchCityContent(city as string),
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

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
            alt={`Staircase manufacturing in ${city}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white p-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {content.title}
            </h1>
            <p className="text-xl mb-8">
              Custom designs & UK Building Regulations compliance
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Get Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle>Bespoke Stair Manufacturing in {city}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{content.introduction}</p>
              </CardContent>
            </Card>

            {/* FAQs */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Frequently Asked Questions about Stair Manufacturing in {city}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {content.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};