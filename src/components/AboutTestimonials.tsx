
import React from 'react';
import SectionTitle from './SectionTitle';

const AboutTestimonials = () => {
  return (
    <section className="py-16 px-8 bg-blue-600 text-white">
      <div className="container mx-auto">
        <SectionTitle 
          title="Voices from Our Community"
          description="Stories of transformation, hope, and achievement from families who have journeyed with us."
        />
        
        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-xl italic mb-6">
              "Before finding Gurukulam, we felt lost and alone in navigating our son's autism diagnosis. The team didn't just offer education—they offered understanding, practical strategies, and most importantly, hope. Today, Arjun communicates confidently using his AAC device, manages his daily routine independently, and has discovered a passion for digital art. Gurukulam didn't try to change who he is—they helped him become the best version of himself."
            </p>
            <p className="font-bold text-lg">— Priya and Rahul Sharma, parents of Arjun (14)</p>
          </div>
          
          <div className="text-center">
            <p className="text-xl italic mb-6">
              "The vocational training program at Gurukulam changed my daughter's life trajectory. After struggling in traditional academic settings, Meena found her calling in the culinary program. The structured training, combined with real-world practice opportunities, prepared her not just with skills but with confidence. Today, she works at a local bakery, earns her own income, and has a community of colleagues who value her contributions. This independence seemed impossible five years ago."
            </p>
            <p className="font-bold text-lg">— Lakshmi Venkat, mother of Meena (22)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
