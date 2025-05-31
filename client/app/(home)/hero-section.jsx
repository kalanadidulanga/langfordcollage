"use client";
import {useEffect} from "react";
import gsap from "gsap";

const HeroSection = () => {
    useEffect(() => {
        gsap.fromTo(
            ".fade-in",
            {opacity: 0, y: 50},
            {opacity: 1, y: 0, duration: 1, ease: "power3.out"}
        );
    }, []);

    return (
        <div className="w-[100%] px-5 lg:px-32 fade-in font-sans">
            <div
                className="w-full h-[55vh] lg:h-[75vh] pt-[15vh] pb-[15vh] flex justify-center items-center flex-col md:px-[7vw] gap-3 lg:gap-10 ">
                <div className="w-full flex flex-col text-center lg:text-start fade-in">
                    <span className="text-5xl md:text-[6.9vw] font-sans font-bold leading-none">A Smarter Route</span>
                </div>
                <div className="w-full flex flex-col text-center lg:text-end fade-in">
                    <span className="text-5xl md:text-[6.9vw] font-mono leading-[1.1] lg:leading-[0.5]">To a British Degree</span>
                </div>
            </div>
            <div className="w-full flex flex-col bottom-3 pb-14 lg:pb-10 justify-center items-start gap-3 fade-in">
        <span className="text-[13px] ">
          Considering studying with us in 2025? <br/> Discover how to earn UK-recognised qualifications from anywhere in the  world—affordably and flexibly.
        </span>
                <div className="w-full flex flex-col gap-4">
                    <div className="flex gap-4">
                        {/* <button className="btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6] fade-in hover:scale-105 transition-all duration-200"
                            onClick={() => {
                                window.scrollTo({ top: 700, behavior: "smooth" });
                            }}
                            >
                                Explore Courses
                            </button> */}
                        <button
                            className="btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6] fade-in hover:scale-105 transition-all duration-200"
                            onClick={() => {
                                window.location.href = "/individual/top-up_degree"
                            }}
                        >
                            Degree Pathways
                        </button>
                        <button
                            className="btn bg-[#2E2E27] hover:bg-[#2c2c24] hover:shadow-md shadow-[#2e2e27ee] fade-in hover:scale-105 transition-all duration-200"
                            onClick={() => {
                                window.location.href = "/life_in_uk"
                            }}
                        >
                            Life In The UK
                        </button>
                    </div>
                    <div className="flex gap-4">
                        <button
                            className="btn bg-[#2E2E27] hover:bg-[#2c2c24] hover:shadow-md shadow-[#2e2e27ee] fade-in hover:scale-105 transition-all duration-200"
                            onClick={() => {
                                window.location.href = "/try_for_free"
                            }}
                        >
                            Try A Free Lesson
                        </button>
                        <button
                            className="btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6] fade-in hover:scale-105 transition-all duration-200"
                            onClick={() => {
                                window.location.href = `/#popular_course`;
                            }}
                        >
                            Most Popular Courses
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
