"use client";
import React, { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function NSS() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            ".nss-left",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".nss-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".nss-right",
            { opacity: 0, x: 50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".nss-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

    }, []);

    return (
        <>
            <div className='w-full bg-[#2e2e27] px-[10vh] lg:px-[20vh] py-[10vh] p-2 nss-section flex flex-col lg:flex-row justify-center items-center lg:gap-32 capitalize'>
                <div className='w-full lg:w-[70%] flex items-center nss-left'>
                    <span className='text-[20px] hover:underline font-sans text-center lg:text-start font-bold'>
                        The National Student Survey (NSS) 2025: A UK-wide annual survey for final-year students to share their views and feedback on their time at University.
                    </span>
                </div>
                <div className='w-full lg:w-[30%] flex justify-center items-center nss-right mt-5 lg:mt-0'>
                    <img src="/Images/NSS-2.jpg" alt="NSS" className='w-[80%] lg:w-full' />
                </div>
            </div>
        </>
    )
};

export default NSS;