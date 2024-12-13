import React from 'react';
import { Sparkles, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Sparkles className="h-6 w-6 text-rose-400" />
            <span className="ml-2 text-xl font-serif">Gleam by Lynn</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-rose-400 transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-rose-400 transition">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-rose-400 transition">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gleam by Lynn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}