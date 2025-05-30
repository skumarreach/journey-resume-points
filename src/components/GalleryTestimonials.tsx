
import React from 'react';

const GalleryTestimonials = () => {
  const testimonials = [
    {
      text: "The transformation in my son since joining Gurukulam has been remarkable. The personalized approach and emphasis on building on his strengths rather than focusing on limitations has given him confidence I never thought possible. The photos from his vocational training program show a young man who has found his purpose.",
      author: "Lakshmi Venkat",
      role: "Parent of a 17-year-old student"
    },
    {
      text: "As a community partner who employs Gurukulam graduates, I've been consistently impressed by their work ethic, attention to detail, and positive attitude. The vocational training program truly prepares students for meaningful employment by focusing on both technical and social skills needed in the workplace.",
      author: "Rajesh Menon",
      role: "Local Business Owner"
    },
    {
      text: "Gurukulam's approach to education goes beyond academics to nurture the whole child. The gallery of activities shows the diversity of experiences offered—from academic learning to creative expression to community integration. Each activity is thoughtfully designed to build skills, confidence, and joy.",
      author: "Dr. Priya Sharma",
      role: "Special Education Consultant"
    }
  ];

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Voices from Our Community</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Hear from parents, educators, and community members about the impact of our programs.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center py-8">
              <p className="text-xl italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="font-bold text-lg">{testimonial.author}</p>
              <p className="text-blue-200">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryTestimonials;
