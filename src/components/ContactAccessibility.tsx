
import React from 'react';
import { Button } from '@/components/ui/button';

const ContactAccessibility = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-red-600">Accessibility Support</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            We are committed to making our communication channels accessible to everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Alternative Contact Methods</h3>
            <ul className="space-y-4">
              <li>
                <strong>Sign Language Support:</strong> Available by appointment for in-person meetings. Please request at least 48 hours in advance.
              </li>
              <li>
                <strong>Text-Based Communication:</strong> For those who prefer or require text-based communication, please email or use WhatsApp.
              </li>
              <li>
                <strong>Simplified Communication:</strong> We can provide information in simplified language upon request.
              </li>
              <li>
                <strong>Support Person:</strong> You're welcome to bring a support person to any meeting or call.
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Facility Accessibility</h3>
            <ul className="space-y-4">
              <li>
                <strong>Wheelchair Access:</strong> Our facility is fully wheelchair accessible with ramps and elevators.
              </li>
              <li>
                <strong>Accessible Parking:</strong> Designated accessible parking spaces are available near the entrance.
              </li>
              <li>
                <strong>Quiet Space:</strong> A quiet room is available for those who may need a low-sensory environment.
              </li>
              <li>
                <strong>Assistance Animals:</strong> Service and assistance animals are welcome in our facility.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="mb-6">If you require any specific accommodations not listed here, please let us know how we can support your communication needs.</p>
          <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
            <a href="mailto:accessibility@gurukulamindia.org">Request Accommodation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactAccessibility;
