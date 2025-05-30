
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
}

const FeatureCard = ({ title, description, image, imageAlt }: FeatureCardProps) => {
  return (
    <Card className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={imageAlt || title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
