import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const faqs = [
    {
      q: "What is a doula?",
      a: "A doula is a trained professional who provides continuous physical, emotional, and informational support to a mother before, during, and shortly after childbirth."
    },
    {
      q: "Do you offer online courses?",
      a: "Yes, all of our training programs can be completed online with live instructor-led sessions."
    },
    {
      q: "Is certification included?",
      a: "Yes, after completing your course and passing the assessments, you will receive a certification recognized globally."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-heading font-bold text-dark mb-8">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-muted rounded-xl shadow-sm hover:shadow-md transition"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="text-lg font-medium text-dark">{faq.q}</span>
              {openIndex === index ? (
                <FiMinus className="text-[var(--color-dark)] text-2xl" />
              ) : (
                <FiPlus className="text-[var(--color-dark)] text-2xl" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-5 pb-5 text-gray-600"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
