
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Trump says 25% tariffs on Mexico & Canada. Does this mean all products?",
    answer: "No - tariffs are implemented at a much more granular level via the State Department in the form of a HTS code. 25% tariffs could mean a 25% tariff on strawberries important from Mexico or 25% increase on car engines from Canada. The only way to know exactly what items are impacted is by analyzing how the State Department implements them at the HTS level (Which we provide)"
  },
  {
    question: "What is a HTS code?",
    answer: "HTS stands for Harmonized Tariff Schedule. An example of an HTS code: Meat, Chapter 2, 0201.10.05.10 (Veal). It will then have the tariff rate (% per unit of quantity) and countries that it applies to (CA, MX, etc). These are updated on a non-standardized basis by the State Department."
  },
  {
    question: "How accurate is the tariff information?",
    answer: "TariffTrak sources information directly from official government publications and regulatory bodies. Our team of trade experts verifies and updates our database daily to ensure you receive the most accurate and current information available."
  },
  {
    question: "Do you offer customized alerts?",
    answer: "Yes, TariffTrak allows you to set up custom alerts based on specific products, HS codes, countries, or trade agreements. You'll only receive notifications for changes relevant to your business."
  },
  {
    question: "Can I integrate TariffTrak with my existing systems?",
    answer: "Absolutely. TariffTrak offers API integration capabilities that allow seamless connection with your ERP, procurement, or supply chain management systems. Contact our sales team for integration options."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-tariff-gray max-w-2xl mx-auto">
            Get answers to common questions about TariffTrak and how it can help your business navigate global trade.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-medium py-5 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-tariff-gray pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
