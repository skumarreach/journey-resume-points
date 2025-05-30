
import React from 'react';
import ModernFeatureCard from './ModernFeatureCard';

const IncludenessSection = () => {
  const features = [
    {
      title: "Sensory-Friendly Environments",
      description: "We design spaces with adjustable lighting, quiet zones, and sensory tools to ensure comfort and reduce overwhelm. Our sensory-friendly approach allows everyone to engage and learn without unnecessary barriers.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      imageAlt: "A classroom with diverse learning materials"
    },
    {
      title: "Flexible Learning Approaches",
      description: "Our programs incorporate visual supports, hands-on activities, technology, and personalized pacing to accommodate diverse learning styles. We offer multiple pathways to engagement and understanding.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      imageAlt: "People collaborating on a project"
    },
    {
      title: "Community Integration",
      description: "We partner with local businesses, schools, and organizations to create opportunities for meaningful participation. From internships to civic engagement, we're building pathways for valued community membership.",
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      imageAlt: "A diverse group of people in a community setting"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-2 text-sm text-purple-300 mb-6">
            Inclusive Spaces
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Creating 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Inclusive </span>
            Spaces
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Building environments where everyone belongs and can participate fully.
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

export default IncludenessSection;
