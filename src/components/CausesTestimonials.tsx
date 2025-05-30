
import React from 'react';
import SectionTitle from './SectionTitle';

const CausesTestimonials = () => {
  return (
    <section className="py-16 px-8 bg-blue-600 text-white">
      <div className="container mx-auto">
        <SectionTitle 
          title="Parent Testimonials"
          description="Hear from families whose lives have been transformed through our programs."
        />
        
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <p className="text-xl italic mb-6">
              "Gurukulam has been a blessing. We finally found the best school for our child. The personalized attention, structured approach, and emphasis on both academic and life skills have made an incredible difference. For the first time, we see a clear path forward for our son's future."
            </p>
            <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Ms. B Jhansi" 
                className="w-20 h-20 rounded-full mb-4 border-4 border-white object-cover"
              />
              <p className="font-bold">Ms. B Jhansi</p>
              <div className="text-yellow-400">★★★★★</div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xl italic mb-6">
              "Thank you to all the staff at Gurukulam for your dedication and patience. My daughter's progress has been remarkable in every area. She's gained confidence, developed new skills, and found joy in learning. The vocational training program has given us hope that she can have a meaningful, independent future."
            </p>
            <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Ms. T.S. KrishnaKumar" 
                className="w-20 h-20 rounded-full mb-4 border-4 border-white object-cover"
              />
              <p className="font-bold">Ms. T.S. KrishnaKumar</p>
              <div className="text-yellow-400">★★★★★</div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xl italic mb-6">
              "We've seen so many positive changes in our son since he started at Gurukulam. The holistic approach addresses not just academic needs but social, emotional, and practical life skills. The teachers truly understand each child's unique challenges and strengths. We're deeply grateful for their efforts."
            </p>
            <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Mr. Rajesh Menon" 
                className="w-20 h-20 rounded-full mb-4 border-4 border-white object-cover"
              />
              <p className="font-bold">Mr. Rajesh Menon</p>
              <div className="text-yellow-400">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CausesTestimonials;
