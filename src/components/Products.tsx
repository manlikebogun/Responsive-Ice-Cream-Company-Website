import React from 'react';
const flavors = [{
  id: 1,
  name: 'Classic Vanilla',
  description: "Rich and creamy vanilla bean ice cream that's anything but basic.",
  image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
  color: 'bg-cream'
}, {
  id: 2,
  name: 'Strawberry Dream',
  description: 'Sweet strawberry ice cream with real fruit pieces for a refreshing taste.',
  image: 'https://images.unsplash.com/photo-1587563974073-6dabdbbadac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
  color: 'bg-strawberry'
}, {
  id: 3,
  name: 'Chocolate Fudge',
  description: 'Decadent chocolate ice cream with swirls of fudge for chocolate lovers.',
  image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
  color: 'bg-amber-100'
}, {
  id: 4,
  name: 'Mint Chip',
  description: 'Refreshing mint ice cream loaded with chocolate chips for a cool treat.',
  image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1087&q=80',
  color: 'bg-mint'
}, {
  id: 5,
  name: 'Blueberry Cheesecake',
  description: 'Creamy cheesecake ice cream with blueberry swirls and graham cracker pieces.',
  image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
  color: 'bg-blueberry'
}, {
  id: 6,
  name: 'Caramel Swirl',
  description: 'Smooth vanilla ice cream with rich caramel swirls and a hint of sea salt.',
  image: 'https://images.unsplash.com/photo-1514849302-984523450cf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1060&q=80',
  color: 'bg-amber-50'
}];
export const Products = () => {
  return <section id="flavors" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Delicious Flavors
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore our wide variety of handcrafted ice cream flavors, made with
            the freshest ingredients and lots of love.
          </p>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flavors.map(flavor => <div key={flavor.id} className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${flavor.color}`}>
              <div className="h-56 overflow-hidden">
                <img src={flavor.image} alt={flavor.name} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {flavor.name}
                </h3>
                <p className="text-gray-600">{flavor.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};