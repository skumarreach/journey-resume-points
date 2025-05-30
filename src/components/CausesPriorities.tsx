
import React from 'react';
import SectionTitle from './SectionTitle';
import FeatureCard from './FeatureCard';

const CausesPriorities = () => {
  return (
    <section id="causes" className="py-16 px-8 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle 
          title="Our Priority Causes"
          description="Your generous contributions directly support these essential programs that build independence, confidence, and meaningful futures."
        />
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <FeatureCard 
            title="Educational Tools & Technology"
            description="Our specialized learning materials and assistive technology open doors to education for children with diverse learning needs. These tools include sensory learning kits, communication devices, adaptive computer equipment, and specialized software that make learning accessible to all students. Your donation of ₹5,000 provides a complete sensory learning kit for one student, while ₹15,000 funds an assistive communication device that gives non-verbal children a voice in the classroom."
            image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            imageAlt="Students using educational tools in a classroom"
          />
          
          <FeatureCard 
            title="Vocational Training Materials"
            description="Our industry-aligned vocational programs prepare young adults for meaningful employment and financial independence. We offer training in culinary arts, digital skills, handcrafts, and retail operations, all developed with input from industry partners to ensure relevance and employability. Your donation of ₹10,000 equips our culinary training kitchen with essential tools, while ₹25,000 funds a complete digital skills workstation where students master employable technology skills."
            image="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            imageAlt="Young adults learning culinary skills"
          />
          
          <FeatureCard 
            title="Life Skills Programs"
            description="Our life skills curriculum empowers students to navigate daily activities with confidence and independence. Using structured teaching methodologies and real-world practice opportunities, we focus on essential skills like personal care, money management, time concepts, and social interactions. Your donation of ₹8,000 funds our simulated apartment where students practice independent living skills, while ₹20,000 supports a complete community integration program including transportation for real-world practice."
            image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            imageAlt="Students practicing life skills in a simulated apartment setting"
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          <FeatureCard 
            title="Education Sponsorship"
            description="Our academic program follows the National Institute of Open Schooling curriculum, adapted to each student's unique learning profile. Using multi-sensory teaching methods, assistive technology, and differentiated instruction, we ensure concepts are presented in ways that maximize comprehension and retention. Your sponsorship of ₹30,000 annually provides a child with comprehensive educational support including specialized materials, trained educators, and individualized learning plans tailored to their unique needs and abilities."
            image="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            imageAlt="Student receiving personalized academic support"
          />
          
          <FeatureCard 
            title="Employment Programs"
            description="Our employment initiative bridges the gap between training and workplace success. We partner with local businesses to create meaningful employment opportunities for our graduates, providing job coaching, workplace accommodations, and ongoing support to ensure successful transitions. Your donation of ₹15,000 funds a job coach who supports multiple students in their workplace transitions, while ₹40,000 establishes a new employment partnership with a local business, creating sustainable job opportunities."
            image="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            imageAlt="Young adult working in a supported employment setting"
          />
          
          <FeatureCard 
            title="Family Support Services"
            description="We believe that parents are essential partners in their child's educational journey. Our comprehensive family support program includes monthly parent training workshops, individual consultation sessions, and a parent support group that builds community and shared resources. Your donation of ₹12,000 funds our parent resource library and training materials, while ₹35,000 supports a series of specialized workshops led by experts in various aspects of special needs care and education."
            image="https://images.unsplash.com/photo-1516627145497-ae6968895b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            imageAlt="Parent and teacher in consultation about a student's progress"
          />
        </div>
      </div>
    </section>
  );
};

export default CausesPriorities;
