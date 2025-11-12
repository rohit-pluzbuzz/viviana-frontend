import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AboutOne from '../components/AboutOne';
import AboutTwo from '../components/AboutTwo';
import Tradition2 from '../components/Tradition2';
import OurStory from '../components/OurStory';

const About = () => {
  return (
    <div className="bg-[#f5f9ec] overflow-x-hidden">
    
      {/* Hero Section */}
      <section className="relative bg-[#ffbd59] text-center p-12">
        <div className="z-10 relative pb-20">
          <h1 className="text-4xl font-roxborough md:text-5xl text-[#4a0343]">About Us</h1>
          <div className="mt-4 flex justify-center">
            <img
              src="assets/bg_elements/line3.png"
              alt="underline graphic"
              className="h-10"
            />
          </div>
        </div>

        {/* Curved SVG Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[40px]"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill" fill="#f5f9ec"
            />
          </svg>
        </div>
      </section>
      <div className="relative">
      <AboutOne />
      <img
        src={'assets/bg_elements/element3.png'}
        alt="Top Left Decoration"
        className="absolute top-[40%] -left-40 w-28 md:w-40 lg:w-[20%] opacity-10 z-00"
      />
      <AboutTwo />
    </div>

      <Tradition2 />
      <OurStory />
    
    </div>
  );
};

export default About;
