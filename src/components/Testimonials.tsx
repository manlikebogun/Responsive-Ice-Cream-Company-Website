import React from 'react';
import { Star } from 'lucide-react';
const testimonials = [{
  id: 1,
  name: 'Sarah Johnson',
  quote: "ScoopDelight's strawberry ice cream is the best I've ever had! I can taste the real strawberries in every bite.",
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  rating: 5
}, {
  id: 2,
  name: 'Michael Chen',
  quote: "Their mint chocolate chip is absolutely refreshing. It's become my go-to treat after a long day at work!",
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  rating: 5
}, {
  id: 3,
  name: 'Emily Rodriguez',
  quote: 'I love that they use natural ingredients. You can really taste the difference compared to other ice cream shops.',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  rating: 4
}];
export const Testimonials = () => {
  return <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-pink-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                    {[...Array(5 - testimonial.rating)].map((_, i) => <Star key={i + testimonial.rating} size={16} className="text-gray-300" />)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>)}
        </div>
      </div>
    </section>;
};