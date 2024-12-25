import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { ContactForm } from "../components/ContactForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <ContactForm />
    </main>
  );
};

export default Index;