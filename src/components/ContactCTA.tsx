
import React from 'react';
import { Button } from '@/components/ui/button';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold mb-6">Ready to Connect?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Whether you're a parent seeking support, a professional looking to collaborate, or a community member wanting to contribute, we're here to help you make a difference in the lives of children with special needs.
        </p>
        <div className="space-x-4">
          <Button className="bg-white text-blue-600 hover:bg-gray-100">
            <a href="#contact-form">Contact Us Today</a>
          </Button>
          <Button className="bg-red-600 hover:bg-red-700">
            Donate Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
