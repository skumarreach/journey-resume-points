
import React from 'react';

interface SectionTitleProps {
  title: string;
  description: string;
}

const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">{title}</h2>
      <p className="text-lg max-w-3xl mx-auto text-blue-600">{description}</p>
    </div>
  );
};

export default SectionTitle;
