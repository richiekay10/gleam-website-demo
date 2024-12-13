import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80"
          alt="Spa setting with flowers and essential oils"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-serif text-white mb-6">
            Discover Your Natural Radiance
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Luxurious self-care treatments and beauty services tailored to enhance your natural beauty
          </p>
          <a
            href="#services"
            className="inline-block bg-rose-400 text-white px-8 py-3 rounded-full hover:bg-rose-500 transition"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}