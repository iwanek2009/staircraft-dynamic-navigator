import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
          alt="Elegant staircase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40" />
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
          <p className="text-xl md:text-2xl mb-8">
            Premium stair manufacturing across the UK, combining artistry with
            building regulation compliance
          </p>
          <button className="bg-accent text-white px-8 py-3 text-lg rounded hover:bg-accent/90 transition-colors">
            Explore Our Work
          </button>
        </motion.div>
      </div>
    </div>
  );
};