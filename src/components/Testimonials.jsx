import React from 'react';
import { assets, testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 px-6 lg:px-32 w-full overflow-hidden' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer Testimonials</h1>
      <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>
        Real Stories from Those Who Found Home with Us
      </p>

      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className='max-w-[340px] rounded-xl px-8 py-10 text-center bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
          >
            <img
              className='w-20 h-20 rounded-full mx-auto mb-4 object-cover'
              src={testimonial.image}
              alt={testimonial.alt || testimonial.name}
            />
            <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
            <p className='text-gray-500 mb-2 text-sm italic'>{testimonial.title}</p>

            {/* Star Ratings */}
            <div className='flex justify-center gap-1 text-red-500 mb-4'>
              {Array.from({ length: testimonial.rating }, (_, starIdx) => (
                <img
                  key={starIdx}
                  src={assets.star_icon}
                  alt="Star"
                  className='w-5 h-5'
                />
              ))}
            </div>

            <p className='text-gray-600 text-sm leading-relaxed'>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
