import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

// Sample dynamic categories
const categories = [
  'copper',
  'brass',
  'bronze',
  'barware',
  'homeware',
  'kitchenware',
  'serveware',
  'decor',
  'tableware'
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('#sidebarMenu') && !event.target.closest('#menuToggle')) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <>
      {/* Preheader */}
      <div className="bg-[#f9a91f] text-[#5b0058] py-1 text-sm md:text-base">
        <div className="w-full text-center">
          <a href="mailto:sales@vivianalifestyle.com" className="hover:underline flex justify-center items-center lg:pr-4">
            <i className="fas fa-envelope mr-4 text-[#5b0058] w-2"></i>
            <p className="text-left">sales@vivianalifestyle.com</p>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-[#5b0058] text-white py-3 px-6 lg:px-16 flex items-center justify-between w-full z-50">
        <div className="flex items-center space-x-4">
          <button id="menuToggle" onClick={() => setSidebarOpen(true)} className="text-white focus:outline-none cursor-pointer">
            <Menu />
          </button>
          <Link to="/" className="text-lg hidden lg:block">Shop</Link>
        </div>

        <img src="assets/images/logo.png" alt="Logo" className="h-12 sm:h-10 mx-auto" />

        <div className="flex items-center">
          <img src="assets/icons/made_in_india.png" alt="India Flag" className="h-8 hidden lg:block" />
          <img src="assets/icons/indian_flag.png" alt="India Flag" className="h-6 rounded-sm sm:block md:block lg:hidden" />
        </div>
      </header>

      {/* Navigation - LG */}
      <nav className="hidden lg:flex justify-center bg-[#f9a91f] text-[#5b0058] font-semibold text-lg">
        <ul className="flex space-x-12 items-center py-1 relative">
          <li><NavLink to="/" className="hover:underline transition">Home</NavLink></li>
          <li><NavLink to="/about" className="hover:underline transition">About</NavLink></li>

          {/* Products Dropdown */}
          <li className="group relative">
            <NavLink
              to="/products"
              className="flex items-center hover:underline transition focus:outline-none"
            >
              Products
              <i className="fas fa-chevron-down  ml-1 text-xs transform transition-transform duration-300 group-hover:rotate-180"></i>
            </NavLink>

            <ul className="absolute top-full left-0 bg-[#5b0058] text-white py-2 px-4 w-48 rounded-md shadow-md hidden group-hover:block z-50">
              {categories.map((cat) => (
                <li key={cat}>
                  <NavLink
                    to={`/products/${cat}`}
                    className="block py-1 hover:underline capitalize"
                  >
                    {cat}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li><NavLink to="/international" className="hover:underline transition">International Office</NavLink></li>
          <li><NavLink to="/contact" className="hover:underline transition">Contact Us</NavLink></li>
        </ul>
      </nav>

      {/* Sidebar - MD & SM */}
      <div
        id="sidebarMenu"
        className={`fixed top-0 ${sidebarOpen ? 'left-0' : 'left-[-260px] -translate-x-full'} w-64 h-full bg-[#5b0058] text-white shadow-lg transform transition-transform duration-300 z-50 lg:hidden`}
      >
        <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 text-white text-2xl cursor-pointer">
          <i className="fas fa-times"></i>
        </button>

        <nav className="flex flex-col mt-16 w-full">
          <NavLink to="/" className="text-lg px-6 py-3 hover:text-[#ffbd59] border-b border-white/30">Home</NavLink>
          <NavLink to="/about" className="text-lg px-6 py-3 hover:text-[#ffbd59] border-b border-white/30">About</NavLink>

          <div className="w-full border-b border-white/30">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-lg px-6 py-3 w-full flex justify-between items-center hover:text-[#ffbd59]"
            >
              Products
              <i className={`fas ${dropdownOpen ? 'fa-minus' : 'fa-plus'} text-sm`}></i>
            </button>
            {dropdownOpen && (
              <div className="ml-8 my-2 space-y-2 text-lg">
                <NavLink to="/products/copper" className="block py-2 hover:text-[#ffbd59]">Copper</NavLink>
                <NavLink to="/products/bronze" className="block py-2 hover:text-[#ffbd59]">Bronze</NavLink>
                <NavLink to="/products/brass" className="block py-2 hover:text-[#ffbd59]">Brass</NavLink>
                <NavLink to="/products/barware" className="block py-2 hover:text-[#ffbd59]">Barware</NavLink>
                <NavLink to="/products/corporate-gifting" className="block py-2 hover:text-[#ffbd59]">Corporate Gifting</NavLink>
                <NavLink to="/products/buffetware" className="block py-2 hover:text-[#ffbd59]">Buffetware</NavLink>
                <NavLink to="/products/homeware" className="block py-2 hover:text-[#ffbd59]">Homeware</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/international" className="text-lg px-6 py-3 hover:text-[#ffbd59] border-b border-white/30">International Office</NavLink>
          <NavLink to="/contact" className="text-lg px-6 py-3 hover:text-[#ffbd59] border-b border-white/30">Contact Us</NavLink>

          {/* Social Icons */}
          <div className="flex space-x-4 py-3 px-6">
            <a href="#" className="hover:text-[#ffbd59]"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-[#ffbd59]"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-[#ffbd59]"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-[#ffbd59]"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </nav>
      </div>
    </>
  );
}
