import React from "react";

const Tradition = () => {
  return (
    <section className="relative py-10 lg:py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-0 top-30 hidden md:block opacity-10">
        <img src="assets/bg_elements/element7.png" alt="Left Decoration" className="w-40" />
      </div>
      <div className="absolute right-0 bottom-20 hidden md:block opacity-10">
        <img src="assets/bg_elements/element6.png" alt="Right Decoration" className="w-40" />
      </div>

      {/* Background Text */}
      <img
        src="assets/bg_elements/tradition.png"
        className="absolute lg:right-[0%] left-[15%]  top-10 w-[60%] opacity-10 z-0"
        alt="Tradition Text"
      />

      <div className="mx-auto lg:px-30 px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 relative">
        {/* Image Section */}
        <div
          className="lg:w-1/2 relative flex items-center justify-center"
          data-aos="fade-up"
        >
          <img
            src="assets/images/30.png"
            alt="Craftsman with copper pots"
            className="w-[60%] mg:w-[50%] lg:w-[80%]"
          />
        </div>

        {/* Text Content */}
        <div
          className="lg:w-1/2 text-center lg:text-left relative px-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-roxborough text-[#5b0058] font-bold italic">
            Tradition <br /> Meets Excellence
          </h2>
          <p className="text-[#596980] text-xl mt-4">
            It's not just about the food you eat; how you cook and consume your
            food matters!
          </p>

          {/* Features Section */}
          <div className="mt-6 space-y-6 text-xl text-left">
            <div
              className="flex items-center gap-4 hover:scale-105 transition-transform"
              data-aos="fade-right"
            >
              <img
                src="assets/icons/19.png"
                alt="Authentic Materials"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-roxborough text-[#5b0058] font-semibold">
                  Authentic Materials
                </h3>
                <p className="text-[#596980] text-lg">
                  100% Pure Copper, Brass & Bronze
                </p>
              </div>
            </div>
            <div
              className="flex items-center gap-4 hover:scale-105 transition-transform"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <img
                src="assets/icons/20.png"
                alt="Health Benefits"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-roxborough text-[#5b0058] font-semibold">
                  Health Benefits
                </h3>
                <p className="text-[#596980] text-lg">
                  Inspired by Ancient Ayurveda
                </p>
              </div>
            </div>
            <div
              className="flex items-center gap-4 hover:scale-105 transition-transform"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <img
                src="assets/icons/21.png"
                alt="Timeless Craftsmanship"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-roxborough text-[#5b0058] font-semibold">
                  Timeless Craftsmanship
                </h3>
                <p className="text-[#596980] text-lg">Built to Last Generations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tradition;