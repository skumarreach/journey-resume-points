
import React from 'react';

const DonateStories = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-red-600">Stories of Transformation</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Meet the children whose lives have been changed through the generosity of donors like you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Arjun smiling while working on an art project" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Arjun's Journey to Independence</h3>
              <p className="mb-4">
                When Arjun first came to Gurukulam at age 7, he struggled with basic communication and self-care skills. Through our specialized education program and speech therapy sessions—funded by generous donors—Arjun has made remarkable progress.
              </p>
              <p className="mb-4">
                Today at 12, he communicates confidently, excels in mathematics, and has discovered a talent for art. His paintings were recently featured in a local exhibition, and he dreams of becoming an artist.
              </p>
              <div className="border-l-4 border-yellow-400 pl-4 italic mb-4">
                "Before Gurukulam, we couldn't imagine Arjun would ever be able to express himself so beautifully. The specialized attention and therapies have unlocked his potential in ways we never thought possible." — Arjun's mother
              </div>
              <p className="font-bold">
                Your donation of ₹5,000 can provide a month of specialized art therapy sessions for children like Arjun, helping them discover their unique talents and build confidence.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Meera learning vocational skills in the kitchen" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Meera's Path to Employment</h3>
              <p className="mb-4">
                Meera joined our vocational training program at 16, after years of struggling in traditional educational settings. With limited motor skills and learning difficulties, many had underestimated her capabilities.
              </p>
              <p className="mb-4">
                Through our culinary arts program, Meera discovered her passion for baking. With adapted equipment and patient instruction, she mastered essential baking techniques. After completing our two-year program, Meera now works part-time at a local bakery, earning her own income for the first time in her life.
              </p>
              <div className="border-l-4 border-yellow-400 pl-4 italic mb-4">
                "Gurukulam didn't just teach me how to bake—they taught me that I have value and can contribute to society. Now I have my own income and can help support my family." — Meera
              </div>
              <p className="font-bold">
                Your donation of ₹10,000 can provide vocational training equipment that helps students like Meera develop marketable skills and achieve financial independence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateStories;
