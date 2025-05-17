"use client";
import {useEffect} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function FastTrackingSection() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            ".fast-tracking-left",
            {opacity: 0, x: -50},
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".fast-tracking-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse", // Works when scrolling up and down
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".fast-tracking-right",
            {opacity: 0, x: 50},
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".fast-tracking-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

    }, []);

    return (
        <div
            className="w-full pt-30 pb-10 bg-white text-[#2e2e27] px-[10vw] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between lg:gap-32 gap-5 fast-tracking-section">
            {/* Left Side - Text Content */}
            <div className="flex items-start justify-start flex-col fast-tracking-left gap-3 w-full">
                <img src="/Images/why_uni.jpg" alt="langford" className="w-full h-full"/>
            </div>

            {/* Right Side - List Items */}
            <div className="w-full flex items-start gap-6 flex-col fast-tracking-right">
                <div className="w-full flex flex-col">
                    <div className="w-full lg:grid lg:grid-cols-3">
                        <div className="w-full col-span-2 flex items-start flex-col lg:h-full">
                            <span className="text-[9vw] lg:text-[3.5vw] font-sans font-bold leading-none">
                                Why Langford
                            </span>
                            <span className="text-[9vw] lg:text-[3.5vw] font-mono leading-[1.4]">
                                College
                            </span>
                        </div>
                        <div className="w-full h-full p-2">
                            <div className="border-b-2 h-[85%] border-gray-400 relative">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <li></li>
                    <span className="hover:underline description2 text-[14px] lg:text-[18px] lg:description">Globally Recognised UK Diplomas & Degrees</span>
                </div>
                <div className="flex">
                    <li></li>
                    <span className="hover:underline description2 text-[14px] lg:text-[18px] lg:description">Progress to Top UK Universities</span>
                </div>
                <div className="flex">
                    <li></li>
                    <span className="hover:underline description2 text-[14px] lg:text-[18px] lg:description">Fully Online with Personal Tutor Support</span>
                </div>
                <div className="flex">
                    <li></li>
                    <span className="hover:underline description2 text-[14px] lg:text-[18px] lg:description">Ofqual-Regulated, Qualifi-Accredited Programmes</span>
                </div>
                <div className="flex">
                    <li></li>
                    <span className="hover:underline description2 text-[14px] lg:text-[18px] lg:description">Start Anytime. Study at Your Pace</span>
                </div>
            </div>
        </div>
    );
}
