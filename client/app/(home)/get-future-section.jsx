"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GetFuture() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            ".get-future-left",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".get-future-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse", // Works when scrolling up and down
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".get-future-right",
            { opacity: 0, x: 50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".get-future-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

    }, []);

    return (
        <div className="w-full pb-10 pt-10 bg-[#F7FAFF] text-black px-[10vw] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center lg:gap-38 gap-14 get-future-section">
            {/* Left Side - Text Content */}
            <div className="w-full lg:w-auto flex items-start lg:items-end text-3xl md:text-[3.6vw] justify-start flex-col get-future-left">
                <span className="font-bold">Get Future</span>
                <span className="title2">Focused</span>
            </div>

            {/* Right Side - List Items */}
            <div className="w-full lg:w-auto flex items-start lg:text-[1.6vw] gap-3 font-bold flex-col get-future-right">
                <span>
                    Find a course
                </span>
                <input type="text" className="w-full lg:w-[440px] border-b-2 border-[#000000] placeholder:font-extralight placeholder:text-base outline-none text-base" placeholder="Find a course" />

            </div>
        </div>
    );
}
