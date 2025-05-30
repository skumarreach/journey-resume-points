
import React from 'react';
import SectionTitle from './SectionTitle';

const OurTeam = () => {
  return (
    <section id="our-team" className="py-16 px-8 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle 
          title="Our Visionary Leadership"
          description="Meet the dedicated individuals whose passion and expertise guide our mission."
        />
        
        <div className="space-y-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                alt="Mrs. Radha Nandakumar" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Mrs. Radha Nandakumar</h3>
              <h4 className="text-xl text-gray-600 mb-4">Founder and Chairperson</h4>
              <p className="text-gray-700 mb-4">
                With over 25 years of experience in special education, Mrs. Radha Nandakumar has dedicated her life to transforming how society perceives and supports children with special needs. Her journey began as a special educator, where she witnessed firsthand the untapped potential in children who were often overlooked by traditional educational systems.
              </p>
              <div className="border-l-4 border-yellow-400 pl-4 italic text-gray-600 my-6">
                "Every child has unique gifts waiting to be discovered. Our role is not to fix or change them, but to create environments where their natural abilities can flourish and their challenges can be navigated with dignity."
              </div>
              <p className="text-gray-700">
                Mrs. Radha's contributions to the field include co-authoring a nationally recognized diploma course on disability management, creating educational resources with the Commonwealth Educational Media Centre for Asia (CEMCA), and producing the impactful short film "PERANBUDAN" in 2018 to raise autism awareness.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                alt="Supriya Nair" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Supriya Nair</h3>
              <h4 className="text-xl text-gray-600 mb-4">Trustee and Vocational Training Director</h4>
              <p className="text-gray-700 mb-4">
                Supriya Nair brings both professional expertise and personal passion to her role at Gurukulam. As the mother of a child with special needs, she understands intimately the challenges families face and the importance of building pathways to independence and dignity.
              </p>
              <div className="border-l-4 border-yellow-400 pl-4 italic text-gray-600 my-6">
                "Independence is not about doing everything alone—it's about having the agency to make choices and contribute meaningfully to society."
              </div>
              <p className="text-gray-700">
                Supriya's innovative approach to vocational training has transformed our culinary arts program, which now boasts an 85% employment rate for graduates. Under her leadership, our vocational programs have expanded to include digital skills training, retail operations, and handcrafts.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                alt="N. Srinivasa Raghavan" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">N. Srinivasa Raghavan</h3>
              <h4 className="text-xl text-gray-600 mb-4">Technology Integration Director</h4>
              <p className="text-gray-700 mb-4">
                With 32 years of experience in the IT industry, N. Srinivasa Raghavan brings invaluable technological expertise to Gurukulam. His commitment to improving the lives of specially-abled children stems from a deep belief in technology's power to level the playing field.
              </p>
              <div className="border-l-4 border-yellow-400 pl-4 italic text-gray-600 my-6">
                "Technology is not just about devices and software—it's about removing barriers and creating bridges."
              </div>
              <p className="text-gray-700">
                His initiatives include establishing our computer lab with adaptive equipment, developing a technology lending library for families, and creating partnerships with tech companies that provide both resources and future employment opportunities for our students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
