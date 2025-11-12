import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="py-8 bg-[#ffbd59]">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8">

        {/* Company Info */}
        <div>
          <img src="assets/images/logo2.png" alt="Logo" className="w-[50%] md:w-30 lg:w-52 py-2" />
          <p className="text-md md:text-md pr-2 mr-2 lg:text-xl leading-tight text-[#a22311]">
            We specialize in creating timeless copper, brass, and bronze products with a commitment to quality and sustainability.
          </p>
          <div className="flex justify-start space-x-4 mt-4 text-[#660062] lg:text-4xl md:text-2xl text-xl">
            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook hover:text-[#4a0047]"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-square-instagram hover:text-[#4a0047]"></i></a>
            <a href="#" aria-label="Twitter"><i className="fa-brands fa-square-x-twitter hover:text-[#4a0047]"></i></a>
            <a href="#" aria-label="Youtube"><i className="fa-brands fa-youtube hover:text-[#4a0047]"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl text-[#660062] font-roxborough font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-md md:text-md lg:text-xl text-[#a22311]">
            <li><Link to="/about" className="hover:underline text-[#a22311]">About</Link></li>
            <li><Link to="/products" className="hover:underline text-[#a22311]">Products</Link></li>
            <li><Link to="/office" className="hover:underline text-[#a22311]">International Office</Link></li>
            <li><Link to="/contact" className="hover:underline text-[#a22311]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:-ml-10">
          <h3 className="text-xl text-[#660062] font-roxborough font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-md md:text-md lg:text-xl text-[#a22311]">
            <li className="flex items-center text-[#a22311]">
              <a href="https://maps.app.goo.gl/8XuXe35aiBaBkCBX9" target="_blank" rel="noopener noreferrer">
                <span className="material-icons-outlined mr-2">
                  <i className="text-[#660062] fa-solid fa-location-dot"></i>
                </span>
                Mumbai, India
              </a>
            </li>
            <li className="flex items-center">
              <a href="tel:+919892717489">
                <span className="material-icons-outlined mr-2">
                  <i className="text-[#660062] fa-solid fa-phone"></i>
                </span>
                +91 9892717489
              </a>
            </li>
            <li className="flex items-center leading-tight">
              <a href="mailto:sales@vivianalifestyle.com">
                <span className="material-icons-outlined mr-2">
                  <i className="text-[#660062] fa-solid fa-envelope"></i>
                </span>
                sales@vivianalifestyle.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full flex flex-col">
          <h3 className="text-xl text-[#660062] font-roxborough text-left font-bold mb-4">Join our email list</h3>
          <p className="text-md md:text-md lg:text-xl leading-tight text-[#a22311] mb-2 text-left">
            Be the first to hear about our latest promotions, new products and more.
          </p>
          <form
            className="flex items-center justify-center mt-2 border border-[#660062] rounded-full overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter email"
              className="px-4 py-2 flex-grow bg-[#ffbd59] text-[#660062] focus:outline-none w-full md:w-2/3"
            />
            <button
              type="submit"
              className="bg-[#660062] rounded-l-full text-white px-6 py-2 md:px-4 font-semibold hover:bg-[#402514] transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
