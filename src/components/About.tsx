import React from 'react';
import { Smile, Award, Heart } from 'lucide-react';
export const About = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Sweet Story
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <img src="https://images.unsplash.com/photo-1558138838-76294be30005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Ice cream shop" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Crafting Happiness Since 1985
            </h3>
            <p className="text-gray-600 mb-6">
              ScoopDelight began with a simple mission: to create the most
              delicious ice cream using only the freshest ingredients. What
              started as a small family shop has grown into a beloved brand, but
              our commitment to quality and joy remains unchanged.
            </p>
            <p className="text-gray-600 mb-8">
              Every scoop we serve is made with love and care, following
              traditional recipes while embracing innovative flavors. We believe
              ice cream isn't just a dessert—it's an experience that brings
              people together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-3">
                  <Smile className="text-pink-500" size={24} />
                </div>
                <h4 className="font-medium text-gray-800">100% Satisfaction</h4>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-3">
                  <Award className="text-pink-500" size={24} />
                </div>
                <h4 className="font-medium text-gray-800">Award Winning</h4>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-3">
                  <Heart className="text-pink-500" size={24} />
                </div>
                <h4 className="font-medium text-gray-800">Made with Love</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};