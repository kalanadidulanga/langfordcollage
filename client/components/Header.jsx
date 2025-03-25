"use client"
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const mobileMenuRef = useRef();
  const courseDropdownRef = useRef();
  const individualDropdownRef = useRef();
  const dropdownTimeoutRef = useRef();

  // Mobile menu animation
  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [isMenuOpen]);

  // Dropdown animations
  useEffect(() => {
    const animateDropdown = (ref, show) => {
      if (!ref.current) return;

      if (show) {
        gsap.fromTo(ref.current,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(ref.current,
          { height: 0, opacity: 0, duration: 0.2, ease: "power2.in" }
        );
      }
    };

    if (window.innerWidth < 1024) {
      animateDropdown(courseDropdownRef, activeDropdown === 'course');
      animateDropdown(individualDropdownRef, activeDropdown === 'individual');
    }
  }, [activeDropdown]);

  const handleMouseEnter = (dropdown) => {
    if (window.innerWidth >= 1024) {
      clearTimeout(dropdownTimeoutRef.current);
      setActiveDropdown(dropdown);
    }
  };

  const handleMouseLeave = (dropdown) => {
    if (window.innerWidth >= 1024) {
      dropdownTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 300); // 300ms delay before closing
    }
  };

  const cancelDropdownClose = () => {
    clearTimeout(dropdownTimeoutRef.current);
  };

  const toggleDropdown = (dropdown) => {
    if (window.innerWidth < 1024) {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateHome = () => {
    window.location.replace("/");
  };

  return (
    <header className="w-full p-4 md:p-10 font-sans">
      <div className="w-full h-full flex justify-between items-center px-4 md:px-24">
        {/* Logo */}
        <nav>
          <span
            className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity duration-200"
            onClick={navigateHome}
          >
            LOGO
          </span>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none hover:opacity-80 transition-opacity duration-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          ref={mobileMenuRef}
          className={`gap-3 lg:gap-16 items-center ${isMenuOpen
            ? 'flex flex-col absolute top-16 left-0 bg-black/90 rounded-2xl z-10 w-full p-4 backdrop-blur-sm'
            : 'hidden lg:flex'
            }`}
        >
          {/* Course Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('course')}
            onMouseLeave={() => handleMouseLeave('course')}
          >
            <button
              onClick={() => toggleDropdown('course')}
              className="hover:underline flex items-center outline-none w-full justify-center hover:opacity-80 transition-opacity duration-200"
            >
              Course
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'course' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              ref={courseDropdownRef}
              className={`lg:fixed lg:left-0 lg:w-full w-auto px-[9vw] ${window.innerWidth >= 1024 ? 'mt-2' : 'mt-1 ml-4'} py-2 z-50 overflow-hidden lg:grid lg:grid-cols-4 lg:gap-4`}
              style={{ display: activeDropdown === 'course' || isMenuOpen ? 'block' : 'none' }}
              onMouseEnter={cancelDropdownClose}
              onMouseLeave={() => handleMouseLeave('course')}
            >
              <div className={`${window.innerWidth >= 1024 ? 'w-full lg:px-5' : ''} bg-white rounded-md shadow-lg`}>
                <div className={`${window.innerWidth >= 1024 ? 'w-full grid grid-cols-4 gap-4' : ''}`}>
                  {/* sec 1 */}
                  <div className='flex items-start flex-col pt-3 w-full'>
                    <span className='text-black font-bold text-2xl px-4'>IGCSE and short courses</span>
                    <a href="/course/1" className="w-full block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                      Basic Course
                    </a>
                    <a href="/course/1" className="w-full block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                      Basic Course
                    </a>
                    <a href="/course/1" className="w-full block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                      Basic Course
                    </a>
                    <a href="/course/1" className="w-full block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                      Basic Course
                    </a>
                  </div>
                  {/* sec 2 */}
                  <div className='flex items-start flex-col pt-3 w-full'>
                    <span className='text-black font-bold text-2xl px-4'>Level 3 (A level) - University entry courses</span>
                    <a href="/course/1" className="w-full block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                      Basic Course
                    </a>
                    <a href="/course/1" className="w-full block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                      Basic Course
                    </a>
                    <a href="/course/1" className="w-full block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                      Basic Course
                    </a>
                    <a href="/course/1" className="w-full block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                      Basic Course
                    </a>
                  </div>
                  {/* sec 3 */}
                  <div className='flex items-start flex-col pt-3 w-full'>
                    <span className='text-black font-bold text-2xl px-4'>Level 4 & 5 - University first and second year courses</span>
                    <a href="/course/1" className="w-full block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                      Basic Course
                    </a>
                    <a href="/course/1" className="w-full block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                      Basic Course
                    </a>
                    <a href="/course/1" className="w-full block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                      Basic Course
                    </a>
                    <a href="/course/1" className="w-full block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                      Basic Course
                    </a>
                  </div>
                  {/* sec 4 */}
                  <div className='flex items-start flex-col pt-3 w-full'>
                    <span className='text-black font-bold text-2xl px-4'>Level 6 Undergraduate / Final year</span>
                    <a href="/course/1" className="w-full block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                      Basic Course
                    </a>
                    <a href="/course/1" className="w-full block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                      Basic Course
                    </a>
                    <a href="/course/1" className="w-full block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                      Basic Course
                    </a>
                    <a href="/course/1" className="w-full block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                      Basic Course
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Individuals Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('individual')}
            onMouseLeave={() => handleMouseLeave('individual')}
          >
            <button
              onClick={() => toggleDropdown('individual')}
              className="hover:underline flex outline-none items-center w-full justify-center hover:opacity-80 transition-opacity duration-200"
            >
              Individuals
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'individual' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              ref={individualDropdownRef}
              className={`lg:absolute ${window.innerWidth >= 1024 ? 'mt-2' : 'mt-1 ml-4'} py-2 w-full lg:w-56 bg-white rounded-md shadow-lg z-50 overflow-hidden`}
              style={{ display: activeDropdown === 'individual' || isMenuOpen ? 'block' : 'none' }}
              onMouseEnter={cancelDropdownClose}
              onMouseLeave={() => handleMouseLeave('individual')}
            >
              <a href="/individual/how_will_you_learn" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">How will you learn</a>
              <a href="/individual/our_hubs" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">Our Hubs</a>
              <a href="/individual/top-up_degree" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">Top up degree</a>
              <a href="/individual/blog" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">Blog</a>
              <a href="/individual/testimonial" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">Testimonial</a>
            </div>
          </div>

          <a href="/about" className="hover:underline hover:opacity-80 transition-opacity duration-200">
            About Us
          </a>

          <div className="flex gap-4">
            <button className="btn bg-[#E2231A] text-white px-4 py-2 hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6] hover:scale-105 transition-all duration-200">
              Enroll Now
            </button>
            <button className="btn bg-[#2E2E27] text-white px-4 py-2 hover:bg-[#2c2c24] hover:shadow-md shadow-[#2e2e27ee] hover:scale-105 transition-all duration-200">
              Log In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;