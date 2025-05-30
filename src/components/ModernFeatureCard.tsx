
import React from 'react';

interface ModernFeatureCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  index: number;
}

const ModernFeatureCard = ({ title, description, image, imageAlt, index }: ModernFeatureCardProps) => {
  return (
    <div 
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      style={{ 
        animationDelay: `${index * 200}ms`,
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-2xl mb-6 h-48">
        <img 
          src={image} 
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-blue-100 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
    </div>
  );
};

export default ModernFeatureCard;
