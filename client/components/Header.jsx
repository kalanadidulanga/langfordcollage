"use client"
import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const callUs = () => {
    window.open("tel:+94773838366", "_blank");
  }
  const navigateHome = () => {
    window.location.replace("/");
  }

  return (
    <header className='w-full p-4 md:p-10'>
      <div className='w-full h-full flex justify-between items-center px-4 md:px-24'>
        {/* Logo */}
        <nav>
          <span className='text-2xl font-bold cursor-pointer' onClick={navigateHome}>LOGO</span>
        </nav>

        {/* Menu Icon for Small Devices */}
        <button
          className='lg:hidden focus:outline-none'
          onClick={toggleMenu}
        >
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`gap-3 lg:gap-16 items-center ${isMenuOpen
              ? 'flex flex-col absolute top-16 left-0 bg-black/90 rounded-2xl z-10 w-full p-4 md:shadow-none md:relative md:top-0 md:flex-row md:bg-transparent'
              : 'hidden lg:flex'
            }`}
        >
          <a href='course' className='hover:underline'>
            Course
          </a>
          <a href='individual' className='hover:underline'>
            Individuals
          </a>
          <a href='about' className='hover:underline'>
            About Us
          </a>
          <div className='flex gap-4'>
            <button className='btn bg-[#E2231A] text-white px-4 py-2 hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6]'>
              Enroll Now
            </button>
            <button className='btn bg-[#2E2E27] text-white px-4 py-2 hover:bg-[#2c2c24] hover:shadow-md shadow-[#2e2e27ee]'
              onClick={callUs}
            >
              Call Us
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}