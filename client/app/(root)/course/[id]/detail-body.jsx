"use client";
import React, { useState } from 'react'

function CourseDetailBody({ data }) {
    const [isClickedSection, setClickSection] = useState(false);
    const [isClickedSection1, setClickSection1] = useState(true);
    const [isClickedSection2, setClickSection2] = useState(false);
    const [isClickedSection3, setClickSection3] = useState(false);
    const [isClickedSection4, setClickSection4] = useState(false);
    const [isClickedSection5, setClickSection5] = useState(false);
    const [isClickedSection6, setClickSection6] = useState(false);

    return (
        <>
            <div className='w-full px-[10vw] py-[3vh] grid grid-cols-2 text-[#2e2e27] bg-white border-t border-b border-gray-300'>
                <div className='w-full flex flex-col lg:flex-row lg:gap-10 items-start lg:items-center'>
                    <span className='font-sans text-[22px]'>You are viewing</span>
                    <span className='font-sans text-[18px] description'>Course Summery</span>
                </div>
                <div className='w-full flex flex-col lg:flex-row gap-10 items-center justify-center lg:justify-end'>
                    <span className='font-sans text-[18px] flex items-center justify-center gap-3 cursor-pointer' onClick={() => setClickSection(!isClickedSection)}>Course Contents <span className={`text-[25px] text-red-500 ${isClickedSection ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`}>+</span></span>
                </div>
            </div>
            {isClickedSection && (
                <>
                    <div className='w-full lg:px-[10vw] py-[5vh] bg-[#F7FAFF] flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-[40%] flex flex-col items-start text-[17px] justify-start text-black font-sans gap-3 px-[10vw] lg:px-0 lg:border-e mr-5'>
                            <span className={`${isClickedSection1 ? `pl-3 underline text-[28px]` : `text-black pl-0`} px-2 py-1 cursor-pointer text-center`}
                                onClick={() => {
                                    setClickSection1(true);
                                    setClickSection2(false);
                                    setClickSection3(false);
                                    setClickSection4(false);
                                    setClickSection5(false);
                                    setClickSection6(false);
                                }}
                            >
                                How it works
                            </span>
                            <span className={`${isClickedSection2 ? `pl-3 underline text-[28px]` : `text-black pl-0`} px-2 py-1 cursor-pointer text-center`}
                                onClick={() => {
                                    setClickSection1(false);
                                    setClickSection2(true);
                                    setClickSection3(false);
                                    setClickSection4(false);
                                    setClickSection5(false);
                                    setClickSection6(false);
                                }}
                            >
                                Course Modules
                            </span>
                            <span className={`${isClickedSection3 ? `pl-3 underline text-[28px]` : `text-black pl-0`} px-2 py-1 cursor-pointer text-center`}
                                onClick={() => {
                                    setClickSection1(false);
                                    setClickSection2(false);
                                    setClickSection3(true);
                                    setClickSection4(false);
                                    setClickSection5(false);
                                    setClickSection6(false);
                                }}
                            >
                                Entry Requirements
                            </span>
                            <span className={`${isClickedSection4 ? `pl-3 underline text-[28px]` : `text-black pl-0`} px-2 py-1 cursor-pointer text-center`}
                                onClick={() => {
                                    setClickSection1(false);
                                    setClickSection2(false);
                                    setClickSection3(false);
                                    setClickSection4(true);
                                    setClickSection5(false);
                                    setClickSection6(false);
                                }}
                            >
                                Cost & Payment
                            </span>
                            <span className={`${isClickedSection5 ? `pl-3 underline text-[28px]` : `text-black pl-0`} px-2 py-1 cursor-pointer text-center`}
                                onClick={() => {
                                    setClickSection1(false);
                                    setClickSection2(false);
                                    setClickSection3(false);
                                    setClickSection4(false);
                                    setClickSection5(true);
                                    setClickSection6(false);
                                }}
                            >
                                Career Progression
                            </span>
                            <span className={`${isClickedSection6 ? `pl-3 underline text-[28px]` : `text-black pl-0`} px-2 py-1 cursor-pointer text-center`}
                                onClick={() => {
                                    setClickSection1(false);
                                    setClickSection2(false);
                                    setClickSection3(false);
                                    setClickSection4(false);
                                    setClickSection5(false);
                                    setClickSection6(true);
                                }}
                            >
                                University Options
                            </span>
                        </div>
                        <div className='w-full flex flex-col items-start text-[17px] justify-start text-black font-sans gap-3 px-[10vw] lg:px-0 border-t lg:border-0 mt-5 lg:mt-0 pt-5 lg:pt-0'>
                            {isClickedSection1 && (
                                <>
                                    <div className='w-full bg-[#F7FAFF]'>
                                        <div
                                            className="text-[16px] text-[#2E2E27] font-light line-clamp-2 lg:line-clamp-5 h-full"
                                            dangerouslySetInnerHTML={{ __html: data?.how_it_works ? data?.how_it_works : "N/A" }}
                                        />
                                    </div>
                                </>
                            )}
                            {isClickedSection2 && (
                                <>
                                    <div className='w-full bg-[#F7FAFF]'>
                                        <div
                                            className="text-[16px] text-[#2E2E27] font-light line-clamp-2 lg:line-clamp-5 h-full"
                                            dangerouslySetInnerHTML={{ __html: data?.course_module ? data?.course_module : "N/A" }}
                                        />
                                    </div>
                                </>
                            )}
                            {isClickedSection3 && (
                                <>
                                    <div className='w-full bg-[#F7FAFF]'>
                                        <div
                                            className="text-[16px] text-[#2E2E27] font-light line-clamp-2 lg:line-clamp-5 h-full"
                                            dangerouslySetInnerHTML={{ __html: data?.entry_requirements ? data?.entry_requirements : "N/A" }}
                                        />
                                    </div>
                                </>
                            )}
                            {isClickedSection4 && (
                                <>
                                    <div className='w-full bg-[#F7FAFF]'>
                                        <div
                                            className="text-[16px] text-[#2E2E27] font-light line-clamp-2 lg:line-clamp-5 h-full"
                                            dangerouslySetInnerHTML={{ __html: data?.cost_and_payment ? data?.cost_and_payment : "N/A" }}
                                        />
                                    </div>
                                </>
                            )}
                            {isClickedSection5 && (
                                <>
                                    <div className='w-full bg-[#F7FAFF]'>
                                        <div
                                            className="text-[16px] text-[#2E2E27] font-light line-clamp-2 lg:line-clamp-5 h-full"
                                            dangerouslySetInnerHTML={{ __html: data?.career_progression ? data?.career_progression : "N/A" }}
                                        />
                                    </div>
                                </>
                            )}
                            {isClickedSection6 && (
                                <>
                                    <div className='w-full bg-[#F7FAFF]'>
                                        <div
                                            className="text-[16px] text-[#2E2E27] font-light line-clamp-2 lg:line-clamp-5 h-full"
                                            dangerouslySetInnerHTML={{ __html: data?.university_options ? data?.university_options : "N/A" }}
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default CourseDetailBody