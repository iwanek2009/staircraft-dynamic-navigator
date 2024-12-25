import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { ContactForm } from "../components/ContactForm";
import { cities } from "@/data/cities";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      
      {/* City Links Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Service Locations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link
                key={city}
                to={`/${city.toLowerCase()}`}
                className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <span className="text-lg font-medium">{city}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <ContactForm />
    </main>
  );
};

export default Index;