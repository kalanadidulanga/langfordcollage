"use client"
import React, {useState, useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import axios from 'axios';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const mobileMenuRef = useRef();
    const courseDropdownRef = useRef();
    const individualDropdownRef = useRef();
    const aboutDropdownRef = useRef();
    const progressionDropdownRef = useRef();
    const dropdownTimeoutRef = useRef();
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const [level1, setLevel1] = useState([]);
    const [level2, setLevel2] = useState([]);
    const [level3, setLevel3] = useState([]);
    const [level4, setLevel4] = useState([]);
    const [level5, setLevel5] = useState([]);

    // Mobile menu animation with left to right transition
    useEffect(() => {
        if (mobileMenuRef.current) {
            if (isMenuOpen) {
                gsap.fromTo(mobileMenuRef.current, {x: '100%', opacity: 0}, {
                    x: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            } else {
                gsap.to(mobileMenuRef.current, {x: '100%', opacity: 0, duration: 0.3, ease: "power2.in"});
            }
        }
    }, [isMenuOpen]);

    // Dropdown animations
    useEffect(() => {
        const animateDropdown = (ref, show) => {
            if (!ref.current) return;

            if (show) {
                gsap.fromTo(ref.current, {height: 0, opacity: 0}, {
                    height: 'auto',
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            } else {
                gsap.to(ref.current, {height: 0, opacity: 0, duration: 0.2, ease: "power2.in"});
            }
        };

        if (window.innerWidth < 1024) {
            animateDropdown(courseDropdownRef, activeDropdown === 'course');
            animateDropdown(individualDropdownRef, activeDropdown === 'individual');
            animateDropdown(progressionDropdownRef, activeDropdown === 'progression');
            animateDropdown(aboutDropdownRef, activeDropdown === 'about');
        }
    }, [activeDropdown]);

    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/getAllCources`);

            if (res?.data?.status) {
                setLevel1(res?.data?.data?.filter((item) => item?.course_level === "IGCSE and short courses"));

                setLevel2(res?.data?.data?.filter((item) => item?.course_level === "Level 3 (A level) - University entry courses"));

                setLevel3(res?.data?.data?.filter((item) => item?.course_level === "Level 4 & 5 - University first and second year courses"));

                setLevel4(res?.data?.data?.filter((item) => item?.course_level === "Level 6 Undergraduate / Final year"));

                setLevel5(res?.data?.data?.filter((item) => item?.course_level === "Level 7 Diploma, Masters / MBA Advance Entry"));

            } else {

            }
        } catch (error) {

        }
    }

    const handleMouseEnter = (dropdown) => {
        if (window.innerWidth >= 1024) {
            clearTimeout(dropdownTimeoutRef.current);
            setActiveDropdown(dropdown);
        }
    };

    const handleMouseLeave = (dropdown) => {
        if (window.innerWidth >= 1024) {
            setActiveDropdown(null);
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
        setActiveDropdown(null);
    };

    const navigateHome = () => {
        window.location.replace("/");
    };

    return (<header className={`w-full p-4 md:p-8 font-sans flex flex-col relative text-[18px] capitalize`}>
        <div className="w-full h-full flex justify-between items-start px-2 md:px-10">
            {/* {(activeDropdown === 'course' || isMenuOpen) ? (
          <nav className='rounded-full w-16 h-16 md:w-28 md:h-28 bg-contain bg-center flex justify-center items-center'>
            <img
              src="/Logo.svg"
              alt="logo"
              className='w-full h-full p-1 object-contain cursor-pointer object-center'
              onClick={navigateHome}
            />
          </nav>
        ) : ( */}
            <nav
                className='rounded-full w-20 h-20 md:w-28 md:h-28 bg-contain bg-center flex flex-col justify-center items-center'>
                <img
                    src="/Icon/LOGO.svg"
                    alt="logo"
                    className='w-full h-full p-1 object-contain cursor-pointer object-center'
                    onClick={navigateHome}
                />
            </nav>
            {/* )} */}

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden focus:outline-none hover:opacity-80 transition-opacity duration-200"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? (<div className="bg-red-600 p-2 text-white">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>) : (<svg
                    className="w-10 h-10"
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
                </svg>)}
            </button>

            {/* Desktop Navigation Links */}
            <div className={`hidden lg:flex mt-3 gap-10 items-center`}>
                {/* Course Dropdown */}
                <div
                    className="relative"
                    onClick={() => {
                        if (activeDropdown == "course") {
                            handleMouseLeave('course')
                        } else {
                            handleMouseEnter('course')
                        }
                    }}
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div
                        className={`lg:absolute left-1/2 -translate-x-1/3 ${window.innerWidth >= 1024 ? 'mt-2' : 'mt-1 ml-4'} py-2 w-full lg:w-[1000px] bg-white rounded-md shadow-lg z-50 overflow-hidden capitalize`}
                        style={{display: activeDropdown === 'course' && window.innerWidth >= 1024 ? 'block' : 'none'}}
                        onMouseEnter={cancelDropdownClose}
                    >
                        <div className="w-full lg:px-5">
                            <div className="w-full grid grid-cols-4 gap-4 ">

                                <div className='flex items-start flex-col pt-3 w-full'>
                                    <span className='text-black font-bold text-[18px] px-4 font-sans'>IGCSE and short courses</span>
                                    {level1?.map((item, index) => (<a href={`/course/${item?.slug}`} key={index}
                                                                      className="w-full block px-4 py-1 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200 text-[18px] description">
                                        {item?.course_name}
                                    </a>))}
                                </div>

                                <div className='flex items-start flex-col pt-3 w-full'>
                                    <span className='text-black font-bold text-[18px] px-4 font-sans'>Level 3 (A level) - University entry courses</span>
                                    {level2?.map((item, index) => (<a href={`/course/${item?.slug}`} key={index}
                                                                      className="w-full block px-4 py-1 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all description text-[18px] duration-200">
                                        {item?.course_name}
                                    </a>))}
                                </div>

                                <div className='flex items-start flex-col pt-3 w-full'>
                                    <span className='text-black font-bold text-[18px] px-4 font-sans'>Level 4 & 5 - University first and second year courses</span>
                                    {level3?.map((item, index) => (<a href={`/course/${item?.slug}`} key={index}
                                                                      className="w-full block px-4 py-1 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all description text-[18px] duration-200">
                                        {item?.course_name}
                                    </a>))}
                                </div>

                                <div className='flex items-start flex-col pt-3 w-full gap-5'>
                                    <div className='flex items-start flex-col'>
                                        <span className='text-black font-bold text-[18px] px-4 font-sans'>Level 6 Undergraduate / Final year</span>
                                        {level4?.map((item, index) => (<a href={`/course/${item?.slug}`} key={index}
                                                                          className="w-full block px-4 py-1 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all description text-[18px] duration-200">
                                            {item?.course_name}
                                        </a>))}
                                    </div>
                                    <div className='flex items-start flex-col'>
                                        <span className='text-black font-bold text-[18px] px-4 font-sans'>Level 7 Diploma, Masters / MBA Advance Entry</span>
                                        {level5?.map((item, index) => (<a href={`/course/${item?.slug}`} key={index}
                                                                          className="w-full block px-4 py-1 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all description text-[18px] duration-200">
                                            {item?.course_name}
                                        </a>))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="relative"
                    onClick={() => {
                        if (activeDropdown == "progression") {
                            handleMouseLeave('progression')
                        } else {
                            handleMouseEnter('progression')
                        }
                    }}
                >
                    <button
                        onClick={() => toggleDropdown('progression')}
                        className="hover:underline flex outline-none items-center w-full justify-center hover:opacity-80 transition-opacity duration-200"
                    >
                        University Progression
                        <svg
                            className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'progression' ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div
                        className={`lg:absolute left-1/2 -translate-x-1/2 ${window.innerWidth >= 1024 ? 'mt-2' : 'mt-1 ml-4'} py-2 w-full lg:w-[700px] bg-white rounded-md shadow-lg z-50 overflow-hidden capitalize`}
                        style={{display: activeDropdown === 'progression' && window.innerWidth >= 1024 ? 'block' : 'none'}}
                        onMouseEnter={cancelDropdownClose}
                    >
                        <div className='w-full lg:px-5'>
                            <div className='w-full grid grid-cols-2 p-3'>
                                <div className='w-full flex flex-col border-e border-gray-500'>
                                    <a href="/business_progression"
                                       className="block px-2 py-1 text-gray-800  hover:pl-6 transition-all duration-200">Business
                                        progression courses</a>
                                    <a href="/it_progression"
                                       className="block px-2 py-1 text-gray-800  hover:pl-6 transition-all duration-200">IT
                                        progression courses</a>
                                    <a href="/hospitality_progression"
                                       className="block px-2 py-1 text-gray-800  hover:pl-6 transition-all duration-200">Hospitality
                                        progression courses</a>
                                </div>
                                <div className='flex flex-col gap-5 ml-5'>
                                    <img src="/Images/uni_progession.jpg" alt="langford" className='w-full h-full'/>
                                    <span className='text-black text-[16px]'>Upon completing your pathway degree at Langford College, you can seamlessly progress to a prestigious UK university, enhancing your education and career prospects with globally recognized qualifications.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Individuals Dropdown */}
                <div
                    className="relative"
                    onClick={() => {
                        if (activeDropdown == "individual") {
                            handleMouseLeave('individual')
                        } else {
                            handleMouseEnter('individual')
                        }
                    }}
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div
                        className={`lg:absolute left-1/2 -translate-x-1/2 ${window.innerWidth >= 1024 ? 'mt-2' : 'mt-1 ml-4'} py-2 w-full lg:w-[700px] bg-white rounded-md shadow-lg z-50 overflow-hidden capitalize`}
                        style={{display: activeDropdown === 'individual' && window.innerWidth >= 1024 ? 'block' : 'none'}}
                        onMouseEnter={cancelDropdownClose}
                    >
                        <div className='w-full lg:px-5'>
                            <div className='w-full grid grid-cols-2 p-3'>
                                <div className='w-full flex flex-col border-e border-gray-500'>
                                    <a href="/individual/how_will_you_learn"
                                       className="block px-4 py-1 text-gray-800  hover:pl-6 transition-all duration-200">How
                                        will you learn</a>
                                    <a href="/individual/our_hubs"
                                       className="block px-4 py-1 text-gray-800  hover:pl-6 transition-all duration-200">Our
                                        Hubs</a>
                                    <a href="/individual/top-up_degree"
                                       className="block px-4 py-1 text-gray-800  hover:pl-6 transition-all duration-200">Top
                                        up degree</a>
                                    <a href="/individual/blog"
                                       className="block px-4 py-1 text-gray-800  hover:pl-6 transition-all duration-200">Blog</a>
                                    <a href="/individual/testimonial"
                                       className="block px-4 py-1 text-gray-800 hover:pl-6 transition-all duration-200">Testimonial</a>
                                </div>
                                <div className='flex flex-col gap-5 ml-5'>
                                    <img src="/Images/header_Image_1.jpg" alt="langford" className='w-full h-full'/>
                                    <span className='text-black text-[16px]'>At Langford College, learn your way with flexible programs, modern hubs, top-up degrees, insightful blogs, and real student success stories.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="relative"
                    onClick={() => {
                        if (activeDropdown == "about") {
                            handleMouseLeave('about')
                        } else {
                            handleMouseEnter('about')
                        }
                    }}
                >
                    <button
                        onClick={() => toggleDropdown('about')}
                        className="hover:underline flex outline-none items-center w-full justify-center hover:opacity-80 transition-opacity duration-200"
                    >
                        About Us
                        <svg
                            className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div
                        className={`lg:absolute left-1/2 -translate-x-1/2 ${window.innerWidth >= 1024 ? 'mt-2' : 'mt-1 ml-4'} py-2 w-full lg:w-[600px] bg-white rounded-md shadow-lg z-50 overflow-hidden capitalize`}
                        style={{display: activeDropdown === 'about' && window.innerWidth >= 1024 ? 'block' : 'none'}}
                        onMouseEnter={cancelDropdownClose}
                    >
                        <div className='w-full lg:px-5'>
                            <div className='w-full grid grid-cols-2 p-3'>
                                <div className='w-full flex flex-col border-e border-gray-500'>
                                    <a href="/about"
                                       className="block px-4 py-1 text-gray-800  hover:pl-6 transition-all duration-200">About
                                        Us - Home</a>
                                    <a href="/why_langford_college"
                                       className="block px-4 py-1 text-gray-800  hover:pl-6 transition-all duration-200">Why
                                        Langford College</a>
                                </div>
                                <div className='flex flex-col gap-5 ml-5'>
                                    <img src="/Images/header_Image_1.jpg" alt="langford" className='w-full h-full'/>
                                    <span className='text-black text-[16px]'>At Langford College, learn your way with flexible programs, modern hubs, top-up degrees, insightful blogs, and real student success stories.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <a href="/about" className="hover:underline hover:opacity-80 transition-opacity duration-200">
            About Us
          </a> */}

                <div className="flex gap-4">
                    <button
                        className="btn bg-[#E2231A] text-white px-4 py-2 hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6] hover:scale-105 transition-all duration-200"
                        onClick={() => {
                            if (window.location.pathname === "/") {
                                window.scrollTo({top: 8950, behavior: "smooth"});
                            } else {
                                window.location.href = "/?section=enroll_now";
                            }
                        }}
                    >
                        Enroll Now
                    </button>
                    <button
                        className="btn bg-[#2E2E27] text-white px-4 py-2 hover:bg-[#2c2c24] hover:shadow-md shadow-[#2e2e27ee] hover:scale-105 transition-all duration-200"
                        onClick={() => {
                            window.open("https://langford.classportal.online/customer/account/login", "_blank");
                        }}
                    >
                        Log In
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                ref={mobileMenuRef}
                className={`lg:hidden fixed top-0 left-0 w-full bg-white h-screen text-black z-50 overflow-y-auto transform px-5 -translate-x-full ${isMenuOpen ? 'block' : 'hidden'}`}
            >
                <div className={`w-full flex justify-end items-center py-5 border-b border-gray-200`}>
                    <button
                        className="lg:hidden focus:outline-none hover:opacity-80 transition-opacity duration-200"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (<div className="bg-red-600 p-2 text-white">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>) : (<svg
                            className="w-10 h-10"
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
                        </svg>)}
                    </button>
                </div>
                <div className="flex flex-col space-y-2 pb-5">
                    {/* Course Dropdown - Mobile */}
                    <div className="border-b border-gray-200 pb-2">
                        <div
                            className="flex justify-between items-center py-2"
                            onClick={() => toggleDropdown('course')}
                        >
                            <span className="text-lg">Course</span>
                            <span className="text-red-600">
                  <svg
                      className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'course' ? 'transform rotate-45' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
                        </div>

                        <div
                            ref={courseDropdownRef}
                            className="overflow-hidden"
                            style={{height: 0, opacity: 0}}
                        >
                            <div className="pl-4 py-2 space-y-4">
                                <div>
                                    <h3 className="font-bold mb-2">IGCSE and short courses</h3>
                                    <div className="flex flex-col pl-2">
                                        {level1?.map((item, index) => (<a href={`/course/${item?.slug}`} key={index}
                                                                          className="py-1 text-gray-800 hover:text-red-600">
                                            {item?.course_name}
                                        </a>))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold mb-2">Level 3 (A level) - University entry courses</h3>
                                    <div className="flex flex-col pl-2">
                                        {level2?.map((item, index) => (<a href={`/course/${item?.slug}`} key={index}
                                                                          className="py-1 text-gray-800 hover:text-red-600">
                                            {item?.course_name}
                                        </a>))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold mb-2">Level 4 & 5 - University first and second year
                                        courses</h3>
                                    <div className="flex flex-col pl-2">
                                        {level3?.map((item, index) => (<a href={`/course/${item?.slug}`} key={index}
                                                                          className="py-1 text-gray-800 hover:text-red-600">
                                            {item?.course_name}
                                        </a>))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold mb-2">Level 6 Undergraduate / Final year</h3>
                                    <div className="flex flex-col pl-2">
                                        {level4?.map((item, index) => (<a href={`/course/${item?.slug}`} key={index}
                                                                          className="py-1 text-gray-800 hover:text-red-600">
                                            {item?.course_name}
                                        </a>))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold mb-2">Level 7 Diploma, Masters / MBA Advance Entry</h3>
                                    <div className="flex flex-col pl-2">
                                        {level5?.map((item, index) => (<a href={`/course/${item?.slug}`} key={index}
                                                                          className="py-1 text-gray-800 hover:text-red-600">
                                            {item?.course_name}
                                        </a>))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-200 pb-2">
                        <div
                            className="flex justify-between items-center py-2"
                            onClick={() => toggleDropdown('progression')}
                        >
                            <span className="text-lg">University Progression</span>
                            <span className="text-red-600">
                  <svg
                      className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'progression' ? 'transform rotate-45' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
                        </div>

                        <div
                            ref={progressionDropdownRef}
                            className="overflow-hidden"
                            style={{height: 0, opacity: 0}}
                        >
                            <div className="pl-4 py-2">
                                <div className="flex flex-col">
                                    <a href="/business_progression"
                                       className="block py-1 text-gray-800  hover:pl-4 transition-all duration-200">Business
                                        progression courses</a>
                                    <a href="/it_progression"
                                       className="block py-1 text-gray-800  hover:pl-4 transition-all duration-200">IT
                                        progression courses</a>
                                    <a href="/hospitality_progression"
                                       className="block py-1 text-gray-800  hover:pl-4 transition-all duration-200">Hospitality
                                        progression courses</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Individuals Dropdown - Mobile */}
                    <div className="border-b border-gray-200 pb-2">
                        <div
                            className="flex justify-between items-center py-2"
                            onClick={() => toggleDropdown('individual')}
                        >
                            <span className="text-lg">Individuals</span>
                            <span className="text-red-600">
                  <svg
                      className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'individual' ? 'transform rotate-45' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
                        </div>

                        <div
                            ref={individualDropdownRef}
                            className="overflow-hidden"
                            style={{height: 0, opacity: 0}}
                        >
                            <div className="pl-4 py-2">
                                <div className="flex flex-col">
                                    <a href="/individual/how_will_you_learn"
                                       className="block py-1 text-gray-800  hover:pl-4 transition-all duration-200">How
                                        will you learn</a>
                                    <a href="/individual/our_hubs"
                                       className="block py-1 text-gray-800  hover:pl-4 transition-all duration-200">Our
                                        Hubs</a>
                                    <a href="/individual/top-up_degree"
                                       className="block py-1 text-gray-800  hover:pl-4 transition-all duration-200">Top
                                        up degree</a>
                                    <a href="/individual/blog"
                                       className="block py-1 text-gray-800  hover:pl-4 transition-all duration-200">Blog</a>
                                    <a href="/individual/testimonial"
                                       className="block py-1 text-gray-800 hover:pl-4 transition-all duration-200">Testimonial</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                        <div
                            className="flex justify-between items-center py-2"
                            onClick={() => toggleDropdown('about')}
                        >
                            <span className="text-lg">About Us</span>
                            <span className="text-red-600">
                  <svg
                      className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'about' ? 'transform rotate-45' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
                        </div>

                        <div
                            ref={aboutDropdownRef}
                            className="overflow-hidden"
                            style={{height: 0, opacity: 0}}
                        >
                            <div className="pl-4 py-2">
                                <div className="flex flex-col">
                                    <a href="/about"
                                       className="block py-1 text-gray-800  hover:pl-4 transition-all duration-200">About
                                        Us - Home</a>
                                    <a href="/why_langford_college"
                                       className="block py-1 text-gray-800  hover:pl-4 transition-all duration-200">Why
                                        Langford College</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Us - Mobile */}
                    {/* <div className="border-b border-gray-200 pb-2">
              <a href="/about" className="block py-2 text-lg">About Us</a>
            </div> */}

                    {/* Action Buttons - Mobile */}
                    <div className="flex flex-col space-y-3 pt-4">
                        <button
                            className="btn bg-[#E2231A] text-white px-4 py-2 hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6] hover:scale-105 transition-all duration-200"
                            onClick={() => {
                                if (window.location.pathname === "/") {
                                    window.scrollTo({top: 500, behavior: "smooth"});
                                } else {
                                    window.location.href = "/";
                                }
                            }}
                        >
                            Enroll Now
                        </button>
                        <button
                            className="btn bg-[#2E2E27] text-white px-4 py-2 hover:bg-[#2c2c24] hover:shadow-md shadow-[#2e2e27ee] hover:scale-105 transition-all duration-200"
                            onClick={() => {
                                window.open("https://learn.onlinebusinessschool.com/customer/account/login/", "_blank");
                            }}
                        >
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* navigation bar */}
        <div className="w-full flex items-center lg:px-[10vw] text-[14px] p-2 mt-4 text-white">
            {window.location.pathname
                .split('/')
                .filter(segment => segment)
                .length > 0 && (
                <>
                    <a href="/" className="hover:underline">Home</a>
                </>
            )}
            {window.location.pathname
                .split('/')
                .filter(segment => segment)
                .map((segment, index, array) => {
                    const resetList = ["course", "individual", "university"];
                    const decodedSegment = decodeURIComponent(segment); // ✅ Decode %20 to space
                    const label = decodedSegment.charAt(0).toUpperCase() + decodedSegment.slice(1);
                    const href = resetList.includes(segment)
                        ? '/'
                        : '/' + array.slice(0, index + 1).join('/');

                    return (
                        <span key={index} className="flex items-center">
                    <span className="mx-2">/</span>
                    <a href={href} className="hover:underline">{label}</a>
                </span>
                    );
                })}
        </div>


        {/* Desktop Course Dropdown Menu */}
        {/* <div
        className="hidden lg:block lg:absolute lg:left-0 lg:w-full border-t border-b border-gray-300 bg-white mt-28 h-[82vh] z-50 overflow-hidden lg:grid lg:grid-cols-4 lg:gap-4"
        style={{ display: activeDropdown === 'course' && window.innerWidth >= 1024 ? 'block' : 'none' }}
        onMouseEnter={cancelDropdownClose}
      >
        <div className="w-full lg:px-5">
          <div className="w-full grid grid-cols-4 gap-4 ">

            <div className='flex items-start flex-col pt-3 w-full'>
              <span className='text-black font-bold text-2xl px-4'>IGCSE and short courses</span>
              {level1?.map((item, index) => (
                <a href={`/course/${item?.slug}`} key={index} className="w-full block px-4 py-1 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                  {item?.course_name}
                </a>
              ))}
            </div>

            <div className='flex items-start flex-col pt-3 w-full'>
              <span className='text-black font-bold text-2xl px-4'>Level 3 (A level) - University entry courses</span>
              {level2?.map((item, index) => (
                <a href={`/course/${item?.slug}`} key={index} className="w-full block px-4 py-1 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                  {item?.course_name}
                </a>
              ))}
            </div>

            <div className='flex items-start flex-col pt-3 w-full'>
              <span className='text-black font-bold text-2xl px-4'>Level 4 & 5 - University first and second year courses</span>
              {level3?.map((item, index) => (
                <a href={`/course/${item?.slug}`} key={index} className="w-full block px-4 py-1 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                  {item?.course_name}
                </a>
              ))}
            </div>

            <div className='flex items-start flex-col pt-3 w-full gap-5'>
              <div className='flex items-start flex-col'>
                <span className='text-black font-bold text-2xl px-4'>Level 6 Undergraduate / Final year</span>
                {level4?.map((item, index) => (
                  <a href={`/course/${item?.slug}`} key={index} className="w-full block px-4 py-1 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                    {item?.course_name}
                  </a>
                ))}
              </div>
              <div className='flex items-start flex-col'>
                <span className='text-black font-bold text-2xl px-4'>Level 7 Diploma, Masters / MBA Advance Entry</span>
                {level5?.map((item, index) => (
                  <a href={`/course/${item?.slug}`} key={index} className="w-full block px-4 py-1 text-gray-800 hover:bg-gray-100 hover:pl-6 transition-all duration-200">
                    {item?.course_name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </header>);
};

export default Header;