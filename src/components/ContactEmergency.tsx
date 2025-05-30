
import React from 'react';

const ContactEmergency = () => {
  return (
    <section className="py-8 bg-yellow-50">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-6 text-orange-600">Need Urgent Assistance?</h2>
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p>For immediate support during business hours, please call our main line at <strong>+91 7305532666</strong> and ask for the on-duty coordinator.</p>
          <p>Outside of business hours, for emergencies related to current students, please call our after-hours support line: <strong>+91 7305532667</strong></p>
          <p>For mental health emergencies, contact the National Mental Health Helpline: <strong>1800-599-0019</strong></p>
        </div>
      </div>
    </section>
  );
};

export default ContactEmergency;
