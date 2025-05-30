
import React from 'react';
import SectionTitle from './SectionTitle';

const ImpactStories = () => {
  return (
    <section id="impact-stories" className="py-16 px-8">
      <div className="container mx-auto">
        <SectionTitle 
          title="Stories of Transformation"
          description="Meet the remarkable individuals whose lives have been changed through your generous support."
        />
        
        <div className="flex flex-wrap items-center mb-16 gap-8">
          <div className="flex-1 min-w-80">
            <img 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
              alt="Arjun working confidently in a bakery"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 min-w-96">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Arjun's Journey to Independence</h3>
            <p className="mb-4">When Arjun first came to Gurukulam at age 12, he struggled with basic communication and had limited self-care skills. Through our personalized education program and life skills training, Arjun made remarkable progress over five years.</p>
            <p className="mb-4">Today, at 22, Arjun is employed at a local bakery where he excels in food preparation and packaging. He lives semi-independently, manages his own finances, and has become an advocate for others with special needs in his community.</p>
            <blockquote className="border-l-4 border-yellow-400 pl-4 italic my-6">
              "Before finding Gurukulam, we couldn't imagine Arjun living independently or holding a job. The transformation has been nothing short of miraculous. He now has purpose, dignity, and a community that values his contributions."
            </blockquote>
            <p className="font-semibold">— Priya Sharma, Arjun's mother</p>
            <p className="mt-4">Your donations directly funded the vocational training equipment and job coaching that made Arjun's journey possible. With your continued support, we can help more young adults like Arjun achieve independence and dignity.</p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex-1 min-w-96 order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Meera Finds Her Voice</h3>
            <p className="mb-4">Meera was diagnosed with autism at age 3 and was non-verbal when she joined Gurukulam. Through our specialized communication program and assistive technology funded by generous donors, Meera began to express herself using a tablet-based communication system.</p>
            <p className="mb-4">Over time, with consistent support and the right tools, Meera developed verbal communication skills and discovered a talent for digital art. Now 16, she creates beautiful digital illustrations and has even designed logos for local businesses.</p>
            <blockquote className="border-l-4 border-yellow-400 pl-4 italic my-6">
              "The day Meera first used her communication device to tell me she loved me, I knew that Gurukulam had given us a priceless gift. The teachers saw potential in her when others only saw limitations. Today, she expresses herself not just through words, but through her remarkable artwork."
            </blockquote>
            <p className="font-semibold">— Lakshmi Venkat, Meera's mother</p>
            <p className="mt-4">Your donations provided the assistive technology and specialized instruction that helped Meera find her voice and discover her talents. With your help, we can continue to provide these life-changing tools to more children.</p>
          </div>
          <div className="flex-1 min-w-80 order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
              alt="Meera creating digital art on a tablet"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
