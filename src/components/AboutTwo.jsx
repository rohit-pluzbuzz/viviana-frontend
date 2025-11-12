import React from 'react';


const AboutTwo = () => {
  return (
    <section className="relative py-20 px-6 md:px-16 text-center overflow-x-hidden">
      {/* Top Background Decorations */}
      {/* <img src={topLeft} alt="decor" className="absolute -top-40 -left-40 w-28 md:w-40 lg:w-[20%] opacity-10 z-0"/> */}
      <img src="assets/bg_elements/element3.png" alt="decor" className="absolute -bottom-0 -right-40 w-28 md:w-40 lg:w-[20%] opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto"  data-aos="fade-up">
        <h4 className="text-[#596980] text-base sm:text-lg mt-4 font-Montserrat">
        The Art of Cooking, Rooted in Tradition
        </h4>
        <div className="flex justify-center my-2">
          <img src="assets/bg_elements/line1.png" alt="underline" className="w-[40%]" />
        </div>
        <h2 className="text-[#5b0058] text-3xl md:text-4xl lg:text-5xl font-roxborough font-bold leading-snug mb-6">
        A Kitchen is Not Just About Taste, It’s About Tradition Too.
        </h2>
        <p className="text-[#596980] text-lg md:text-xl mt-4 mb-8 px-4 md:px-0">
        For generations, our ancestors didn’t just use copper, brass, and bronze cookware—they made it a part of their health and heritage. With Viviana, we bring back the same purity and authenticity.
        
          <br className="hidden md:block" />
          These aren’t just utensils; they are stories of craftsmanship, wisdom, and wellness. Behind every shine is the skill of artisans, behind every design is the knowledge of centuries.
        </p>
      </div>

    </section>
  );
};

export default AboutTwo;
