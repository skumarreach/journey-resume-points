
import React from 'react';

const AboutCTA = () => {
  return (
    <section id="get-involved" className="py-16 px-8 bg-red-600 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Join Our Mission of Transformation</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Together, we can create a world where every child with special needs has the opportunity to discover their potential, develop their talents, and live with dignity and purpose.
        </p>
        <div className="space-x-4">
          <a href="#" className="inline-block bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Donate Now
          </a>
          <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
            Volunteer
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
