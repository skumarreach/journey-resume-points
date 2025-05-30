
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section id="get-involved" className="py-16 px-8 bg-gradient-to-r from-blue-800 to-indigo-900 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Join Our Community of Giving</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Together, we can create a world where neurodiversity is celebrated, where every person has opportunities to contribute their unique gifts, and where kindness and understanding bridge our differences.
        </p>
        <div className="space-x-4">
          <Button className="bg-white text-blue-800 hover:bg-cyan-50 px-6 py-3 rounded-full text-lg font-bold">
            Donate Now
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-full text-lg font-bold">
            Volunteer
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
