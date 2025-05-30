
import React from 'react';
import ModernFeatureCard from './ModernFeatureCard';

const UnderstandingSection = () => {
  const features = [
    {
      title: "Beyond Awareness",
      description: "Autism is not simply a condition to be aware of—it's a different way of experiencing and interacting with the world. Autistic individuals possess unique perspectives, abilities, and ways of processing information that contribute to the rich tapestry of human neurodiversity.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      imageAlt: "A colorful puzzle piece pattern representing neurodiversity"
    },
    {
      title: "Strengths and Abilities", 
      description: "Many autistic individuals demonstrate remarkable abilities in pattern recognition, detail orientation, memory, and creative thinking. Some excel in fields like mathematics, music, art, technology, and literature. We focus on identifying and nurturing these unique strengths.",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      imageAlt: "Diverse hands joining together in unity"
    },
    {
      title: "Communication and Connection",
      description: "Autistic individuals may communicate differently, but their desire for connection and understanding is just as profound. We create environments where diverse communication styles are respected and supported, fostering meaningful connections.",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      imageAlt: "A person using assistive technology"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-2 text-sm text-emerald-300 mb-6">
            Understanding & Acceptance
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Understanding Autism and 
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> Neurodiversity</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Embracing the unique perspectives and abilities that enrich our community and world.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ModernFeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              imageAlt={feature.imageAlt}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnderstandingSection;
