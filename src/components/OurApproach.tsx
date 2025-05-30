
import React from 'react';
import SectionTitle from './SectionTitle';
import FeatureCard from './FeatureCard';

const OurApproach = () => {
  return (
    <section id="our-approach" className="py-16 px-8">
      <div className="container mx-auto">
        <SectionTitle 
          title="Our Holistic Approach"
          description="Comprehensive programs designed to nurture every aspect of a child's development and potential."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            image="https://images.unsplash.com/photo-1516627145497-ae6968895b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            title="Life Skills Development"
            description="Our comprehensive life skills curriculum empowers children to navigate daily activities with confidence and independence. Using structured teaching methodologies and real-world practice opportunities, we focus on essential skills like personal care, money management, time concepts, and social interactions."
          />
          
          <FeatureCard
            image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            title="Vocational Training"
            description="Our industry-aligned vocational programs prepare young adults for meaningful employment and financial independence. Current offerings include culinary arts, digital skills, handcrafts, and retail operations, all developed in partnership with industry experts."
          />
          
          <FeatureCard
            image="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            title="Physical Well-being"
            description="Our holistic approach recognizes the profound connection between physical health and cognitive development. Our adaptive physical education program includes specialized yoga sessions, sensory integration activities, and modified sports."
          />
          
          <FeatureCard
            image="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            title="Personalized Academics"
            description="Our academic program follows the National Institute of Open Schooling curriculum, adapted to each student's unique learning profile. Using multi-sensory teaching methods, assistive technology, and differentiated instruction."
          />
          
          <FeatureCard
            image="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            title="Family Partnership"
            description="We believe that parents are essential partners in their child's educational journey. Our comprehensive family support program includes monthly parent training workshops, individual consultation sessions, and a parent support group."
          />
          
          <FeatureCard
            image="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            title="Community Integration"
            description="Our community integration program creates meaningful connections beyond our center walls. Through structured community outings, service learning projects, and inclusive events, students practice social skills."
          />
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
