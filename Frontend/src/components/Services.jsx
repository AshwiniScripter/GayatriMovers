import React from 'react';
import { Home, Package, Truck, Users, ShieldCheck, Clock, DollarSign, Phone } from 'lucide-react';

const services = [
  {
    icon: <Package className="w-8 h-8 text-blue-600 flex justify-center" />,
    title: 'Professional Packing',
    description: 'Expert packing services using high-quality materials to ensure your belongings are protected.'
  },
  {
    icon: <Truck className="w-8 h-8 text-blue-600" />,
    title: 'Local & Long Distance',
    description: 'Reliable moving services for both local and long-distance relocations.'
  },
  {
    icon: <Home className="w-8 h-8 text-blue-600" />,
    title: 'Storage Solutions',
    description: 'Secure storage facilities for short-term and long-term storage needs.'
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: 'Dedicated Team',
    description: 'Professional and trained staff committed to making your move smooth.'
  }
];

const whyChooseUs = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: 'Safety First',
    description: 'We prioritize the safety of your belongings with secure packaging and handling.'
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: 'On-Time Delivery',
    description: 'Punctual services ensuring timely pickups and deliveries.'
  },
  {
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    title: 'Affordable Pricing',
    description: 'Competitive rates without compromising service quality.'
  },
  {
    icon: <Phone className="w-8 h-8 text-blue-600" />,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for seamless assistance.'
  }
];

export default function Services() {
  return (
    <div id="services" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="text-lg text-gray-600">Comprehensive moving solutions tailored to your needs</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
              <div className="mb-4">{service.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Why Choose Us?</h2>
          <p className="text-lg text-gray-600">Here’s why our customers trust us with their moves.</p>
        </div>

        <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
              <div className="mb-4">{item.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
