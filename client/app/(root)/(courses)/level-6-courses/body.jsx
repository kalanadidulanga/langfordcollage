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
                        Level 6 Graduate Level Courses
                    </span>
                    <span className={`text-[16px] mt-5 capitalize`}>
                        Advance to Postgraduate Study – Your Pathway to an MBA and Beyond
                    </span>
                    <span className={`text-[16px] mt-5 description2`}>
                        Our Level 6 diploma courses are designed to provide in-depth knowledge, strategic insight, and advanced skills in business and management. These qualifications are academically equivalent to the final year of a bachelor's degree and serve as a powerful springboard to postgraduate-level education.
                    </span>
                    <span className={`text-[16px] mt-5 description2`}>
                        Whether you're aiming to accelerate your career, prepare for senior leadership roles, or transition into a new professional field, a Level 6 qualification will position you for success.
                    </span>
                    {/* section 1 */}
                    <div
                        className='w-full bg-white pt-5 mt-10 pb-4 text-black flex justify-between border-t-[1px] capitalize border-[#2E2E27] cursor-default'
                        onClick={() => setclickSection1(!isclickSection1)}>
                        <span>
                            Unlock Postgraduate Opportunities
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow"
                             className={`w-6 h-7 cursor-pointer ${isclickSection1 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`}
                             onClick={() => setclickSection1(!isclickSection1)}/>
                    </div>
                    {isclickSection1 && (
                        <>
                            <div
                                className='w-full bg-white pb-8 text-[#2E2E27] description2 text-[14px] lg:text-[16px] lg:description flex flex-col gap-5 justify-between'>
                                <span>
                                    Upon successful completion of a Level 6 course, you will be eligible for direct entry into postgraduate business programmes, including the highly sought-after Master of Business Administration (MBA).
                                </span>
                                <span>
                                    This progression route is ideal for learners who may not have followed a traditional academic path but want to attain a full postgraduate degree and enhance their credentials in the business world.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 2 */}
                    <div
                        className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default'
                        onClick={() => setclickSection2(!isclickSection2)}>
                        <span>
                            Pathway to an MBA
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
                                   The MBA is one of the most prestigious and internationally recognised qualifications in the business world. Our Level 6 diploma opens the door to a wide range of MBA programmes—whether delivered online, part-time, or on campus—offered by our partner institutions and other top universities that accept Level 6 graduates.
                                </span>
                                <span className={`description2`}>
                                   This means you can earn your MBA in less time and at a fraction of the cost, while still benefiting from the same high academic standards.
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
};

export default Body;