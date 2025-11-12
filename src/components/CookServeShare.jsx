import React from "react";
import { Link } from "react-router-dom";

const CookServeShare = () => {
  return (
    <section className="relative py-12 lg:py-20">
      {/* Background Text */}
      <img
        src="assets/bg_elements/share.png"
        className="absolute left-[0%] top-10 w-[60%] opacity-10 z-0"
        alt="Share Background"
      />

      {/* Background Elements */}
      <div className="absolute left-0 bottom-20 hidden md:block opacity-20">
        <img
          src="assets/bg_elements/element4.png"
          alt="Left Decoration"
          className="w-40"
        />
      </div>
      <div className="absolute right-0 top-30 hidden md:block opacity-20">
        <img
          src="assets/bg_elements/element5.png"
          alt="Right Decoration"
          className="w-40"
        />
      </div>

      {/* Content Container */}
      <div className="mx-auto max-w-9xl px-6 lg:px-30 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative">
        {/* Left: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left p-6 lg:p-8" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-roxborough text-[#5b0058] font-bold italic leading-snug">
            Cook. Serve. Celebrate <br />Tradition
          </h2>
          <div className="flex justify-center lg:justify-start items-center pt-4">
            <img
              src="assets/bg_elements/line2.png"
              className="w-32 md:w-96"
              alt="Line Decoration"
            />
          </div>
          <p className="text-[#596980] text-lg md:text-xl mt-4">
            When every human being is unique, why should your gift be like someone
            else’s? Explore the wide range of premium curations by P-TAL and
            experience the joy of gifting customized handcrafted assortments!
          </p>
          <Link to="/products">
            <button className="mt-6 button-1 bg-[#660062] text-[#f9a91f] px-6 py-3 font-semibold transition duration-300 shadow-xl">
              Explore Products
            </button>
          </Link>
        </div>

        {/* Right: Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-up">
          <img
            src="assets/images/33.png"
            alt="Craftsman with copper pots"
            className="w-[60%] md:w-[70%] lg:w-[90%]"
          />
        </div>
      </div>
    </section>
  );
};

export default CookServeShare;
