
import React from 'react';

const GalleryCTA = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Be Part of Our Journey</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-600">
          Your support makes our work possible. Join us in creating a world where every child with special needs can discover their potential and live with dignity and purpose.
        </p>
        <div className="space-x-4">
          <a href="#" className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors">
            Donate Now
          </a>
          <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
            Volunteer With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryCTA;
