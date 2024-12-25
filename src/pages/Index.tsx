import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { ContactForm } from "../components/ContactForm";
import { cities } from "@/data/cities";
import { Link } from "react-router-dom";
import { Features } from "../components/Features";
import { Testimonials } from "../components/Testimonials";
import { Stats } from "../components/Stats";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <Features />
      
      {/* City Links Section */}
      <section className="py-16 bg-gradient-to-b from-white to-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Service Locations
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We provide our premium staircase crafting services across major cities in the UK, 
            ensuring quality and compliance wherever you are.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cities.map((city) => (
              <Link
                key={city}
                to={`/${city.toLowerCase()}`}
                className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-xl font-medium text-primary group-hover:text-accent transition-colors duration-300 block text-center">
                  {city}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default Index;