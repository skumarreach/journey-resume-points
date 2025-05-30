
import React from 'react';
import SectionTitle from './SectionTitle';
import FeatureCard from './FeatureCard';

const GivingSection = () => {
  return (
    <section id="giving" className="py-16 px-8">
      <div className="container mx-auto">
        <SectionTitle 
          title="Living a Life of Giving"
          description="Discovering the profound joy and purpose in contributing to others' well-being."
        />
        
        <div className="flex flex-wrap justify-center gap-8">
          <FeatureCard 
            title="The Gift of Time"
            description="Volunteering your time and skills creates meaningful connections and supports our community. Whether you're helping with events, sharing professional expertise, or mentoring our students, your presence makes a difference. Many of our volunteers discover that they receive as much as they give—new perspectives, friendships, and a deeper understanding of neurodiversity."
            image="https://images.unsplash.com/photo-1469571486292-b53601021a68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            imageAlt="Volunteers working together on a project"
          />
          
          <FeatureCard 
            title="Sharing Knowledge"
            description="Education is a powerful form of giving. By learning about autism and neurodiversity and sharing that knowledge with others, you help create a more understanding and accepting world. Our community workshops, speaker series, and resource library offer opportunities to both learn and teach, creating ripples of understanding that extend far beyond our walls."
            image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            imageAlt="A person sharing knowledge with others"
          />
          
          <FeatureCard 
            title="Supporting Growth"
            description="Financial contributions enable us to provide specialized programs, sensory equipment, and scholarships that might otherwise be inaccessible to many families. Every donation, regardless of size, contributes to creating environments where neurodivergent individuals can discover their strengths, develop their talents, and build fulfilling lives."
            image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            imageAlt="Hands holding a small plant, representing growth and nurturing"
          />
        </div>
      </div>
    </section>
  );
};

export default GivingSection;
