"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function WhatsNew() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            ".whats-left",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".whats-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".whats-right",
            { opacity: 0, x: 50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".whats-section",
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
            <div className="w-[100%] h-screen px-5 lg:px-32 whats-section font-sans whats-new-bg">
                <div className="w-full h-full flex justify-center items-center flex-col md:px-[15vw] gap-3  text-white">
                    <div className="w-full flex flex-col text-center lg:text-start whats-left">
                        <span className="text-5xl md:text-[5vw] font-sans font-bold">Affordable Fast-track</span>
                    </div>
                    <div className="w-full flex flex-col text-center lg:text-end whats-right">
                        <span className="text-5xl md:text-[5vw] font-bold font-mono">University Programs</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhatsNew;
