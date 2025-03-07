
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
    answer: "Tariff Tracker ingests the most up to date documents from the U.S Department of International Trade Commission. Specifically, we ingest newly published Harmonized Tariff Schedules (HTS) and compare them to historical HTS in order to understand if a specific item saw an increase/decrease in a tariff amount."
  },
  {
    question: "I do not believe that your tool works",
    answer: "Please schedule a demo with us and we will manually walk you through how we verify whether a specific item has a tariff increase/decrease. Trust us, even if you know how to parse HTS data you will not want to :)"
  },
  {
    question: "Why can't I just ask ChatGPT",
    answer: "ChatGPT often hallucinates due to the fact that a) it uses ambiguous citation from media headlines b) cites out of date blogs / web articles and c) cannot perform product specific analysis as defined by HTS codes. We built this because we saw that ChatGPT and deep research struggle to accurately provide reliable and up to date information on how tariffs are impacting specific products."
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
