"use client";
import React, {useEffect, useState} from 'react'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

function Body() {

    const [isclickSection1, setclickSection1] = useState(false);
    const [isclickSection2, setclickSection2] = useState(false);
    return (
        <>
            <div
                className='w-full font-sans pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 '>
                <div className='w-full flex items-start flex-col lg:h-full'>
                    <span className='text-[9vw] lg:text-[3vw]'>
                        Level 4 & 5 Courses
                    </span>
                    <span className={`text-[16px] mt-5 capitalize`}>
                        Begin Your University Journey Online – Flexible, Affordable, and Globally Recognised
                    </span>
                    <span className={`text-[16px] mt-5 description2`}>
                        Our Level 4 and Level 5 diploma courses offer a flexible and cost-effective pathway to a full university degree. Designed to match the academic rigour and learning outcomes of the first two years of an undergraduate programme, these courses are perfect for learners who want to start their higher education journey from anywhere in the world.
                    </span>
                    <span className={`text-[16px] mt-5 description2`}>
                        Whether you're a recent school leaver, working professional, or mature student, our Level 4 and 5 qualifications are ideal for building the skills, knowledge, and confidence needed to progress in your academic or professional life.
                    </span>
                    {/* section 1 */}
                    <div
                        className='w-full bg-white pt-5 mt-10 pb-4 text-black flex justify-between border-t-[1px] capitalize border-[#2E2E27] cursor-default'
                        onClick={() => setclickSection1(!isclickSection1)}>
                        <span>
                            What Are Level 4 & 5 Courses?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow"
                             className={`w-6 h-7 cursor-pointer ${isclickSection1 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`}
                             onClick={() => setclickSection1(!isclickSection1)}/>
                    </div>
                    {isclickSection1 && (
                        <>
                            <div
                                className='w-full bg-white pb-8 text-[#2E2E27] description2 text-[14px] lg:text-[16px] lg:description flex flex-col gap-5 justify-between'>
                                <div className={`w-full flex flex-col gap-1 pl-5`}>
                                    <div className={`w-full flex`}>
                                        <li></li>
                                        <div className={`w-full flex flex-col`}>
                                            <span className={`description2`}>
                                                Level 4 is equivalent to the first year of a university undergraduate degree.
                                            </span>
                                        </div>
                                    </div>
                                    <div className={`w-full flex`}>
                                        <li></li>
                                        <div className={`w-full flex flex-col`}>
                                            <span className={`description2`}>
                                                Level 5 is equivalent to the second year of university.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <span>
                                    Together, these qualifications provide a solid academic foundation and are recognised by a wide range of universities for advanced standing or entry into a final-year top-up degree.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 2 */}
                    <div
                        className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default'
                        onClick={() => setclickSection2(!isclickSection2)}>
                        <span>
                            Progress to University – Your Degree Awaits
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow"
                             className={`w-6 h-7 cursor-pointer ${isclickSection2 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`}
                             onClick={() => setclickSection2(!isclickSection2)}/>
                    </div>
                    {isclickSection2 && (
                        <>
                            <div
                                className='w-full bg-white pb-8 text-[#2E2E27] text-[14px] lg:text-[16px] lg:description flex flex-col gap-5 justify-between'>
                                <span className={`description2`}>
                                   Once you’ve successfully completed your Level 4 and 5 courses, you will be eligible to progress directly to the final year of a university bachelor's degree programme through one of our partnered institutions or universities that recognise these qualifications. This pathway allows you to:
                                </span>
                                <div className={`w-full flex flex-col gap-1 pl-5`}>
                                    <div className={`w-full flex`}>
                                        <li></li>
                                        <div className={`w-full flex flex-col`}>
                                            <span className={`description2`}>
                                                Earn a full UK university degree in a more flexible and affordable way
                                            </span>
                                        </div>
                                    </div>
                                    <div className={`w-full flex`}>
                                        <li></li>
                                        <div className={`w-full flex flex-col`}>
                                            <span className={`description2`}>
                                                Study at your own pace, with full online access to course materials and tutor support
                                            </span>
                                        </div>
                                    </div>
                                    <div className={`w-full flex`}>
                                        <li></li>
                                        <div className={`w-full flex flex-col`}>
                                            <span className={`description2`}>
                                                Graduate faster and save on tuition fees, travel, and accommodation costs
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
};

export default Body;