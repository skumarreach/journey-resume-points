
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ContactMain = () => {
  const [formData, setFormData] = useState({
    inquiryType: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form. In a real implementation, your message would be sent to our team.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg" id="contact-form">
            <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
            <p className="mb-6">We aim to respond to all inquiries within 24 hours during business days.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium mb-2">Inquiry Type</label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Please select</option>
                  <option value="program-info">Program Information</option>
                  <option value="enrollment">Enrollment Process</option>
                  <option value="current-family">Current Family Support</option>
                  <option value="volunteer">Volunteering Opportunities</option>
                  <option value="donation">Donation Inquiries</option>
                  <option value="other">Other</option>
                </select>
                <small className="text-gray-500 text-sm">Selecting a category helps us direct your inquiry to the right team.</small>
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name *</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <small className="text-gray-500 text-sm">Optional, but helpful if you prefer we call you back.</small>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="file-upload" className="block text-sm font-medium mb-2">Attach File (Optional)</label>
                <input
                  type="file"
                  id="file-upload"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <small className="text-gray-500 text-sm">Max file size: 5MB. Accepted formats: PDF, DOC, JPG.</small>
              </div>
              
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-sm">
                  I consent to Gurukulam storing and processing my data to respond to my inquiry. <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="mt-1"
                />
                <label htmlFor="newsletter" className="text-sm">
                  I'd like to receive occasional updates about Gurukulam's programs and events.
                </label>
              </div>
              
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                Send Message
              </Button>
              
              <p className="text-sm text-gray-600">
                <strong>Your privacy matters:</strong> Information submitted through this form is used solely to respond to your inquiry and will not be shared with third parties. See our <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> for details.
              </p>
            </form>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Our Location</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-red-600">📍</div>
                <div>
                  <h4 className="font-bold mb-2">Address</h4>
                  <p>Y-101, 6th Main Rd, Y Block<br />Anna Nagar, Chennai<br />Tamil Nadu 600040, India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-red-600">🕒</div>
                <div>
                  <h4 className="font-bold mb-2">Operating Hours</h4>
                  <p><strong>Monday to Friday:</strong> 9:00 AM - 5:00 PM<br />
                  <strong>Saturday:</strong> 9:00 AM - 1:00 PM<br />
                  <strong>Sunday:</strong> Closed</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-red-600">🚌</div>
                <div>
                  <h4 className="font-bold mb-2">Getting Here</h4>
                  <p><strong>By Bus:</strong> Routes 27B, 47A stop within 100m<br />
                  <strong>By Metro:</strong> Anna Nagar Tower station (1.2km)<br />
                  <strong>Parking:</strong> Available on premises</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2392257513454!2d80.20673431482233!3d13.086618990774392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264078822719b%3A0xbda01077b5802a60!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1653389714264!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map showing Gurukulam location"
              />
            </div>
            
            <h3 className="text-xl font-bold mt-8 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors" aria-label="Facebook">f</a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors" aria-label="Twitter">t</a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors" aria-label="Instagram">i</a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors" aria-label="YouTube">y</a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
