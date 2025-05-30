
import React from 'react';
import SectionTitle from './SectionTitle';

const CausesMission = () => {
  return (
    <section id="our-mission" className="py-16 px-8">
      <div className="container mx-auto">
        <SectionTitle 
          title="Your Support Makes a Difference"
          description="At Gurukulam, we believe in the extraordinary potential within every child. Your contributions directly fund programs that transform lives through personalized education, skill development, and community integration."
        />
        
        <div className="flex flex-wrap justify-around text-center mt-12">
          <div className="flex-1 min-w-48 mx-4 my-8 p-8 bg-white rounded-lg shadow-lg">
            <div className="text-5xl font-bold text-red-600 mb-2">150+</div>
            <div className="text-lg">Children Supported Annually</div>
          </div>
          
          <div className="flex-1 min-w-48 mx-4 my-8 p-8 bg-white rounded-lg shadow-lg">
            <div className="text-5xl font-bold text-red-600 mb-2">85%</div>
            <div className="text-lg">of Vocational Graduates Employed</div>
          </div>
          
          <div className="flex-1 min-w-48 mx-4 my-8 p-8 bg-white rounded-lg shadow-lg">
            <div className="text-5xl font-bold text-red-600 mb-2">30+</div>
            <div className="text-lg">Community Partners</div>
          </div>
          
          <div className="flex-1 min-w-48 mx-4 my-8 p-8 bg-white rounded-lg shadow-lg">
            <div className="text-5xl font-bold text-red-600 mb-2">12</div>
            <div className="text-lg">Years of Transformative Impact</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CausesMission;
