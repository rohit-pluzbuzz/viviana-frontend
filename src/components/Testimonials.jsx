import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MoveLeft, MoveRight } from 'lucide-react';

const Testimonials = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
  const slides = [
    {
      img: "assets/images/31.png",
      name: 'Anjali Mehta',
      text: '“Viviana’s brass utensils are a perfect blend of tradition and modern design. They’ve added an authentic touch to my kitchen. Highly recommended!”'
    },
    {
      img: "assets/images/31.png",
      name: 'Prajakta Kohli',
      text: '“The craftsmanship and attention to detail in Viviana’s utensils are unmatched. I’ve gifted their copper tumblers to friends, and they loved them!”'
    },
    {
      img: "assets/images/31.png",
      name: 'Rahul Verma',
      text: '“Absolutely love the elegant finish and durability of Viviana’s cookware. It has made my cooking experience even better.”'
    },
    {
      img: "assets/images/31.png",
      name: 'Simran Kapoor',
      text: '“Viviana’s products bring authenticity and warmth to my kitchen. A must-have for any cooking enthusiast.”'
    }
  ];

  const handleNext = () => {
    const maxIndex = isLargeScreen ? Math.ceil(slides.length / 2) - 1 : slides.length - 1;
    setCurrentIndex(currentIndex < maxIndex ? currentIndex + 1 : 0);
  };

  const handlePrev = () => {
    const maxIndex = isLargeScreen ? Math.ceil(slides.length / 2) - 1 : slides.length - 1;
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : maxIndex);
  };

  return (
    <section className="bg-[#820f38] text-white py-16 px-4 relative overflow-hidden">
      <img src="assets/bg_elements/testimonials.png" alt="Testimonials Background" className="absolute lg:top-0 top-20 left-0 w-full opacity-10 z-0" />
      <div className="text-center mb-10 relative">
        <h2 className="py-10 text-3xl md:text-4xl lg:text-5xl font-roxborough text-[#ffbd59]" data-aos="fade-up">
          Chefs Love our Products
        </h2>
        <img src="assets/bg_elements/line2.png" alt="Decorative Line" className="mx-auto w-96 mt-2" data-aos="fade-up" data-aos-delay="200" />
      </div>

      <div className="relative flex items-center justify-center pb-20">
        <div className="overflow-hidden w-full max-w-7xl px-4">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (isLargeScreen ? 50 : 100)}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full lg:w-1/2 flex items-center space-x-6 p-6 shrink-0" data-aos="fade-up">
                <img src={slide.img} alt={slide.name} className="w-24 md:w-32 lg:w-40 h-auto rounded-md shadow-lg" />
                <div>
                  <p className="italic text-sm md:text-lg lg:text-xl">{slide.text}</p>
                  <p className="mt-4 font-bold text-lg md:text-2xl text-[#ffbd59]">{slide.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={handlePrev} className="absolute left-2 z-10 text-white text-3xl hover:text-[#ffbd59] transition">
        <MoveLeft />
        </button>
        <button onClick={handleNext} className="absolute right-2 z-10 text-white text-3xl hover:text-[#ffbd59] transition">
        <MoveRight />
        </button>
      </div>

      <div className="absolute md:-bottom-40 lg:-bottom-30 -bottom-2 left-0 w-full animate-slideUp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#f5f9ec"
            fillOpacity="1"
            d="M0,160 C80,140 160,180 240,170 C320,160 400,120 480,140 C560,160 640,200 720,190 C800,180 880,140 960,150 C1040,160 1120,200 1200,190 C1280,180 1360,140 1440,160 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
