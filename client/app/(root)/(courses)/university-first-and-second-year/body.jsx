"use client";
import React, { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Body() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            ".learn-anyway-left",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".learn-anyway-section",
                    start: "top 75%",
                    end: "bottom 25%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".learn-anyway-right",
            { opacity: 0, x: 50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".learn-anyway-section",
                    start: "top 75%",
                    end: "bottom 25%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

    }, []);

    return (
        <>
            <div className='w-full capitalize lg:pb-20 pt-10 lg:pt-20 pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 learn-anyway-section'>
                <div className='w-full flex items-start flex-col lg:h-full learn-anyway-left'>
                    <span className='text-[6vw] lg:text-[3vw] font-bold font-sans capitalize'>
                        Level 4 & 5
                    </span>
                    <span className='text-[6vw] lg:text-[3vw] font-bold font-sans capitalize'>
                        Courses
                    </span>
                    <div className='w-full bg-white pt-10 pb-8 text-[#2E2E27] flex flex-col'>
                        <div className='w-full flex flex-col gap-3'>
                            <span className='text-[16px] font-extralight'>
                            Start your university journey online, and we can help you progress onto a final year university course.
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex items-end justify-end w-full lg:w-[60%] h-[35vh] hidden lg:block learn-anyway-right'>
                    <img
                        src="/Images/teacher.png"
                        alt=""
                        className='h-full w-full lg:w-[90%] object-cover'
                    />
                </div>
            </div>
        </>
    )
};

export default Body;