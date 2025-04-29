"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Awarding() {
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
            "logo": "/logos/coventry_university_logo-freelogovectors.net_.png"
        },
        {
            "logo": "/logos/middlesex-university.png"
        },
        {
            "logo": "/logos/uws-logo-uws-health-and-life-sciences.png"
        },
        {
            "logo": "/logos/OIP.png"
        },
        {
            "logo": "/logos/UoS_Logo_RGB.png"
        },
        {
            "logo": "/logos/OIP1.png"
        },
        {
            "logo": "/logos/members-bucks.png"
        },
        {
            "logo": "/logos/university-of-portsmouth.png"
        },
    ];

    return (
        <>
            <div className='w-full lg:pb-10 pt-10 font-sans bg-white text-black px-[10vw] lg:px-0 lg:pl-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 testimonial-section'>
                <div className='w-full flex items-start flex-col lg:h-full'>
                    <span className="text-[6vw] lg:text-[3vw] font-sans font-bold capitalize">
                        Our Partner
                    </span>
                    <span className="text-[6vw] lg:text-[3vw] font-mono capitalize">
                        University
                    </span>

                    <div className="w-full bg-white mt-3 text-[#2E2E27] flex flex-col">
                        <div className="w-full flex flex-col gap-3">
                            <span className="text-[18px] font-extralight capitalize">
                                Read more about how our university's commitment to <br /> excellence has been recognised with our <a href="#" className="underline font-bold">latest <br /> awards.</a>
                            </span>
                        </div>
                    </div>


                    <div className="w-full bg-white text-gray-500 flex justify-center lg:justify-start testimonial-right">
                        <div className="w-full bg-white hidden lg:block">
                            <div className="bg-white w-full pt-10 pb-8 flex flex-row justify-start overflow-x-auto gap-8 snap-x snap-mandatory scrollbar-hide scroll-smooth">
                                {unilogos?.map((value, i) => (
                                    <div key={i} className="w-64 h-64 border rounded-lg p-2 hover:p-1 bg-white transition-all duration-200 snap-start shrink-0">
                                        <img src={value?.logo} alt={`logo-${i}`} className="w-full h-full object-contain" />
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* Swiper Slider for Small Screens */}
                        <div className="lg:hidden w-full pt-10 pb-8">
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={20}
                                slidesPerView={1}
                            // pagination={{ clickable: true }}
                            >

                                {unilogos?.map((value, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="w-full h-[50vh] border rounded-lg p-2 hover:p-1 bg-white transition-all duration-200 snap-start shrink-0">
                                            <img src={value?.logo} alt={`logo-${i}`} className="w-full h-full object-contain" />
                                        </div>
                                    </SwiperSlide>
                                ))}


                            </Swiper>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Awarding;
