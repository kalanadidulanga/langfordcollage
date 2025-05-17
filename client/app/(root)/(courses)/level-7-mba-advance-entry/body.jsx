"use client";
import React, {useEffect, useState} from 'react'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

function Body() {

    const [isclickSection1, setclickSection1] = useState(false);
    const [isclickSection2, setclickSection2] = useState(false);
    const [isclickSection3, setclickSection3] = useState(false);
    return (<>
            <div
                className='w-full font-sans pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 '>
                <div className='w-full flex items-start flex-col lg:h-full'>
                    <span className='text-[9vw] lg:text-[3vw]'>
                        Level 7 MBA Advance Entry Courses
                    </span>
                    <span className={`text-[16px] mt-5 capitalize`}>
                        Earn 120 Credits Toward Your MBA – Study Online or On Campus
                    </span>
                    <span className={`text-[16px] mt-5 description2`}>
                        Our Level 7 courses are advanced postgraduate qualifications designed for experienced professionals, aspiring managers, and ambitious individuals seeking to develop strategic leadership capabilities. These programmes are academically equivalent to the taught portion of a Master’s degree and are internationally recognised as a pathway to an MBA Top-Up programme.
                    </span>
                    {/* section 1 */}
                    <div
                        className='w-full bg-white pt-5 mt-10 pb-4 text-black flex justify-between border-t-[1px] capitalize border-[#2E2E27] cursor-default'
                        onClick={() => setclickSection1(!isclickSection1)}>
                        <span>
                            Pathway to an MBA Top-Up
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow"
                             className={`w-6 h-7 cursor-pointer ${isclickSection1 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`}
                             onClick={() => setclickSection1(!isclickSection1)}/>
                    </div>
                    {isclickSection1 && (<>
                            <div
                                className='w-full bg-white pb-8 text-[#2E2E27] description2 text-[14px] lg:text-[16px] lg:description flex flex-col gap-5 justify-between'>
                                <span>
                                    After completing the Level 7 Diploma in Strategic Management and Leadership, you are eligible to progress onto a University MBA Top-Up programme—either online or on campus. The top-up typically involves completing a final project, dissertation, or research module (worth the remaining 60 credits), allowing you to earn a full Master of Business Administration degree.
                                </span>
                            </div>
                        </>)}
                    {/* section 2 */}
                    <div
                        className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default'
                        onClick={() => setclickSection2(!isclickSection2)}>
                        <span>
                            Study at Your Own Pace, from Anywhere in the World
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow"
                             className={`w-6 h-7 cursor-pointer ${isclickSection2 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`}
                             onClick={() => setclickSection2(!isclickSection2)}/>
                    </div>
                    {isclickSection2 && (<>
                            <div
                                className='w-full bg-white pb-8 text-[#2E2E27] text-[14px] lg:text-[16px] lg:description flex flex-col gap-5 justify-between'>
                                <span className={`description2`}>
                                   Our Level 7 programmes are designed for busy professionals. Delivered fully online, they provide the flexibility to study around your work and personal commitments, with access to expert tutors and comprehensive learning materials.
                                </span>
                            </div>
                        </>)}
                    {/* section 2 */}
                    <div
                        className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default'
                        onClick={() => setclickSection3(!isclickSection3)}>
                        <span>
                            Your MBA Starts Here
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow"
                             className={`w-6 h-7 cursor-pointer ${isclickSection3 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`}
                             onClick={() => setclickSection3(!isclickSection3)}/>
                    </div>
                    {isclickSection3 && (<>
                            <div
                                className='w-full bg-white pb-8 text-[#2E2E27] text-[14px] lg:text-[16px] lg:description flex flex-col gap-5 justify-between'>
                                <span className={`description2`}>
                                   Take the final step toward earning a world-class Master of Business Administration. With 120 postgraduate credits from your Level 7 course, you’re only one module away from completing your MBA and advancing your career on a global scale.
                                </span>
                                <span className={`text-[16px] mt-5 capitalize`}>
                                    Start your journey today—strategic leadership and a brighter future await.
                                </span>
                            </div>
                        </>)}
                </div>
            </div>
        </>)
};

export default Body;