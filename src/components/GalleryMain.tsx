
import React, { useState } from 'react';

interface GalleryItem {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  alt: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: 'academic',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Personalized Learning Approach',
    description: 'Our educators work one-on-one with students to develop customized learning strategies that address individual needs and learning styles.',
    tags: ['Academic Skills', 'Individualized Education'],
    alt: 'Teacher working one-on-one with a student on reading skills'
  },
  {
    id: 2,
    category: 'academic',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Multi-Sensory Mathematics',
    description: 'Students develop mathematical concepts through hands-on activities that engage multiple senses, making abstract concepts concrete and accessible.',
    tags: ['Mathematics', 'Multi-Sensory Learning'],
    alt: 'Students engaged in a group mathematics activity with manipulatives'
  },
  {
    id: 3,
    category: 'vocational',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Culinary Arts Program',
    description: 'Our culinary training program teaches food preparation, kitchen safety, and hospitality skills that prepare students for employment in the food service industry.',
    tags: ['Vocational Training', 'Culinary Skills'],
    alt: 'Young adult learning culinary skills in a kitchen setting'
  },
  {
    id: 4,
    category: 'vocational',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Sustainable Crafts Workshop',
    description: 'Students learn to create eco-friendly paper products, developing fine motor skills, following multi-step instructions, and gaining marketable production skills.',
    tags: ['Vocational Training', 'Sustainable Crafts'],
    alt: 'Student learning paper bag making as part of vocational training'
  },
  {
    id: 5,
    category: 'vocational',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Traditional Weaving Arts',
    description: 'Our weaving program preserves traditional crafts while teaching patience, precision, and pattern recognition—skills that transfer to many workplace environments.',
    tags: ['Vocational Training', 'Traditional Crafts'],
    alt: 'Student learning table mat weaving with instructor guidance'
  },
  {
    id: 6,
    category: 'physical',
    image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Adaptive Physical Education',
    description: 'Our outdoor activities program builds strength, coordination, and confidence through modified sports and games tailored to diverse ability levels.',
    tags: ['Physical Education', 'Motor Skills'],
    alt: 'Group of students participating in outdoor physical activities'
  },
  {
    id: 7,
    category: 'physical',
    image: 'https://images.unsplash.com/photo-1599447292180-45fd84092ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Therapeutic Yoga Practice',
    description: 'Our specialized yoga program improves flexibility, balance, and emotional regulation through adapted poses and breathing techniques designed for all ability levels.',
    tags: ['Mindfulness', 'Sensory Integration'],
    alt: 'Students practicing yoga poses on colorful mats'
  },
  {
    id: 8,
    category: 'creative',
    image: 'https://images.unsplash.com/photo-1560251180-1a0b9a9a29bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Expressive Arts Program',
    description: 'Through various art mediums, students develop self-expression, emotional awareness, and fine motor skills while creating beautiful works that reflect their unique perspectives.',
    tags: ['Creative Expression', 'Emotional Development'],
    alt: 'Students engaged in a colorful art project with various materials'
  },
  {
    id: 9,
    category: 'creative',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Music and Movement Therapy',
    description: 'Our music program harnesses rhythm and melody to develop communication skills, emotional expression, and social connection through accessible instruments and adaptive techniques.',
    tags: ['Music Therapy', 'Communication Skills'],
    alt: 'Students performing in a music therapy session with instruments'
  },
  {
    id: 10,
    category: 'community',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Nature Exploration Program',
    description: 'Field trips to natural settings provide sensory-rich learning experiences, environmental education, and opportunities for students to apply classroom concepts in real-world contexts.',
    tags: ['Community Integration', 'Environmental Education'],
    alt: 'Students and staff on a nature field trip in a garden setting'
  },
  {
    id: 11,
    category: 'community',
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Community Celebration',
    description: 'Our annual cultural festival brings together students, families, and community members to celebrate achievements, share talents, and build connections beyond the classroom.',
    tags: ['Community Building', 'Cultural Celebration'],
    alt: 'Students participating in a community celebration event'
  },
  {
    id: 12,
    category: 'community',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Community Garden Project',
    description: 'Our garden initiative teaches sustainable agriculture while providing opportunities for community service, environmental stewardship, and the joy of growing food from seed to harvest.',
    tags: ['Life Skills', 'Environmental Stewardship'],
    alt: 'Students working at a community garden project'
  }
];

const GalleryMain = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterItems = (category: string) => {
    if (category === 'all') return galleryItems;
    return galleryItems.filter(item => item.category === category);
  };

  const filteredItems = filterItems(activeFilter);

  return (
    <section className="py-16 px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-red-600">Moments That Matter</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Each image tells a story of potential realized, barriers overcome, and lives transformed through specialized education, skill development, and compassionate care.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap mb-8">
          {[
            { key: 'all', label: 'All Categories' },
            { key: 'academic', label: 'Academic Learning' },
            { key: 'vocational', label: 'Vocational Training' },
            { key: 'physical', label: 'Physical Wellbeing' },
            { key: 'creative', label: 'Creative Expression' },
            { key: 'community', label: 'Community Engagement' }
          ].map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 m-2 rounded-full font-medium transition-colors ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 overflow-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-full overflow-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl z-10"
              >
                ×
              </button>
              <img
                src={selectedItem.image}
                alt={selectedItem.alt}
                className="w-full rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{selectedItem.title}</h3>
                <p className="text-gray-600 mb-4">{selectedItem.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryMain;
