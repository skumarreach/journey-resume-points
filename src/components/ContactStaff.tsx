
import React from 'react';
import { Button } from '@/components/ui/button';

const ContactStaff = () => {
  const staffMembers = [
    {
      name: "Dr. Priya Sharma",
      role: "Director & Founder",
      email: "priya@gurukulamindia.org",
      ext: "101",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Dr. Sharma oversees all programs and operations at Gurukulam. Contact her for strategic partnerships and media inquiries."
    },
    {
      name: "Rajesh Kumar",
      role: "Admissions Coordinator",
      email: "admissions@gurukulamindia.org",
      ext: "102",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Rajesh handles all enrollment inquiries and guides families through the admission process. Available Mon-Fri, 10am-4pm."
    },
    {
      name: "Anita Desai",
      role: "Special Education Coordinator",
      email: "education@gurukulamindia.org",
      ext: "103",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Anita leads our educational programs and can answer questions about curriculum, teaching methods, and student progress."
    },
    {
      name: "Dr. Sanjay Patel",
      role: "Therapy Services Head",
      email: "therapy@gurukulamindia.org",
      ext: "104",
      image: "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Dr. Patel oversees all therapeutic interventions including speech, occupational, and physical therapy services."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-red-600">Meet Our Team</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Our dedicated staff is here to support you and your family. Feel free to reach out directly to the appropriate department for specialized assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staffMembers.map((staff, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={staff.image} 
                alt={staff.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-600">{staff.name}</h3>
                <div className="text-sm text-gray-500 mb-4">{staff.role}</div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="text-red-600 mr-2">✉️</span>
                    <a href={`mailto:${staff.email}`} className="text-blue-600 hover:underline">{staff.email}</a>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-red-600 mr-2">📞</span>
                    <span>Ext: {staff.ext}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{staff.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
            View Full Staff Directory
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactStaff;
