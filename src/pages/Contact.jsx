import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
  return (
    <div className="bg-[#f5f9ec] overflow-x-hidden">
     
      {/* Hero Section */}
      <section className="relative bg-[#ffbd59] text-center p-12">
        <div className="z-10 relative pb-0">
          <h1 className="text-4xl font-roxborough md:text-5xl text-[#4a0343]">Contact Us</h1>
          <div className="mt-4 flex justify-center">
            <img
              src="assets/bg_elements/line3.png"
              alt="underline graphic"
              className="h-10"
            />
          </div>
        </div>

        {/* Curved SVG Bottom */}
        <div className="absolute -bottom-10 left-0 w-full z-10 overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[40px]"
          >
            <path
  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
  class="shape-fill"
  fill="#ffbd59"
  transform="scale(1, -1) translate(0, -120)"
/>
          </svg>
        </div>
      </section>
      <section
      className="overflow-x-hidden relative py-12 lg:py-20 px-6 lg:px-16 bg-cover bg-center"
      style={{ backgroundImage: `url(assets/images/34.png)` }}
    >
      

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-6 lg:p-10">
        {/* Left: Text Content */}
        <div className="text-left" data-aos="fade-right">
          <h2 className="text-4xl lg:text-6xl font-roxborough text-[#5b0058] font-bold py-2">
            Get in Touch
          </h2>
          <p className="text-lg text-[#596980] font-semibold mt-2 font-Montserrat">
            Let’s Connect and Preserve Tradition Together
          </p>
          <img src="assets/bg_elements/line2.png" alt="Line" className="w-56 lg:w-96 my-4 -ml-6" />
          <p className="text-[#5b0058] text-xl md:text-2xl lg:font-3xl font-bold font-roxborough">
            Reach out for inquiries or to learn more about our products and their benefits.
          </p>
        </div>

        {/* Right: Contact Form */}
        <div
          className="bg-white p-6 md:p-8 lg:p-10 w-full max-w-lg rounded-2xl shadow-lg font-Montserrat"
          data-aos="fade-left"
        >
          <form action="#" method="POST" className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-[#5b0058] rounded-full px-5 py-3 text-gray-600 focus:outline-none focus:border-[#5b0058] transition duration-300 hover:shadow-md"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full border border-[#5b0058] rounded-full px-5 py-3 text-gray-600 focus:outline-none focus:border-[#5b0058] transition duration-300 hover:shadow-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-[#5b0058] rounded-full px-5 py-3 text-gray-600 focus:outline-none focus:border-[#5b0058] transition duration-300 hover:shadow-md"
            />
            <textarea
              placeholder="Message"
              className="w-full border border-[#5b0058] rounded-xl px-5 py-3 text-gray-600 focus:outline-none focus:border-[#5b0058] transition duration-300 hover:shadow-md"
            ></textarea>
            <button
              type="submit"
              className="font-Montserrat w-full bg-[#5b0058] text-white font-bold py-3 rounded-full hover:bg-[#4a0047] transition duration-300 shadow-md hover:shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
