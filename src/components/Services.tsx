import { Building, Shield, PencilRuler, Clock } from "lucide-react";

const services = [
  {
    icon: <Building className="w-8 h-8" />,
    title: "Custom Design",
    description: "Bespoke staircases tailored to your space and style",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Compliance Assured",
    description: "Full adherence to UK Building Regulations",
  },
  {
    icon: <PencilRuler className="w-8 h-8" />,
    title: "Expert Craftsmanship",
    description: "Skilled artisans with decades of experience",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Timely Delivery",
    description: "Project completion within agreed timeframes",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-accent mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};