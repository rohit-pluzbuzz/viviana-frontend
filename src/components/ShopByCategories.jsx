import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShopByCategories = () => {
  return (
    <section className="relative py-10 lg:py-16 px-6">
      {/* Background Elements */}
      <img
        src="assets/bg_elements/element1.png"
        className="absolute -top-50 -left-50 w-48 lg:w-96 opacity-25"
        alt="Background Element"
      />
      {/* <img src="assets/bg_elements/element6.png" className="absolute bottom-0 right-0 w-32 md:w-48 opacity-25 z-0" /> */}

      {/* Title */}
      <div className="text-center relative z-10" data-aos="fade-up" data-aos-offset="100">
        <p className="text-[#596980] text-lg uppercase font-Montserrat">Handcrafted Products</p>
        <img
          src="assets/bg_elements/line1.png"
          className="mx-auto my-2 w-32 md:w-96"
          alt="Line Divider"
        />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-roxborough text-[#5b0058] font-bold">
          Shop By Categories
        </h2>
      </div>

      {/* Categories Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 gap-y-20 lg:gap-16 justify-center mt-20 lg:mt-30 text-[#333333]">
        
        {/* Category 1: Brass */}
        <Link to="/category/brass" className="flex flex-col items-center relative group" data-aos="fade-up" data-aos-offset="150">
          <img
            src="assets/bg_elements/tamba.png"
            className="absolute -top-20 md:-top-16 lg:-top-30 md:w-[70%] w-[50%] opacity-20 z-0"
            alt="Tamba"
          />
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-xl border-4 border-[#ff9932] flex items-center justify-center overflow-hidden relative z-10 transition-transform group-hover:scale-105">
            <img src="assets/images/brass.png" alt="Brass" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-lg md:text-xl mt-4 font-semibold text-[#5b0058] group-hover:text-[#5b0058] transition-colors">
            Brass
          </h3>
          <p className="text-lg md:text-xl text-[#596980]">For Cooking</p>
        </Link>

        {/* Category 2: Copper */}
        <Link
          to="/category/copper"
          className="flex flex-col items-center relative group"
          data-aos="fade-up"
          data-aos-delay="200" data-aos-offset="150"
        >
          <img
            src="assets/bg_elements/pital.png"
            className="absolute -top-20 md:-top-16 lg:-top-30 md:w-[70%] w-[50%] opacity-20 z-0"
            alt="Pital"
          />
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-xl border-4 border-[#ff9932] flex items-center justify-center overflow-hidden relative z-10 transition-transform group-hover:scale-105">
            <img src="assets/images/copper.png" alt="Copper" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-lg md:text-xl mt-4 font-semibold text-[#5b0058] group-hover:text-[#5b0058] transition-colors">
            Copper
          </h3>
          <p className="text-lg md:text-xl text-[#596980]">For Drinking</p>
        </Link>

        {/* Category 3: Bronze */}
        <Link
          to="/category/bronze"
          className="flex flex-col items-center relative group"
          data-aos="fade-up"
          data-aos-delay="400" data-aos-offset="150"
        >
          <img
            src="assets/bg_elements/kansya.png"
            className="absolute -top-20 md:-top-16 lg:-top-30 md:w-[70%] w-[50%] opacity-20 z-0"
            alt="Kansya"
          />
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-xl border-4 border-[#ff9932] flex items-center justify-center overflow-hidden relative z-10 transition-transform group-hover:scale-105">
            <img src="assets/images/bronze.png" alt="Bronze" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-lg md:text-xl mt-4 font-semibold text-[#5b0058] group-hover:text-[#5b0058] transition-colors">
            Bronze
          </h3>
          <p className="text-lg md:text-xl text-[#596980]">For Eating</p>
        </Link>
      </div>
    </section>
  );
};

export default ShopByCategories;
