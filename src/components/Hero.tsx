import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export const Hero = () => {
  return <section id="home" className="bg-gradient-to-b from-pink-100 to-pink-50 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Delicious Ice Cream{' '}
            <span className="text-pink-500">For Every Moment</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Handcrafted with love using only the finest ingredients. Experience
            ice cream that will make your taste buds dance!
          </p>
          <div className="flex space-x-4">
            <a href="#flavors" className="px-6 py-3 bg-pink-500 text-white font-medium rounded-full hover:bg-pink-600 transition duration-300 flex items-center">
              Explore Flavors
              <ArrowRightIcon size={18} className="ml-2" />
            </a>
            <a href="#about" className="px-6 py-3 border border-pink-500 text-pink-500 font-medium rounded-full hover:bg-pink-50 transition duration-300">
              Learn More
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Delicious ice cream cone" className="rounded-lg shadow-xl max-w-full h-auto" />
        </div>
      </div>
    </section>;
};