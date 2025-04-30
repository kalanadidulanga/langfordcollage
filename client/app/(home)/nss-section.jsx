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
                <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 nss-left bg-white rounded-md lg:gap-5 py-5 px-5 text-center'>
                    <img src="/logos/outhm.png" alt="logo" className='w-full lg:h-64 object-contain object-center mb-3 lg:mb-0'/>
                    <img src="/logos/iab.png" alt="logo" className='w-full lg:h-64 object-contain object-center'/>
                    <img src="/logos/CWChamber.png" alt="logo" className='w-full lg:h-64 object-contain object-center'/>
                    <img src="/logos/qualifi.png" alt="logo" className='w-full lg:h-64 object-contain object-center'/>
                </div>
            </div>
        </>
    )
};

export default NSS;