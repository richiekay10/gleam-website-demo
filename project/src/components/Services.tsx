import React from 'react';
import { Flower, Sparkles, Heart, Star } from 'lucide-react';

const services = [
  {
    icon: <Flower className="h-8 w-8 text-rose-400" />,
    title: "Facial Treatments",
    description: "Customized facial treatments to rejuvenate and nourish your skin",
    price: "from $85"
  },
  {
    icon: <Sparkles className="h-8 w-8 text-rose-400" />,
    title: "Body Treatments",
    description: "Luxurious body scrubs and wraps for total relaxation",
    price: "from $95"
  },
  {
    icon: <Heart className="h-8 w-8 text-rose-400" />,
    title: "Massage Therapy",
    description: "Therapeutic massage techniques for stress relief and wellness",
    price: "from $75"
  },
  {
    icon: <Star className="h-8 w-8 text-rose-400" />,
    title: "Beauty Services",
    description: "Professional makeup and skincare consultations",
    price: "from $65"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Indulge in our carefully curated selection of treatments designed to enhance your natural beauty and promote overall wellness
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-rose-400 font-medium">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}