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

    const handleInputChange = async(e) => {
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
                <div className="relative w-full lg:w-[440px]">
            <div className="flex gap-2 items-center border-b-2 border-[#000000]">
                <input
                    type="text"
                    className="w-full placeholder:font-extralight font-extralight placeholder:text-base outline-none text-base"
                    placeholder="Find a course"
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
            </div>
        </div>
    );
}
