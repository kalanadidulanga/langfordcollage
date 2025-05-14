"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TestimonialCard } from '@/components/Testimonial-Card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axios from "axios";

function LeatestTestimonial() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [testimonials, setTestimonials] = useState([]);

  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.fromTo(
  //     ".testimonial-left",
  //     { opacity: 0, x: -50 },
  //     {
  //       opacity: 1, x: 0, duration: 1, ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: ".testimonial-section",
  //         start: "top 80%",
  //         end: "bottom 20%",
  //         toggleActions: "play reverse play reverse",
  //         once: false,
  //       }
  //     }
  //   );

  //   gsap.fromTo(
  //     ".testimonial-right",
  //     { opacity: 0, x: 50 },
  //     {
  //       opacity: 1, x: 0, duration: 1, ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: ".testimonial-section",
  //         start: "top 80%",
  //         end: "bottom 20%",
  //         toggleActions: "play reverse play reverse",
  //         once: false,
  //       }
  //     }
  //   );

  // }, []);

  useEffect(() => {
    loadTestimonail();
  }, []);

  const loadTestimonail = async () => {

    try {
      const res = await axios.get(`${BASE_URL}/api/getAllTestimonials`);

      if (res?.data?.status) {
        setTestimonials(res.data.data);
      } else {
        setTestimonials([]);
      }
    } catch (error) {
      setTestimonials([]);
    }

  }

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 300; // Adjust based on your needs
    const newScrollPosition = direction === 'left'
      ? scrollPosition - scrollAmount
      : scrollPosition + scrollAmount;

    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });

    setScrollPosition(newScrollPosition);

    // Update arrow visibility after scroll
    setTimeout(() => {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }, 300);
  };

  // Check scroll position on mount
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
      setScrollPosition(container.scrollLeft);
    }
  };


  return (
    <>
      {testimonials?.length > 0 && (
        <>
          <div className='w-full lg:pb-10 lg:h-screen font-sans bg-[#2f3029] text-black px-[10vw] lg:px-0 lg:pl-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 testimonial-section'>
            <div className='w-full flex items-center justify-center font-bold flex-col lg:h-full'>
              <div className="w-full lg:grid lg:grid-cols-2">
                <div className="w-full flex items-start flex-col lg:h-full">
                  <span className="text-[9vw] lg:text-[4vw] font-sans font-bold  pb-5 text-white">
                    Latest Testimonials
                  </span>
                </div>
                <div className="w-full h-full p-2 pr-[10vw] mt-2">
                  <div className="border-b-2 h-[90%] border-gray-400 relative">
                    {/* Left Arrow */}
                    {showLeftArrow ? (
                      <button
                        onClick={() => scroll('left')}
                        className="absolute right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-[#ff0000] shadow-lg text-white cursor-pointer outline-none"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft size={24} />
                      </button>
                    ) : (
                      <button
                        onClick={() => scroll('left')}
                        className="absolute right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-[#ff0000] disabled:bg-[#ff00008c] shadow-lg text-white outline-none"
                        aria-label="Previous slide"
                        disabled
                      >
                        <ChevronLeft size={24} />
                      </button>
                    )}
                    {/* Right Arrow */}
                    {showRightArrow ? (
                      <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-[#ff0000] shadow-lg text-white cursor-pointer outline-none"
                        aria-label="Next slide"
                      >
                        <ChevronRight size={24} />
                      </button>
                    ) : (
                      <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-[#ff0000] disabled:bg-[#ff00008c] shadow-lg text-white outline-none"
                        aria-label="Next slide"
                        disabled
                      >
                        <ChevronRight size={24} />
                      </button>
                    )}
                  </div>
                </div>
              </div>


              <div className="w-full bg-[#2f3029] text-gray-500 flex justify-center lg:justify-start testimonial-right">
                {/* Grid Layout for Large Screens */}
                <div className='bg-[#2f3029] hidden lg:block justify-start overflow-x-scroll gap-8 scrollbar-hide snap-x snap-mandatory'>
                  {/* Logo Container */}
                  <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="w-full pt-8 pb-8 flex flex-row justify-start overflow-x-auto gap-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
                  >
                    {testimonials?.map((item, index) => (
                      <TestimonialCard key={index} image={item?.image_path} title={item?.title} descrption={item?.description} slug={item?.slug} />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </>
      )}
    </>
  )
};

export default LeatestTestimonial;