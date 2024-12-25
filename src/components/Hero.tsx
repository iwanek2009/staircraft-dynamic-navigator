import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
          alt="Elegant staircase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
      </div>
      <div className="relative container mx-auto h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white p-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Crafting Elegant Staircases
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Premium stair manufacturing across the UK, combining artistry with
            building regulation compliance. Transform your space with our bespoke designs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-8 py-4 text-lg rounded-lg hover:bg-accent/90 transition-colors inline-flex items-center gap-2 group"
          >
            Explore Our Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};