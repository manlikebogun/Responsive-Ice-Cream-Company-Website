import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-pink-500">ScoopDelight</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-pink-500 font-medium">
            Home
          </a>
          <a href="#about" className="text-gray-800 hover:text-pink-500 font-medium">
            About
          </a>
          <a href="#flavors" className="text-gray-800 hover:text-pink-500 font-medium">
            Flavors
          </a>
          <a href="#testimonials" className="text-gray-800 hover:text-pink-500 font-medium">
            Testimonials
          </a>
          <a href="#contact" className="text-gray-800 hover:text-pink-500 font-medium">
            Contact
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white px-4 py-2">
          <div className="flex flex-col space-y-3 pb-3">
            <a href="#home" className="text-gray-800 hover:text-pink-500 font-medium" onClick={toggleMenu}>
              Home
            </a>
            <a href="#about" className="text-gray-800 hover:text-pink-500 font-medium" onClick={toggleMenu}>
              About
            </a>
            <a href="#flavors" className="text-gray-800 hover:text-pink-500 font-medium" onClick={toggleMenu}>
              Flavors
            </a>
            <a href="#testimonials" className="text-gray-800 hover:text-pink-500 font-medium" onClick={toggleMenu}>
              Testimonials
            </a>
            <a href="#contact" className="text-gray-800 hover:text-pink-500 font-medium" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </div>}
    </header>;
};