
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const DonateForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(10000);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    cause: 'greatest-need',
    taxReceipt: false,
    updates: true
  });

  const amounts = [1000, 5000, 10000, 25000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your generous donation! This is a demo form. In a real implementation, you would be directed to a secure payment gateway.');
  };

  return (
    <section id="donation-form-section" className="py-16 bg-white">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-red-600">Make Your Gift Today</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Your generosity creates opportunities for children with special needs to learn, grow, and thrive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg" id="donation-form">
            <h3 className="text-2xl font-bold mb-6">Donation Information</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-bold mb-4">Donation Type</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="donation-type"
                      value="one-time"
                      checked={donationType === 'one-time'}
                      onChange={(e) => setDonationType(e.target.value)}
                      className="mr-2"
                    />
                    One-time Gift
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="donation-type"
                      value="monthly"
                      checked={donationType === 'monthly'}
                      onChange={(e) => setDonationType(e.target.value)}
                      className="mr-2"
                    />
                    Monthly Gift (Gurukulam Circle)
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block font-bold mb-4">Select Amount</label>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-3 text-center border-2 rounded-lg cursor-pointer transition-all ${
                        selectedAmount === amount && !customAmount
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-300 hover:border-blue-600'
                      }`}
                    >
                      ₹{amount.toLocaleString()}
                    </button>
                  ))}
                </div>
                <div>
                  <label className="block mb-2">Custom Amount (₹)</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    min="100"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-bold mb-2">Designate Your Gift</label>
                <select
                  value={formData.cause}
                  onChange={(e) => setFormData({...formData, cause: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                >
                  <option value="greatest-need">Where Needed Most</option>
                  <option value="education">Educational Programs</option>
                  <option value="therapy">Therapy Services</option>
                  <option value="vocational">Vocational Training</option>
                  <option value="infrastructure">Facility Improvements</option>
                </select>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Personal Information</h3>
              
              <div>
                <label className="block font-bold mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              
              <div>
                <label className="block font-bold mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              
              <div>
                <label className="block font-bold mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              
              <div>
                <label className="block font-bold mb-2">Message (Optional)</label>
                <Textarea
                  placeholder="Share why you're donating or any special instructions"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={3}
                />
              </div>
              
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.taxReceipt}
                    onChange={(e) => setFormData({...formData, taxReceipt: e.target.checked})}
                    className="mr-2"
                  />
                  I need a tax receipt
                </label>
                
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.updates}
                    onChange={(e) => setFormData({...formData, updates: e.target.checked})}
                    className="mr-2"
                  />
                  Keep me updated about Gurukulam's impact (quarterly emails)
                </label>
              </div>
              
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                Complete Donation
              </Button>
              
              <div className="text-center text-sm">
                <p>Need help? Contact us at <a href="mailto:donate@gurukulamindia.org" className="text-blue-600 hover:underline">donate@gurukulamindia.org</a> or call +91 7305532666</p>
              </div>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Other Ways to Give</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-2">Corporate Partnerships</h4>
                  <p className="mb-4">
                    Engage your company in meaningful social responsibility through matching gifts, sponsored programs, or employee volunteering.
                  </p>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    Learn More
                  </Button>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">In-Kind Donations</h4>
                  <p className="mb-4">
                    Donate materials, equipment, or professional services that support our programs and operations.
                  </p>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    View Our Wishlist
                  </Button>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Legacy Giving</h4>
                  <p className="mb-4">
                    Create a lasting impact by including Gurukulam in your estate planning or making a tribute gift in honor of a loved one.
                  </p>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    Explore Options
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-bold mb-4">Bank Transfer Details</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Account Name:</strong> Gurukulam Integrated Centre for Children with Special Needs</p>
                <p><strong>Account Number:</strong> 1234567890</p>
                <p><strong>IFSC Code:</strong> ABCD0001234</p>
                <p><strong>Bank:</strong> State Bank of India, Anna Nagar Branch</p>
                <p className="mt-4">
                  Please email transfer confirmation to <a href="mailto:accounts@gurukulamindia.org" className="text-blue-600 hover:underline">accounts@gurukulamindia.org</a> for receipt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateForm;
