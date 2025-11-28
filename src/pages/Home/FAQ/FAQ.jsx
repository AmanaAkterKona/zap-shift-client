import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How does this posture corrector work?",
      a: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders."
    },
    {
      q: "Is it suitable for all ages and body types?",
      a: "Yes, it is designed to fit a wide range of body types and can be used by people of different age groups."
    },
    {
      q: "Does it really help with back pain and posture improvement?",
      a: "Consistent use helps reduce back pain, strengthens muscles, and supports long-term posture improvement."
    },
    {
      q: "Does it have smart features like vibration alerts?",
      a: "Some models include vibration alerts to remind you to maintain correct posture."
    },
    {
      q: "How will I be notified when the product is back in stock?",
      a: "You will receive an email or app notification once the product becomes available."
    },
  ];

  return (
    <div className="w-full bg-[#F7F9F8] py-16 px-4 md:px-20">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold text-gray-900">
        Frequently Asked Question (FAQ)
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with ease!
      </p>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto mt-10 space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl border ${
              openIndex === index
                ? "bg-[#D9F0EE] border-[#8BCAC3]"
                : "bg-white border-gray-200"
            }`}
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span
                className={`font-semibold ${
                  openIndex === index ? "text-[#004D52]" : "text-gray-800"
                }`}
              >
                {item.q}
              </span>
              {openIndex === index ? (
                <FaChevronUp className="text-[#004D52]" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="flex items-center gap-2 bg-[#B5E352] hover:bg-[#a4d447] text-black font-semibold px-6 py-3 rounded-full shadow-md">
          See More FAQ’s
          <div className="bg-black text-white p-1 rounded-full">
            <FaChevronUp className="rotate-90" size={14} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FAQ;
