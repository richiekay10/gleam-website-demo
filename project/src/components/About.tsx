import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80"
              alt="Spa professional"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">About Lynn</h2>
            <p className="text-gray-600 mb-6">
              With over a decade of experience in the beauty and wellness industry, Lynn has dedicated her career to helping clients discover their natural radiance through personalized self-care treatments.
            </p>
            <p className="text-gray-600 mb-6">
              At Gleam by Lynn, we believe that true beauty comes from within, and our treatments are designed to enhance your natural features while promoting overall wellness and relaxation.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-rose-50 p-4 rounded-lg">
                <p className="text-3xl font-serif text-rose-400 mb-2">10+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg">
                <p className="text-3xl font-serif text-rose-400 mb-2">1000+</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}