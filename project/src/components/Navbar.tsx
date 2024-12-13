import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Sparkles className="h-6 w-6 text-rose-400" />
            <span className="ml-2 text-xl font-serif font-medium">Gleam by Lynn</span>
          </div>
          <div className="hidden sm:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-rose-400 transition">Home</a>
            <a href="#services" className="text-gray-700 hover:text-rose-400 transition">Services</a>
            <a href="#about" className="text-gray-700 hover:text-rose-400 transition">About</a>
            <a href="#contact" className="text-gray-700 hover:text-rose-400 transition">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}