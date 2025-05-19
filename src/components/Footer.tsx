import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-pink-400 mb-4">
              ScoopDelight
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Serving happiness one scoop at a time since 1985. Our mission is
              to create the most delicious ice cream using only the finest
              ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-pink-400 transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-pink-400 transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#flavors" className="text-gray-400 hover:text-pink-400 transition duration-300">
                  Our Flavors
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-pink-400 transition duration-300">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-pink-400 transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers and flavor updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Your email address" className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-pink-500" />
              <button type="submit" className="px-4 py-2 bg-pink-500 text-white font-medium rounded hover:bg-pink-600 transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ScoopDelight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};