import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Book your appointment today and start your journey to wellness and beauty
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg text-center">
            <MapPin className="h-6 w-6 text-rose-400 mx-auto mb-4" />
            <h3 className="font-medium mb-2">Location</h3>
            <p className="text-gray-600">123 Serenity Lane<br />Beverly Hills, CA 90210</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <Phone className="h-6 w-6 text-rose-400 mx-auto mb-4" />
            <h3 className="font-medium mb-2">Phone</h3>
            <p className="text-gray-600">(555) 123-4567</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <Mail className="h-6 w-6 text-rose-400 mx-auto mb-4" />
            <h3 className="font-medium mb-2">Email</h3>
            <p className="text-gray-600">hello@gleambylynn.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <Clock className="h-6 w-6 text-rose-400 mx-auto mb-4" />
            <h3 className="font-medium mb-2">Hours</h3>
            <p className="text-gray-600">Mon-Sat: 9am - 7pm<br />Sun: 10am - 5pm</p>
          </div>
        </div>
      </div>
    </section>
  );
}