
import React from 'react';

const ContactChannels = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-red-600">How Can We Help You?</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Choose the communication channel that works best for you. Our team is ready to assist with any questions about our programs, enrollment, or support services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-blue-600">📞</div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="mb-2">Speak directly with our team</p>
            <p className="font-bold">+91 7305532666</p>
            <p className="text-gray-500 text-sm">Mon-Fri: 9am-5pm</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-blue-600">✉️</div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="mb-2">Get a detailed response</p>
            <p className="font-bold">info@gurukulamindia.org</p>
            <p className="text-gray-500 text-sm">Response within 24 hours</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-blue-600">💬</div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="mb-2">Quick messages and updates</p>
            <p className="font-bold">+91 7305532666</p>
            <p className="text-gray-500 text-sm">Available during business hours</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-blue-600">🏢</div>
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="mb-2">Meet our team in person</p>
            <p className="font-bold">Y-101, 6th Main Rd</p>
            <p className="text-gray-500 text-sm">By appointment preferred</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactChannels;
