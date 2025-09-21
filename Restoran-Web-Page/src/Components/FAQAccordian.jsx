
import { useState } from "react";
import FAQItem from "./FAQItem";

const FAQAccordion = ({ faqs, className = "" }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => toggleFAQ(index)}
        />
      ))}
    </div>
  );
};

export default FAQAccordion;