import React from "react";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

const FAQSection = () => {
  return (
    <section id="faq" className="w-full py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Find answers to common questions about our platform.
          </p>
        </motion.div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "Do I need any technical skills to get started?",
                answer:
                  "Not at all! Just pick your plan, send your info via WhatsApp, and we’ll handle everything — from design to delivery.",
              },
              {
                question: "Where will my website be hosted?",
                answer:
                  "Your website will be hosted for free using modern static hosting platforms. No need to pay monthly hosting fees.",
              },
              {
                question: "How will customers place orders?",
                answer:
                  "Each product will have a button that redirects to your WhatsApp with a pre-filled message — simple, fast, and personal.",
              },
              {
                question:
                  "Can I update my products later?",
                answer:
                  "Yes! Just message us on WhatsApp with the new details — we'll handle the updates based on your plan.",
              },
              {
                question: "How long does it take to build the website?",
                answer:
                  "Usually between 2 to 4 days, depending on your plan and how quickly you send the required info.",
              },
              {
                question: "What’s included in each plan?",
                answer:
                  "Each plan includes different features, like the number of products, design customization, and update frequency. You’ll see full details when you choose a plan.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="border-b border-border/40 py-2"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
