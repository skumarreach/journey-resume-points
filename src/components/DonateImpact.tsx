
import React from 'react';

const DonateImpact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-red-600">Your Impact in Action</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            When you donate to Gurukulam, you directly contribute to transforming the lives of children with special needs through specialized education, therapy, and vocational training.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-4 text-red-600">📚</div>
            <div className="text-4xl font-bold mb-2 text-blue-600">150+</div>
            <div className="text-lg">Children Supported Annually</div>
          </div>
          
          <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-4 text-red-600">🎓</div>
            <div className="text-4xl font-bold mb-2 text-blue-600">85%</div>
            <div className="text-lg">of Vocational Graduates Employed</div>
          </div>
          
          <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-4 text-red-600">🧩</div>
            <div className="text-4xl font-bold mb-2 text-blue-600">12</div>
            <div className="text-lg">Specialized Programs Offered</div>
          </div>
          
          <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-4 text-red-600">👨‍👩‍👧‍👦</div>
            <div className="text-4xl font-bold mb-2 text-blue-600">300+</div>
            <div className="text-lg">Families Supported</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateImpact;
