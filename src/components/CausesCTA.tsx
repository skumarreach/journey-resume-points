
import React from 'react';

const CausesCTA = () => {
  return (
    <section className="py-16 px-8 bg-red-600 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Together, We Can Transform Lives</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Your contribution creates pathways to independence, dignity, and meaningful futures for children and young adults with special needs. Every donation, regardless of size, makes a difference.
        </p>
        <div className="space-x-4">
          <a href="#donation-options" className="inline-block bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Donate Now
          </a>
          <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CausesCTA;
