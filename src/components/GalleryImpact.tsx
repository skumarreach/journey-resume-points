
import React from 'react';

const GalleryImpact = () => {
  const impactItems = [
    {
      icon: "📚",
      number: "150+",
      text: "Students Supported Annually"
    },
    {
      icon: "🎓",
      number: "85%",
      text: "of Vocational Graduates Employed"
    },
    {
      icon: "🤝",
      number: "30+",
      text: "Community Partners"
    },
    {
      icon: "🏆",
      number: "12",
      text: "Years of Transformative Impact"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-red-600">Our Impact in Numbers</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Behind every image is a story of transformation. These numbers reflect the real-world impact of our programs on students, families, and communities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactItems.map((item, index) => (
            <div key={index} className="text-center p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl mb-4">{item.icon}</div>
              <div className="text-4xl font-bold mb-2 text-blue-600">{item.number}</div>
              <div className="text-lg text-gray-600">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryImpact;
