import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#5b0058] flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <img src="assets/images/logo.png" alt="Logo" className="w-auto h-20" />
        <div className="mt-4 w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
};

export default Preloader;
