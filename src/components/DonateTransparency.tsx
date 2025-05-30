
import React from 'react';

const DonateTransparency = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-red-600">Transparency & Accountability</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            We are committed to using your donation effectively and responsibly to maximize our impact on the children we serve.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">How We Use Your Donation</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <div className="text-center mb-4">
                <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600">Fund Allocation Chart</span>
                </div>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">70% Programs:</span>
                <span>Direct services for children including education, therapy, and vocational training</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">20% Operations:</span>
                <span>Facility maintenance, utilities, and administrative support</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">10% Fundraising:</span>
                <span>Efforts to secure sustainable funding for our mission</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Commitment to Donors</h3>
            <p className="mb-6">
              At Gurukulam, we believe in complete transparency with our supporters. We are committed to:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Providing regular updates on how your donation is being used
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Publishing annual financial and impact reports
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Maintaining the highest standards of financial management
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Respecting your privacy and communication preferences
              </li>
            </ul>
            <p className="mb-4">
              Our financial records are reviewed annually, and we maintain all required registrations for charitable organizations in India.
            </p>
            <a href="#" className="text-blue-600 hover:underline">View our latest annual report</a>
          </div>
        </div>
        
        <div className="flex justify-center space-x-8 mt-12">
          <div className="text-center max-w-48">
            <div className="text-4xl mb-4 text-blue-600">🔒</div>
            <h4 className="font-bold mb-2">Secure Donations</h4>
            <p className="text-sm">All transactions are encrypted and secure</p>
          </div>
          
          <div className="text-center max-w-48">
            <div className="text-4xl mb-4 text-blue-600">📋</div>
            <h4 className="font-bold mb-2">Tax Benefits</h4>
            <p className="text-sm">Donations eligible for tax benefits under Section 80G</p>
          </div>
          
          <div className="text-center max-w-48">
            <div className="text-4xl mb-4 text-blue-600">📊</div>
            <h4 className="font-bold mb-2">Impact Reporting</h4>
            <p className="text-sm">Regular updates on how your donation creates change</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateTransparency;
