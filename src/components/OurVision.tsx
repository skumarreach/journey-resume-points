
import React from 'react';
import SectionTitle from './SectionTitle';

const OurVision = () => {
  return (
    <section id="our-vision" className="py-16 px-8 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle 
          title="Our Vision and Values"
          description="Guiding principles that shape our approach to education, care, and community building."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-blue-600 mb-4">★</div>
            <h3 className="text-xl font-bold text-red-600 mb-4">Dignity</h3>
            <p>We recognize and honor the inherent worth of every individual, ensuring all interactions are grounded in respect and compassion.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-blue-600 mb-4">✦</div>
            <h3 className="text-xl font-bold text-red-600 mb-4">Empowerment</h3>
            <p>We believe in nurturing independence and self-advocacy, equipping our students with the skills and confidence to shape their own futures.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-blue-600 mb-4">♥</div>
            <h3 className="text-xl font-bold text-red-600 mb-4">Inclusion</h3>
            <p>We are committed to creating a world where differences are celebrated and every person has opportunities to participate meaningfully in society.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-blue-600 mb-4">✧</div>
            <h3 className="text-xl font-bold text-red-600 mb-4">Innovation</h3>
            <p>We continuously seek creative solutions and evidence-based approaches to address the unique challenges our students face.</p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          <p>Our vision is to create a society where every individual with special needs is valued, included, and empowered to live a fulfilling life. We envision a world where differences are celebrated, barriers are removed, and every person has the opportunity to discover and share their unique gifts.</p>
          <p>At Gurukulam, we believe that with the right support, understanding, and opportunities, every child can exceed expectations and achieve their full potential. Our approach combines compassionate care with evidence-based practices, creating a nurturing environment where growth and learning flourish.</p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
