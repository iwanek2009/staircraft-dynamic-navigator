import { useParams } from "react-router-dom";
import { cities, type City } from "@/data/cities";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    question: "What are the stair design requirements?",
    answer: "All staircases must comply with UK Building Regulations (Approved Document K), which specify requirements for rise, going, headroom, and handrails. Our designs ensure full compliance while meeting your aesthetic preferences.",
  },
  {
    question: "How do I choose the right stair manufacturer?",
    answer: "Look for manufacturers with proven experience, regulatory compliance knowledge, and a portfolio of successful installations. We offer free consultations to discuss your specific requirements.",
  },
  {
    question: "Are your staircases compliant with UK Building Regulations?",
    answer: "Yes, all our staircases are designed and manufactured in full compliance with UK Building Regulations, specifically Approved Document K, ensuring safety and legal requirements are met.",
  },
  {
    question: "What is the typical cost of custom stair manufacturing?",
    answer: "Costs vary based on design complexity, materials, and specifications. We provide detailed quotes after understanding your requirements during the initial consultation.",
  },
];

export const CityPage = () => {
  const { city } = useParams<{ city: string }>();
  const isValidCity = cities.includes(city as City);

  if (!isValidCity) {
    return <div>City not found</div>;
  }

  return (
    <div className="min-h-screen">
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
              Expert Stair Manufacturers in {city}
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
                <p className="text-gray-600">
                  As leading stair manufacturers in {city}, we specialize in creating
                  bespoke staircases that combine stunning design with full compliance
                  to UK Building Regulations. Our expert team brings years of
                  experience in crafting custom stairs for both residential and
                  commercial properties across {city} and surrounding areas.
                </p>
              </CardContent>
            </Card>

            {/* FAQs */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Frequently Asked Questions about Stair Manufacturing in {city}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
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