import React from 'react';
import { Link } from 'react-router-dom';

const Homehero = () => {
  return (
    <section className="relative overflow-hidden px-6 py-2 flex flex-col md:flex-row items-center justify-between">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img
          src="assets/bg_elements/element2.png"
          className="absolute top-0 left-[49%] transform -translate-x-1/2 w-24 sm:w-32 md:w-40 lg:w-96 opacity-15"
          alt="Background Element"
        />
        <img
          src="assets/bg_elements/taj.png"
          className="absolute top-[30%] md:top-[10%] left-0 md:left-[10%] w-[100%] md:w-[50%] lg:w-[40%] opacity-10"
          alt="Taj Background"
        />
      </div>

      {/* Left Text Content */}
      <div
        className="relative z-10 w-full md:w-1/2 text-center md:text-left mx-4 lg:mx-10 px-0 lg:px-10"
        data-aos="fade-right"
      >
        <h2 className="text-[#f9a91f] font-roxborough font-bold italic text-4xl md:text-4xl lg:text-6xl">
          Bringing Back <br />
          the Golden Era of Cooking
        </h2>
        <p className="text-[#596980] text-base sm:text-lg mt-4 font-Montserrat">
          CRAFTED FOR HEALTH, BUILT FOR GENERATIONS
        </p>
        <Link
          to="/products"
          className="button-1 mt-6 inline-block px-6 py-3 bg-[#660062] text-[#f9a91f] font-semibold rounded-full hover:bg-[#402514] transition"
          data-aos="zoom-in"
        >
          Explore Products
        </Link>
      </div>

      {/* Right Image Content */}
      <div
        className="relative z-10 w-full md:w-1/2 flex justify-center mt-8 md:mt-0 py-2"
        data-aos="fade-left"
      >
        <img
          src="assets/images/1.png"
          alt="Copper Cookware"
          className="w-3/4 sm:w-2/3 md:w-3/4 lg:w-[75%]"
        />
      </div>
    </section>
  );
};

export default Homehero;
