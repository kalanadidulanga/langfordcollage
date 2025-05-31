"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

export default function GetFuture() {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const [searchValue, setsearchValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //
    //     gsap.fromTo(
    //         ".get-future-left",
    //         { opacity: 0, x: -50 },
    //         {
    //             opacity: 1, x: 0, duration: 1, ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: ".get-future-section",
    //                 start: "top 80%",
    //                 end: "bottom 20%",
    //                 toggleActions: "play reverse play reverse", // Works when scrolling up and down
    //                 once: false,
    //             }
    //         }
    //     );
    //
    //     gsap.fromTo(
    //         ".get-future-right",
    //         { opacity: 0, x: 50 },
    //         {
    //             opacity: 1, x: 0, duration: 1, ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: ".get-future-section",
    //                 start: "top 80%",
    //                 end: "bottom 20%",
    //                 toggleActions: "play reverse play reverse",
    //                 once: false,
    //             }
    //         }
    //     );
    //
    // }, []);

    const handleInputChange = async (e) => {
        const value = e.target.value;
        setsearchValue(value);

        try {
            const res = await axios.get(`${BASE_URL}/api/serchCourse?name=${value}`);

            if (res?.data?.status) {
                setShowSuggestions(true);
                setSuggestions(res.data.data);
            }

        } catch (error) {
            setShowSuggestions(false);
        }
    };

    const handleSearch = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/serchCourse?name=${searchValue}`);

            if (res?.data?.status) {
                console.log(res.data.data);
                window.location.href = `/course/${res.data.data[0].slug}`;
            }

        } catch (error) {
            console.error(error);
            console.error(error?.response?.data?.error);
            alert(error?.response?.data?.error);
        }
    }

    return (
        <>
            <div className="w-full pt-20 lg:pt-50 pb-50 bg-[#F7FAFF] font-sans text-[#2e2e27] px-[10vw] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center lg:gap-38 gap-5 get-future-section" id="view_course">
                {/* Left Side - Text Content */}
                <div className="w-full lg:w-auto flex items-start lg:items-end justify-start flex-col get-future-left gap-3">
                    <span className="text-[clamp(3.5rem,7vw,7rem)] font-sans font-bold leading-none">Get Future</span>
                    <span className="text-[clamp(3.5rem,7vw,7rem)] font-mono leading-[1] self-center lg:self-end">Focused</span>
                    <div className="w-full lg:w-full flex items-start md:text-[1.5vw] justify-start description2 flex-col get-future-left">
                        <span className="text-[14px] lg:text-[17px]">Discover a course that not only prepares you for work, but also fast-tracks you towards a university qualification.</span>
                    </div>
                </div>


                {/* Right Side - List Items */}
                <div className="w-full lg:w-auto flex items-start lg:text-[1.4vw] gap-5 mt-20 flex-col get-future-right">
                    <span>
                        Find a course
                    </span>
                    <div className="relative w-full lg:w-[500px]">
                        <div className="flex gap-2 items-center border-b-2 border-[#000000]">
                            <input
                                type="text"
                                className="w-full placeholder:font-extralight font-extralight placeholder:text-base outline-none text-base "
                                placeholder="Search by course name"
                                value={searchValue}
                                onChange={handleInputChange}
                                onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <img
                                src="/Icon/search.svg"
                                alt="search"
                                className="w-5 h-5 cursor-pointer"
                                onClick={handleSearch}
                            />
                        </div>

                        {/* Suggestions Dropdown */}
                        {showSuggestions && suggestions.length > 0 && (
                            <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                                {suggestions?.slice(0, 2)?.map((suggestion, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[16px]"
                                        onClick={() => {
                                            setShowSuggestions(false);
                                            window.location.href = `/course/${suggestion?.slug}`;
                                        }}
                                    >
                                        {suggestion?.course_name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="w-full lg:w-[440px] flex items-start lg:text-[1vw] gap-5 get-future-right flex-wrap mt-10">
                        <span className="border-b-[3px] border-[#E2231A] inline-block leading-[1] cursor-pointer hover:text-[#E2231A] text"
                            onClick={() => {
                                window.location.href = "/igsce-and-short-courses";
                            }}
                        >
                            IGCSE & Short Courses
                        </span>
                        <span className="border-b-[3px] border-[#E2231A] inline-block leading-[1] cursor-pointer hover:text-[#E2231A] text"
                            onClick={() => {
                                window.location.href = "/level-3-a-level-university-entry-courses";
                            }}
                        >
                            A Level University Entry
                        </span>
                        <span className="border-b-[3px] border-[#E2231A] inline-block leading-[1] cursor-pointer hover:text-[#E2231A] text"
                            onClick={() => {
                                window.location.href = "/university-first-and-second-year";
                            }}
                        >
                            HND
                        </span>
                        <span className="border-b-[3px] border-[#E2231A] inline-block leading-[1] cursor-pointer hover:text-[#E2231A] text"
                            onClick={() => {
                                window.location.href = "/level-6-courses";
                            }}
                        >
                            Graduate Level
                        </span>
                        <span className="border-b-[3px] border-[#E2231A] inline-block leading-[1] cursor-pointer hover:text-[#E2231A] text"
                            onClick={() => {
                                window.location.href = "/level-7-mba-advance-entry";
                            }}
                        >
                            Masters/MBA
                        </span>

                    </div>

                </div>
            </div>
        </>
    );
}
