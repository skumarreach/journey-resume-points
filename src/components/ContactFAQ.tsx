
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the best way to inquire about enrollment?",
      answer: "The most efficient way to start the enrollment process is to contact our Admissions Coordinator, Rajesh Kumar, directly at admissions@gurukulamindia.org or by calling +91 7305532666 (ext. 102). You can also use our contact form and select \"Enrollment Process\" as your inquiry type."
    },
    {
      question: "How quickly can I expect a response to my inquiry?",
      answer: "We strive to respond to all inquiries within 24 hours during business days (Monday-Friday). For urgent matters, we recommend calling our main number at +91 7305532666."
    },
    {
      question: "Can I visit the center before enrolling my child?",
      answer: "Yes, we encourage families to visit our center before enrollment. We offer scheduled tours every Tuesday and Thursday between 10:00 AM and 12:00 PM. Please contact our Admissions Coordinator to arrange a visit."
    },
    {
      question: "Is there parking available at the center?",
      answer: "Yes, we have dedicated parking spaces for visitors on our premises. Additionally, there is street parking available along 6th Main Road."
    },
    {
      question: "How can I support Gurukulam as a volunteer?",
      answer: "We welcome volunteers who can contribute their time and skills. Please use our contact form and select \"Volunteering Opportunities\" as your inquiry type, or email volunteer@gurukulamindia.org with your areas of interest and availability."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-red-600">Frequently Asked Questions</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Find quick answers to common questions about contacting and visiting Gurukulam.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 mb-6">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <span className="text-2xl">{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && (
                <div className="mt-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="mb-4">Don't see your question here? Contact us directly and we'll be happy to help.</p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <a href="#contact-form">Ask Your Question</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
