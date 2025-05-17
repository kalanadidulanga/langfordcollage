"use client";
import React, {useEffect, useState} from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Body() {

    const [isclickSection1, setclickSection1] = useState(false);
    const [isclickSection2, setclickSection2] = useState(false);
    const [isclickSection3, setclickSection3] = useState(false);
    const [isclickSection4, setclickSection4] = useState(false);

    return (
        <>
            <div className='w-full font-sans pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 '>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[9vw] lg:text-[3vw]'>
                        Level 3 A Level University Entry Courses
                    </span>

                    {/* section 1 */}
                    <div className='w-full bg-white pt-5 mt-10 pb-4 text-black flex justify-between border-t-[1px] capitalize border-[#2E2E27] cursor-default' onClick={() => setclickSection1(!isclickSection1)}>
                        <span>
                            Start Your University Journey Online
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection1 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection1(!isclickSection1)} />
                    </div>
                    {isclickSection1 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description2 text-[14px] lg:text-[16px] lg:description flex flex-col gap-5 justify-between'>
                                <span>
                                    Begin your path to higher education from the comfort of your own home. Our flexible and fully online programmes are designed to make your academic journey more accessible, affordable, and tailored to your personal goals.
                                </span>
                                <span>
                                    Upon successful completion of a Level 3 qualification, you will be well-prepared to take the next step in your educational journey. Level 3 is widely recognised as equivalent to A-levels and serves as a solid foundation for further study. Whether you're a school leaver, a working professional looking to upskill, or someone returning to education after a break, completing Level 3 opens multiple progression routes.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 2 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection2(!isclickSection2)}>
                        <span>
                            What Comes Next?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection2 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection2(!isclickSection2)} />
                    </div>
                    {isclickSection2 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] text-[14px] lg:text-[16px] lg:description flex flex-col gap-5 justify-between'>
                                <span className={`description2`}>
                                   Once you’ve completed your Level 3 studies, we offer full support to help you progress to the next stage. You’ll have two main options:
                                </span>
                                <div className={`w-full flex flex-col gap-3 pl-5`}>
                                    <div className={`w-full flex gap-3`}>
                                        <span>1.</span>
                                        <div className={`w-full flex flex-col`}>
                                            <span>University Degree Programmes</span>
                                            <span className={`description2`}>
                                                Many of our students choose to progress directly onto a university degree, either online or on campus. We work in partnership with several accredited universities and can assist you with admissions, applications, and choosing the right course for your interests and career aspirations.
                                            </span>
                                        </div>
                                    </div>
                                    <div className={`w-full flex gap-2`}>
                                        <span>2.</span>
                                        <div className={`w-full flex flex-col`}>
                                            <span>Level 4/5 Courses (Equivalent to the First 2 Years of University)</span>
                                            <span className={`description2`}>
                                                Alternatively, you may opt to enrol on one of our Level 4/5 courses, which are equivalent to the first two years of an undergraduate degree. These programmes offer a more affordable and flexible route to a full bachelor’s degree. After completing Level 4/5, you can typically enter the final year of a university degree programme through a top-up course.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {/* section 3 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection3(!isclickSection3)}>
                        <span>
                            Support Every Step of the Way
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection3 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection3(!isclickSection3)} />
                    </div>
                    {isclickSection3 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description2 text-[14px] lg:text-[16px] lg:description flex justify-between'>
                                <span>
                                    We don’t just provide courses—we provide guidance. Our dedicated academic advisors and student support team are here to help you choose the path that best fits your ambitions, whether that's earning a degree, gaining practical qualifications, or entering the workforce with a recognized credential.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 4 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection4(!isclickSection4)}>
                        <span>
                            Your Future Starts Here
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection4 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection4(!isclickSection4)} />
                    </div>
                    {isclickSection4 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description2 text-[14px] lg:text-[16px] lg:description flex flex-col gap-5'>
                                <span>
                                    Take control of your education and your future. With our online platform, you can study at your own pace, gain globally respected qualifications, and unlock the door to university and career success.
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