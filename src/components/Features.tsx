import { motion } from "framer-motion";
import { Tool, Award, Ruler, Users } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Tool className="w-10 h-10" />,
      title: "Master Craftsmanship",
      description: "Each staircase is handcrafted by our skilled artisans with decades of experience",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Quality Guaranteed",
      description: "Premium materials and finishes that stand the test of time",
    },
    {
      icon: <Ruler className="w-10 h-10" />,
      title: "Precise Measurements",
      description: "Exact specifications ensuring perfect fit and installation",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Client Focused",
      description: "Collaborative approach to bring your vision to life",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine traditional craftsmanship with modern technology to create
            stunning staircases that exceed expectations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-accent mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};