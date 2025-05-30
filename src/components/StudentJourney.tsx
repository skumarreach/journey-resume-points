
import React from 'react';

const StudentJourney = () => {
  const journeySteps = [
    {
      title: "Ravi's First Day",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "When Ravi joined us at age 8, he was hesitant to engage with others and struggled with basic communication. Our sensory-friendly orientation program helped him gradually adjust to the new environment.",
      alt: "A young student on his first day at Gurukulam, looking hesitant but curious"
    },
    {
      title: "Building Communication Skills",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Through our specialized communication program, Ravi began using visual supports and assistive technology. Within six months, his vocabulary expanded and he started initiating conversations with peers.",
      alt: "The student working with a speech therapist using visual communication tools"
    },
    {
      title: "Discovering Talents",
      image: "https://images.unsplash.com/photo-1560251180-1a0b9a9a29bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Our arts exploration program revealed Ravi's natural talent for visual arts. His detailed drawings became a new form of expression and built confidence that transferred to other learning areas.",
      alt: "The student showing excitement while working on an art project"
    },
    {
      title: "Vocational Skills Development",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "By age 15, Ravi joined our culinary arts program where he excelled at following recipes and food preparation. His attention to detail and artistic sensibility made him particularly skilled at presentation.",
      alt: "The student, now a teenager, learning culinary skills in the kitchen"
    },
    {
      title: "Community Integration",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Today, Ravi participates in community events and has completed an internship at a local café. His journey from a hesitant child to a confident young adult showcases the transformative power of personalized, holistic education.",
      alt: "The student participating confidently in a community event"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-red-600">Student Journey Stories</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Follow the transformative paths of our students as they grow, learn, and achieve milestones through our holistic education approach.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600 hidden md:block"></div>
            
            {journeySteps.map((step, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-3 text-blue-600">{step.title}</h3>
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="w-full rounded-lg mb-4"
                    />
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-blue-600"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentJourney;
