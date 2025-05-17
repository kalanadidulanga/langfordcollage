"use client";
import React, { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function TryForFree() {

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
            <div className='w-full lg:pb-20 pt-10 lg:pt-20 pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 learn-anyway-section '>
                <div className='w-full flex items-start flex-col lg:h-full learn-anyway-left'>
                    <span className='text-[8vw] lg:text-[3vw] font-sans  capitalize'>
                        Try the Langford College
                    </span>
                    <span className='text-[8vw] lg:text-[3vw] font-mono capitalize'>
                        experience for FREE!
                    </span>
                    <div className='w-full bg-white pt-10 pb-8 text-[#2E2E27] flex flex-col'>
                        <div className='w-full flex flex-col gap-3'>
                            <span className='text-[18px] font-extralight'>
                                Curious as to what an online distance learning course is like? You can try our short module to introduce you to the Langford College online learning experience.
                            </span>
                            <span className='text-[18px] font-extralight'>
                                This module provides all the elements of a full course in a condensed form with interactive elements to increase engagement and categorised content for bite-sized learning.
                            </span>
                            <span className='text-[18px] font-extralight'>
                                ‘All you have to do is sign up – It’s FREE and there’s no obligation to join. We’ll give you access to a sample lesson showcasing a few examples of what to expect when studying online with us.
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex items-end justify-end w-full lg:w-[60%] h-[60vh] hidden lg:block learn-anyway-right'>
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

export default TryForFree;