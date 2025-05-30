
import React from 'react';

const DonateTestimonials = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Why Our Donors Give</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Hear from supporters who have experienced the joy of making a difference.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="py-8">
            <p className="text-xl italic mb-6">
              "I've been donating monthly to Gurukulam for three years now. What keeps me giving is the personal updates I receive showing exactly how my contribution is helping specific children develop and thrive. It's incredibly rewarding to see the tangible impact of my support."
            </p>
            <p className="font-bold">Rajesh Kumar</p>
            <p className="text-sm opacity-80">Monthly donor since 2022</p>
          </div>
          
          <div className="py-8">
            <p className="text-xl italic mb-6">
              "As a business owner, I wanted our company's charitable giving to create meaningful change in our community. Gurukulam's transparency and the effectiveness of their programs made them an easy choice. Our team visits regularly and we can see firsthand how our support is transforming lives."
            </p>
            <p className="font-bold">Priya Sharma</p>
            <p className="text-sm opacity-80">Corporate donor</p>
          </div>
          
          <div className="py-8">
            <p className="text-xl italic mb-6">
              "After attending Gurukulam's annual showcase event, I was moved by the confidence and joy of the students. Their performances demonstrated how the right support can unlock potential that might otherwise remain hidden. I donate because I believe every child deserves that opportunity."
            </p>
            <p className="font-bold">Arun Nair</p>
            <p className="text-sm opacity-80">First-time donor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateTestimonials;
