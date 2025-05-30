
import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 px-8 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold mb-4">Stay Connected</h3>
        <p className="max-w-3xl mx-auto mb-8 text-lg">
          Subscribe to our newsletter to receive updates about our programs, success stories, and upcoming events. Learn how your donations are making a difference in the lives of our students.
        </p>
        <form className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            required 
            className="flex-1 min-w-80 px-4 py-3 border border-gray-300 rounded-full text-gray-800 text-lg"
          />
          <button 
            type="submit" 
            className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
