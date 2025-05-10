"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Awarding() {

    const scrollContainerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            ".award-left",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".award-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".award-right",
            { opacity: 0, x: 50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".award-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

    }, []);

    const unilogos = [
        {
            "logo": "/University_Logos/Anglia_Ruskin_University_Logo.png"
        },
        {
            "logo": "/University_Logos/Buckinghamshire New University.png"
        },
        {
            "logo": "/University_Logos/coventry.png"
        },
        {
            "logo": "/University_Logos/Edinburgh Napier University.png"
        },
        {
            "logo": "/University_Logos/London Metropolitan University.png"
        },
        {
            "logo": "/University_Logos/Middlesex University.png"
        },
        {
            "logo": "/University_Logos/northapton_uni.png"
        },
        {
            "logo": "/University_Logos/Northumbria University-01.png"
        },
        {
            "logo": "/University_Logos/University of Bolton .png"
        },
        {
            "logo": "/University_Logos/University of Central Lancashire (UCLAN).png"
        },
        {
            "logo": "/University_Logos/University of Chichester.jpg"
        },
        {
            "logo": "/University_Logos/University of Gloucestershire.png"
        },
        {
            "logo": "/University_Logos/University of Hertfordshire.png"
        },
        {
            "logo": "/University_Logos/University of Roehampton.png"
        },
        {
            "logo": "/University_Logos/University of Wolverhampton.png"
        },
        {
            "logo": "/University_Logos/university-of-cumbria-logo-png.png"
        },
        {
            "logo": "/University_Logos/university-of-derby-.png"
        },
        {
            "logo": "/University_Logos/University-of-Sunderland-Logo.png"
        },
        {
            "logo": "/University_Logos/westcliff_email_logo.png"
        },
        
    ];

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
            <div className='w-full h-screen font-sans bg-[#2f3029] px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 testimonial-section'>
                <div className='w-full flex items-center justify-center flex-col lg:h-full'>
                    <div className="w-full grid grid-cols-2">
                        <div className="w-full flex items-start flex-col lg:h-full text-white">
                            <span className="text-[6vw] lg:text-[4vw] leading-none font-sans">
                            Continue Your
                            </span>
                            <span className="text-[6vw] lg:text-[4vw] font-mono leading-[1.2]">
                            Degree Pathway
                            </span>
                        </div>
                        <div className="w-full h-full p-2">
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

                    {/* <div className="w-full bg-white mt-3 text-[#2E2E27] flex flex-col">
                        <div className="w-full flex flex-col gap-3">
                            <span className="text-[18px] font-extralight ">
                                Read more about how our university's commitment to <br /> excellence has been recognised with our <a href="#" className="underline font-bold">latest <br /> awards.</a>
                            </span>
                        </div>
                    </div> */}


                    <div className="w-full bg-[#2f3029] text-gray-500 flex justify-center lg:justify-start testimonial-right">
                        <div className="w-full bg-[#2f3029] relative">


                            {/* Logo Container */}
                            <div
                                ref={scrollContainerRef}
                                onScroll={handleScroll}
                                className="w-full pt-10 pb-10 flex flex-row justify-start overflow-x-auto gap-8 snap-x snap-mandatory scrollbar-hide scroll-smooth px-6"
                            >
                                {unilogos.map((logo, i) => (
                                    <div
                                        key={i}
                                        onClick={()=>{
                                            window.location.href = `/university/java`;
                                        }}
                                        className="w-full lg:w-64 h-64 border rounded-lg p-2 hover:p-1 bg-white transition-all duration-200 snap-start shrink-0"
                                    >
                                        <img
                                            src={logo.logo}
                                            alt={`logo-${i}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Awarding;
