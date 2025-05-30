
import React from 'react';
import SectionTitle from './SectionTitle';

const DonationOptions = () => {
  return (
    <section id="donation-options" className="py-16 px-8 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle 
          title="Ways to Contribute"
          description="Choose the giving option that works best for you and see the direct impact of your generosity."
        />
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex-1 min-w-80 max-w-96 bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
            <div className="bg-blue-600 text-white text-center py-6">
              <div className="text-4xl font-bold mb-2">₹5,000</div>
              <div className="text-xl">Friend</div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Provides sensory learning materials for one student
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Funds art supplies for creative expression classes
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Supports one month of life skills training
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Recognition in our annual donor report
                </li>
              </ul>
              <a href="#" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Donate ₹5,000
              </a>
            </div>
          </div>
          
          <div className="flex-1 min-w-80 max-w-96 bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
            <div className="bg-red-600 text-white text-center py-6">
              <div className="text-4xl font-bold mb-2">₹15,000</div>
              <div className="text-xl">Champion</div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  Funds an assistive communication device
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  Provides vocational training materials for one student
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  Supports job coaching for workplace integration
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  Recognition on our donor wall
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  Quarterly impact updates
                </li>
              </ul>
              <a href="#" className="block w-full bg-red-600 text-white text-center py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
                Donate ₹15,000
              </a>
            </div>
          </div>
          
          <div className="flex-1 min-w-80 max-w-96 bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
            <div className="bg-blue-600 text-white text-center py-6">
              <div className="text-4xl font-bold mb-2">₹30,000</div>
              <div className="text-xl">Guardian</div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Sponsors a child's education for one year
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Funds a complete digital skills workstation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Supports parent training workshops
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Recognition on our website and annual report
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Personal updates about your sponsored student
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Invitation to annual donor appreciation event
                </li>
              </ul>
              <a href="#" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Donate ₹30,000
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-4">Corporate Partnerships</h3>
          <p className="max-w-4xl mx-auto mb-6">We offer customized partnership opportunities for businesses looking to make a meaningful social impact. Benefits include employee engagement activities, recognition in our materials, and the opportunity to directly support our employment program.</p>
          <a href="#" className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors">
            Learn About Corporate Partnerships
          </a>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Monthly Giving</h3>
          <p className="max-w-4xl mx-auto mb-6">Join our Sustainer Circle by becoming a monthly donor. Your recurring gift provides reliable funding that allows us to plan effectively and expand our programs to reach more children in need.</p>
          <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
            Become a Monthly Donor
          </a>
        </div>
      </div>
    </section>
  );
};

export default DonationOptions;
