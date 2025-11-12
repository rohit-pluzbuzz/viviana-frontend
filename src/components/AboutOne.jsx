import React from 'react';


const AboutOne = () => {
  return (
    <section className="relative overflow-x-hidden py-16 px-6 md:px-20 lg:px-32 ">
      {/* Background Decorative Element Top Left */}
      {/* <img
        src={element1}
        alt="decorative background"
        className="absolute bottom-0 left-[20%] object-contain z-0 opacity-8 pointer-events-none"
      /> */}
      
    {/* Background Text */}
    <img
        src="assets/bg_elements/share.png"
        className="absolute left-[0%] top-10 w-[60%] opacity-10 z-0"
        alt="Share Background"
      />
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
        {/* Content Section */}
        <div className="w-full md:w-[70%] lg:w-1/2" data-aos="fade-right"
          data-aos-delay="200">
          <h4 className="text-[#ff9932] text-xl font-semibold mb-2 uppercase">Timeless Heritage</h4>
          <h2 className="text-[#5b0058] text-3xl md:text-4xl lg:text-5xl font-roxborough font-bold leading-snug">
          The Art of Living
          </h2>
          <div className="relative flex justify-start items-center pt-4">
            <img
              src="assets/bg_elements/line2.png"
              className="w-32 md:w-96"
              alt="Line Decoration"
            />
          </div>
          <p className="text-[#596980] text-lg md:text-xl mt-4 mb-8">
            Viviana Lifestyle was established with great passion for supporting artisans and local
            unique skills around the world. We meticulously design and handpick timeless pieces and
            combine it with luxury, craftsmanship and natural material.
          </p>
          <p className="text-[#596980] text-lg md:text-xl mt-4 mb-8">
            Viviana Lifestyle was established with great passion for supporting artisans and local
            unique skills around the world. We meticulously design and handpick timeless pieces and
            combine it with luxury, craftsmanship and natural material.
          </p>
          <button className="px-6 button-1">Explore Products</button>
        </div>

        
      </div>
        {/* Image Section */}
        <div className="w-[60%] bottom-0 right-0 absolute">
          <img
            src="assets/bg_elements/about1bg.png"
            alt="copper utensils"
            className="w-full"
          />
        </div>
      
    </section>
  );
};

export default AboutOne;
