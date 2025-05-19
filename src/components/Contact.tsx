import React, { lazy } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
export const Contact = () => {
  return <section id="contact" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Visit Our Shop
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Stop by for a scoop or contact us for special orders and events.
            We'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow-xl">
          <div className="lg:w-1/2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d202aa69f54!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" width="100%" height="100%" style={{
            border: 0,
            minHeight: '400px'
          }} allowFullScreen={false} loading="lazy" title="ScoopDelight Location"></iframe>
          </div>
          <div className="lg:w-1/2 p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <MapPin className="text-pink-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    123 Ice Cream Lane
                    <br />
                    Sweet Town, NY 10001
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Phone className="text-pink-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Mail className="text-pink-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">hello@scoopdelight.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Clock className="text-pink-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 11am - 9pm
                    <br />
                    Saturday - Sunday: 10am - 10pm
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a href="#" className="px-6 py-3 bg-pink-500 text-white font-medium rounded-full hover:bg-pink-600 transition duration-300 inline-block">
                Order Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};