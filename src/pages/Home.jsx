import React, { useEffect, useState } from 'react';
// import Preloader from '../components/Preloader'; 

import HomeHero from '../components/Homehero';
import ShopByCategories from '../components/ShopByCategories';
import Videos from '../components/Videos';
import Bestsellers from '../components/Bestsellers';
import Tradition from '../components/Tradition';
import CookServeShare from '../components/CookServeShare';
import Testimonials from '../components/Testimonials';
import HomeContact from '../components/HomeContact';

const Home = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //     setTimeout(() => AOS.refresh(), 100); // Delay refresh slightly for layout to settle
  //   }, 1200);
  
  //   return () => clearTimeout(timer);
  // }, []);
  

  // if (loading) {
  //   return <Preloader />;
  // }

  return (
    <div className="bg-[#f5f9ec] overflow-x-hidden">
      
      <HomeHero />
      <ShopByCategories />
      <Videos />
      <Bestsellers />
      <Tradition />
      <Testimonials />
      <CookServeShare />
      <HomeContact />

    </div>
  );
};

export default Home;
