import { motion } from "framer-motion";

export const Stats = () => {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "25+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Craftsmen" },
  ];

  return (
    <section className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};