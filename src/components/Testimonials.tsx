import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Homeowner",
      content: "The attention to detail and craftsmanship is outstanding. Our new staircase has transformed our home completely.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Interior Designer",
      content: "Working with this team has been a pleasure. They understand design and deliver exactly what's needed.",
      rating: 5,
    },
    {
      name: "Emily Parker",
      role: "Property Developer",
      content: "Reliable, professional, and exceptional quality. They've completed multiple projects for us, always exceeding expectations.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Client Testimonials
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about
          their experience working with us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-8 rounded-xl"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};