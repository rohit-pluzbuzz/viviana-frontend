import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';


import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Footer from './components/Footer';
import International from './pages/International';

function App() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
    duration: 1000,
    once: false,
    mirror: true,
    anchorPlacement: 'top-bottom'
    });
  }, []);
  return (
    <div>
      <Navbar />

      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:category?" element={<Product />} />
          <Route path="/international" element={<International/>} />

        </Routes>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
