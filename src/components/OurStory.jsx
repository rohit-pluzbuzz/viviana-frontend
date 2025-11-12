import React from 'react';

const OurStory = () => {
  return (
    <section className="relative pb-20 pt-10 px-6 md:px-16 text-center overflow-hidden">
      {/* Top Background Decorations */}
      <img src="assets/bg_elements/mandala2.png" alt="decor" className="absolute top-0 left-10 w-28 md:w-40 lg:w-[20%] z-0 opacity-10" />
      <img src="assets/bg_elements/mandala3.png" alt="decor" className="absolute top-0 right-10 w-28 md:w-40 lg:w-[20%] z-0 opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto"  data-aos="fade-up">
        <h4 className="text-[#596980] text-base sm:text-lg mt-4 font-Montserrat">
          OUR STORY & VALUES
        </h4>
        <div className="flex justify-center my-2">
          <img src="assets/bg_elements/line1.png" alt="underline" className="w-[40%]" />
        </div>
        <h2 className="text-[#5b0058] text-3xl md:text-4xl lg:text-5xl font-roxborough font-bold leading-snug mb-6">
          A Luxury Lifestyle
        </h2>
        <p className="text-[#596980] text-lg md:text-xl mt-4 mb-8 px-4 md:px-0">
          Viviana Lifestyle was established with great passion for supporting artisans and
          local unique skills around the world. We meticulously design and handpick timeless
          pieces and combine it with luxury, craftsmanship and natural material.
          <br className="hidden md:block" />
          We celebrate differences and stories behind every product, whilst we ensure quality
          is at its highest and we bring luxury into your homes.
        </p>
      </div>

      {/* Bottom Border Decoration */}
      <img
        src="assets/bg_elements/mandala1.png"
        alt="bottom mandala border"
        className="absolute bottom-2 left-0 w-full object-contain opacity-10"
      />
    </section>
  );
};

export default OurStory;
