import React from 'react';


const Videos = () => {
  return (
    <section className="relative bg-[#ffbd59] flex flex-col items-center justify-center">
      {/* Top Strip Image */}
      <div className="absolute top-0 w-full">
        <img src="assets/bg_elements/strip.png" alt="Top Strip" className="w-full" />
      </div>

      {/* Section Content */}
      <div className="text-center my-12 lg:mt-36">
        <h2 className="text-[#660062] text-3xl md:text-4xl lg:text-5xl font-roxborough font-bold">
          Bringing back <span className="text-[#660062]">#HealthyCooking</span>
        </h2>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 my-6 p-4 z-10">
        <div className="w-full max-w-sm mx-auto flex justify-center items-center">
          <video autoPlay muted loop className="w-[80%] rounded-lg shadow-lg">
            <source src="assets/videos/vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full max-w-sm mx-auto flex justify-center items-center">
          <video autoPlay muted loop className="w-[80%] rounded-lg shadow-lg">
            <source src="assets/videos/vid2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full max-w-sm mx-auto flex justify-center items-center">
          <video autoPlay muted loop className="w-[80%] rounded-lg shadow-lg">
            <source src="assets/videos/vid3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute left-0 top-30 hidden md:block opacity-20">
        <img src="assets/bg_elements/element4.png" alt="Left Decoration" className="w-40" />
      </div>
      <div className="absolute right-0 bottom-20 hidden md:block opacity-20">
        <img src="assets/bg_elements/element5.png" alt="Right Decoration" className="w-40" />
      </div>
    </section>
  );
};

export default Videos;
