import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-pink-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>;
}