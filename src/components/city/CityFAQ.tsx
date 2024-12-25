import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface CityFAQProps {
  city: string;
  faqs: FAQ[];
}

export const CityFAQ = ({ city, faqs }: CityFAQProps) => {
  return (
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
  );
};