
import React from 'react';

const DonateTiers = () => {
  const handleDonateClick = (amount: number) => {
    const element = document.getElementById('donation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-red-600">How Your Gift Makes a Difference</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Choose a giving level that matches your passion for supporting children with special needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="bg-blue-600 text-white p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Friend</h3>
              <div className="text-3xl font-bold">₹1,000</div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Educational materials for one child for a month
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Art supplies for creative expression sessions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Sensory learning tools for classroom activities
                </li>
              </ul>
              <p className="text-sm mb-6">
                Your gift as a Friend provides essential learning materials that help our students engage with their education in meaningful ways.
              </p>
              <button 
                onClick={() => handleDonateClick(1000)}
                className="w-full border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Donate ₹1,000
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="bg-orange-600 text-white p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Champion</h3>
              <div className="text-3xl font-bold">₹5,000</div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  One month of specialized therapy sessions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Communication devices for non-verbal students
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Adaptive physical education equipment
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Recognition in our annual report
                </li>
              </ul>
              <p className="text-sm mb-6">
                As a Champion, your contribution directly supports the specialized therapies that help our students overcome challenges and develop essential life skills.
              </p>
              <button 
                onClick={() => handleDonateClick(5000)}
                className="w-full border-2 border-orange-600 text-orange-600 px-4 py-2 rounded-full font-bold hover:bg-orange-600 hover:text-white transition-colors"
              >
                Donate ₹5,000
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="bg-red-600 text-white p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Guardian</h3>
              <div className="text-3xl font-bold">₹10,000</div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Vocational training equipment for job skills
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Technology for digital literacy development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Field trips for community integration
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Recognition on our donor wall
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Invitation to annual appreciation event
                </li>
              </ul>
              <p className="text-sm mb-6">
                Guardians provide substantial support that helps our students develop independence and prepare for meaningful employment and community participation.
              </p>
              <button 
                onClick={() => handleDonateClick(10000)}
                className="w-full border-2 border-red-600 text-red-600 px-4 py-2 rounded-full font-bold hover:bg-red-600 hover:text-white transition-colors"
              >
                Donate ₹10,000
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="bg-purple-600 text-white p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Visionary</h3>
              <div className="text-3xl font-bold">₹25,000</div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Comprehensive program for one child for a term
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Teacher training for specialized instruction
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Facility improvements for accessibility
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Named scholarship opportunity
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Personal impact report and facility tour
                </li>
              </ul>
              <p className="text-sm mb-6">
                As a Visionary, your generous gift provides transformative support that changes the trajectory of a child's life through comprehensive educational and therapeutic programming.
              </p>
              <button 
                onClick={() => handleDonateClick(25000)}
                className="w-full border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-full font-bold hover:bg-purple-600 hover:text-white transition-colors"
              >
                Donate ₹25,000
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Monthly Giving: The Gurukulam Circle</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Join our monthly giving program to provide sustainable support that helps us plan effectively and expand our impact.
          </p>
          <p className="mb-6">
            Monthly donors receive quarterly impact updates, special recognition, and invitations to exclusive events.
          </p>
          <button 
            onClick={() => handleDonateClick(0)}
            className="bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
          >
            Become a Monthly Donor
          </button>
        </div>
      </div>
    </section>
  );
};

export default DonateTiers;
