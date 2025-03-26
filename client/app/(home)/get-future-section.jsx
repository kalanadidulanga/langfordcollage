"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

export default function GetFuture() {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const [searchValue, setsearchValue] = useState("");

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

    const search = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/serchCourse?name=${searchValue}`);

            if (res?.data?.status) {
                console.log(res.data.data);
                window.location.href = `/course/${searchValue}`;
            }

        } catch (error) {
            console.error(error);
            console.error(error?.response?.data?.error);
            alert(error?.response?.data?.error);
        }
    }

    return (
        <div className="w-full pb-10 pt-10 bg-[#F7FAFF] font-sans text-black px-[10vw] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center lg:gap-38 gap-5 get-future-section">
            {/* Left Side - Text Content */}
            <div className="w-full lg:w-auto flex items-start lg:items-end text-3xl md:text-[3.6vw] justify-start flex-col get-future-left gap-3">
                <span className="font-bold">Get Future</span>
                <span className="font-mono font-bold">Focused</span>
            </div>

            {/* Right Side - List Items */}
            <div className="w-full lg:w-auto flex items-start lg:text-[1.6vw] gap-3 font-bold flex-col get-future-right">
                <span>
                    Find a course
                </span>
                <div className="flex gap-2 items-center border-b-2 border-[#000000]">
                    <input type="text" className="w-full lg:w-[440px] placeholder:font-extralight font-extralight placeholder:text-base outline-none text-base" placeholder="Find a course"
                        onKeyUp={(e) => {
                            setsearchValue(e.target.value);
                            if (e.key === 'Enter') {
                                search();
                            }
                        }}

                    />
                    <img src="/Icon/search.svg" alt="search" className="w-5 h-5 cursor-pointer"
                        onClick={(e) => search()}
                    />
                </div>
            </div>
        </div>
    );
}
