import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      {/* Header Section */}
      <header className="bg-white py-4 fixed w-full z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="text-2xl font-display font-bold text-primary">
            StairCraft
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-primary hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="#services" className="text-primary hover:text-accent transition-colors">
              Services
            </Link>
            <Link to="#portfolio" className="text-primary hover:text-accent transition-colors">
              Portfolio
            </Link>
            <Link to="#contact" className="text-primary hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-screen pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1545586669-1e98ae8a5f8a"
            alt="Modern architectural staircase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
        </div>
        <div className="relative container mx-auto h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white p-4"
          >
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Elevate Your Space
              <span className="block text-accent mt-2">With Stunning Staircases</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
              Premium stair manufacturing across the UK, combining modern design with 
              impeccable craftsmanship and building regulation compliance.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-white px-8 py-4 text-lg rounded-lg hover:bg-accent/90 transition-colors inline-flex items-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 text-lg rounded-lg hover:bg-white/10 transition-colors"
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};