'use client';

import React from 'react';
import Image from 'next/image';
import b1 from '../../public/images/B-1.jpg';
import b3 from '../../public/images/B-3.jpg';
import b22 from '../../public/images/B-22.jpg';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // optional: default CSS
import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";
const slider = [
  {
    id: 1,
    image: b1,
    title: 'XYZ',
    subtitle: 'ABC',
  },
  {
    id: 2,
    image: b3,
    title: 'XYZ',
    subtitle: 'ABC',
  },
  {
    id: 3,
    image: b22,
    title: 'XYZ',
    subtitle: 'ABC',
  },
];

const Slider = () => {
  return (
    <div className="w-full mx-auto">
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          autoplay: true,
          pagination: true,
          arrows:false
        }}
      >
        {slider.map((item) => (
          <SplideSlide key={item.id}>
            <div className="relative w-full h-[90vh]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 mx-auto  text-white rounded">
                <h2 className="text-5xl text-center tracking-widest font-bold">{item.title}</h2>
                <p className="text-sm text-center">{item.subtitle}</p>
              </div>

              <div className='absolute top-[50%] right-[5%] transform -translate-y-1/2 '>
              <ul className='flex flex-col space-y-11 text-2xl md:text-3xl'>
                <li><CiFacebook /></li>
                <li><CiTwitter /></li>
                <li><CiInstagram /></li>
              </ul>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slider;
