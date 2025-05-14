"use client";
import {useEffect, useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {TestimonialCard} from '@/components/Testimonial-Card'
import axios from "axios";

function Body() {
    return (
        <>
            <div
                className='w-full pb-10 pt-10 font-sans bg-white text-black px-[10vw] lg:pl-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 testimonialView-section '>
                <div className='w-full grid grid-cols-2 lg:grid-cols-4 h-full gap-10'>
                    <div className={`w-full flex flex-col text-center justify-center items-center rounded-lg bg-[#e8f1f8] p-5 hover:scale-105 duration-200 transition-all`}>
                        <img src="/our_hubs/wellness-hub.svg" alt="Wellness Hub" className={`w-full lg:w-[40%]`}/>
                        <span className={`font-sans`}>Wellness Hub</span>
                    </div>
                    <div className={`w-full flex flex-col text-center justify-center items-center rounded-lg bg-[#e8f1f8] p-5 hover:scale-105 duration-200 transition-all`}>
                        <img src="/our_hubs/career-hub.svg" alt="Wellness Hub" className={`w-full lg:w-[40%]`}/>
                        <span className={`font-sans`}>Career Hub</span>
                    </div>
                    <div className={`w-full flex flex-col text-center justify-center items-center rounded-lg bg-[#e8f1f8] p-5 hover:scale-105 duration-200 transition-all`}>
                        <img src="/our_hubs/buddy-hub.svg" alt="Wellness Hub" className={`w-full lg:w-[40%]`}/>
                        <span className={`font-sans`}>Buddy Hub</span>
                    </div>
                    <div className={`w-full flex flex-col text-center justify-center items-center rounded-lg bg-[#e8f1f8] p-5 hover:scale-105 duration-200 transition-all`}>
                        <img src="/our_hubs/resource-hub.svg" alt="Wellness Hub" className={`w-full lg:w-[40%]`}/>
                        <span className={`font-sans`}>Resource Hub</span>
                    </div>
                    <div className={`w-full flex flex-col text-center justify-center items-center rounded-lg bg-[#e8f1f8] p-5 hover:scale-105 duration-200 transition-all`}>
                        <img src="/our_hubs/study-hub.svg" alt="Wellness Hub" className={`w-full lg:w-[40%]`}/>
                        <span className={`font-sans`}>Study Hub</span>
                    </div>
                    <div className={`w-full flex flex-col text-center justify-center items-center rounded-lg bg-[#e8f1f8] p-5 hover:scale-105 duration-200 transition-all`}>
                        <img src="/our_hubs/personal-development-hub.svg" alt="Wellness Hub" className={`w-full lg:w-[40%]`}/>
                        <span className={`font-sans`}>Personal Development Hub</span>
                    </div>
                    <div className={`w-full flex flex-col text-center justify-center items-center rounded-lg bg-[#e8f1f8] p-5 hover:scale-105 duration-200 transition-all`}>
                        <img src="/our_hubs/fitness-hub.svg" alt="Wellness Hub" className={`w-full lg:w-[40%]`}/>
                        <span className={`font-sans`}>Fitness Hub</span>
                    </div>
                    <div className={`w-full flex flex-col text-center justify-center items-center rounded-lg bg-[#e8f1f8] p-5 hover:scale-105 duration-200 transition-all`}>
                        <img src="/our_hubs/discount-hub.svg" alt="Wellness Hub" className={`w-full lg:w-[40%]`}/>
                        <span className={`font-sans`}>Discount Hub</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body