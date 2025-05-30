
import React from 'react';
import SectionTitle from './SectionTitle';

const OurStory = () => {
  return (
    <section id="our-story" className="py-16 px-8">
      <div className="container mx-auto">
        <SectionTitle 
          title="Our Journey of Compassion and Purpose"
          description="Founded in 2015 with love and dedication by mothers of special children, Gurukulam has grown into a beacon of hope and transformation."
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-400">
              <h3 className="text-xl font-bold text-red-600 mb-2">2015</h3>
              <p>Gurukulam was born from the vision of Mrs. Radha Nandakumar and a small group of dedicated mothers who saw the need for specialized, compassionate education for children with intellectual disabilities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-400">
              <h3 className="text-xl font-bold text-red-600 mb-2">2017</h3>
              <p>Expanded our services to include vocational training programs, with Supriya Nair pioneering our culinary skills initiative that has since helped dozens of young adults find meaningful employment.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-400">
              <h3 className="text-xl font-bold text-red-600 mb-2">2018</h3>
              <p>Released the short film "PERANBUDAN" to raise autism awareness, reaching thousands of families and educators across India and sparking important conversations about neurodiversity.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-400">
              <h3 className="text-xl font-bold text-red-600 mb-2">2020</h3>
              <p>Adapted to pandemic challenges by developing innovative remote learning solutions, ensuring our students continued to receive support during difficult times.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-400">
              <h3 className="text-xl font-bold text-red-600 mb-2">2023</h3>
              <p>Celebrated our first group of vocational program graduates achieving full-time employment, marking a significant milestone in our mission of fostering independence and dignity.</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-red-600 mb-2">150+</div>
            <div className="text-lg">Children Supported</div>
          </div>
          
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-red-600 mb-2">30+</div>
            <div className="text-lg">Successful Job Placements</div>
          </div>
          
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-red-600 mb-2">15</div>
            <div className="text-lg">Specialized Programs</div>
          </div>
          
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-red-600 mb-2">25</div>
            <div className="text-lg">Dedicated Staff Members</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
