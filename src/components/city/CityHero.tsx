import { motion } from "framer-motion";
import { Button } from "../ui/button";

interface CityHeroProps {
  city: string;
  title: string;
}

export const CityHero = ({ city, title }: CityHeroProps) => {
  return (
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl mb-8">
            Custom designs & UK Building Regulations compliance
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Get Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};