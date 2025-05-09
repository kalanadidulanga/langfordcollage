"use client";
import React, { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Support() {

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     gsap.fromTo(
    //         ".sup-left",
    //         { opacity: 0, x: -50 },
    //         {
    //             opacity: 1, x: 0, duration: 1, ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: ".sup-section",
    //                 start: "top 80%",
    //                 end: "bottom 20%",
    //                 toggleActions: "play reverse play reverse",
    //                 once: false,
    //             }
    //         }
    //     );

    //     gsap.fromTo(
    //         ".sup-right",
    //         { opacity: 0, x: 50 },
    //         {
    //             opacity: 1, x: 0, duration: 1, ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: ".sup-section",
    //                 start: "top 80%",
    //                 end: "bottom 20%",
    //                 toggleActions: "play reverse play reverse",
    //                 once: false,
    //             }
    //         }
    //     );

    // }, []);

    return (
        <>
            <div className='w-full bg-white lg:h-screen text-black px-[10vw] pt-[5vh] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='w-full flex items-start flex-col lg:h-full'>
                    <div className="w-full lg:grid lg:grid-cols-2">
                        <div className="w-full flex items-start flex-col lg:h-full capitalize">
                            <span className="text-[6vw] lg:text-[3.8vw] font-sans leading-none">
                                Support beyond your
                            </span>
                            <span className="text-[6vw] lg:text-[3.8vw] font-mono leading-[1.1]">
                                Learning
                            </span>
                        </div>
                        <div className="w-full h-full p-2">
                            <div className="border-b-2 h-[90%] border-gray-400 relative">
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-white pt-10 pb-[10vh] text-[#2E2E27] flex flex-col lg:flex-row lg:gap-10'>
                        <div className='flex items-start justify-start w-full lg:w-[60%] h-[55vh]  hidden lg:block'>
                            <div className="relative w-full h-full bg-gray-100">
                                <img
                                    src="/Images/work-man.png"
                                    alt=""
                                    className="w-full h-full object-cover object-bottom"
                                />
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-1'>
                            <span className='text-[16px] font-extralight '>
                                Discover a wealth of invaluable resources to nurture your learning and overall well-being. With our 8 free support hubs, we are dedicated to empowering you in various aspects of your life. <br /> <br />
                                Our dedicated hubs are designed to cater to your personal development, health, and well-being, as well as your employment and interpersonal skills. Explore our support hubs and gain access to an extensive array of tools, guidance, and knowledge. <br /> <br />
                                Whether you're seeking personal growth, looking to improve your mental and physical health, or aiming to enhance your professional skill set, our comprehensive resources are here to uplift you.<br /> <br />
                                Invest in yourself and seize the opportunity to tap into your full potential. Take advantage of our diverse support hubs, carefully crafted to address your unique needs.
                            </span>
                            <div className='flex items-end justify-start w-full h-full'>
                                <button className='btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6]'
                                    onClick={() => {
                                        window.location.href = "/individual/our_hubs"
                                    }}
                                >Find out more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Support;