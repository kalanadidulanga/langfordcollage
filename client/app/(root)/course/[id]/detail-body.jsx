"use client";
import React, { useState } from 'react'

function CourseDetailBody() {

    const [isClickedSection1, setClickSection1] = useState(true);
    const [isClickedSection2, setClickSection2] = useState(false);
    const [isClickedSection3, setClickSection3] = useState(false);
    const [isClickedSection4, setClickSection4] = useState(false);
    const [isClickedSection5, setClickSection5] = useState(false);
    const [isClickedSection6, setClickSection6] = useState(false);
    const [isClickedSection7, setClickSection7] = useState(false);

    return (
        <>
            <div className='w-full pt-20 pb-20 lg:px-[10vw] bg-white'>
                <div className='w-full flex text-[17px] justify-center'>
                    <span className={`${isClickedSection1 ? `text-white bg-[#E2231A]` : `text-black bg-[#F4C023]`} px-2 py-1 cursor-pointer w-full text-center`}
                        onClick={() => {
                            setClickSection1(true);
                            setClickSection2(false);
                            setClickSection3(false);
                            setClickSection4(false);
                            setClickSection5(false);
                            setClickSection6(false);
                            setClickSection7(false);
                        }}
                    >
                        How it works
                    </span>
                    <span className={`${isClickedSection2 ? `text-white bg-[#E2231A]` : `text-black bg-[#F4C023]`} px-2 py-1 cursor-pointer w-full text-center`}
                        onClick={() => {
                            setClickSection1(false);
                            setClickSection2(true);
                            setClickSection3(false);
                            setClickSection4(false);
                            setClickSection5(false);
                            setClickSection6(false);
                            setClickSection7(false);
                        }}
                    >
                        Course Modules
                    </span>
                    <span className={`${isClickedSection3 ? `text-white bg-[#E2231A]` : `text-black bg-[#F4C023]`} px-2 py-1 cursor-pointer w-full text-center`}
                        onClick={() => {
                            setClickSection1(false);
                            setClickSection2(false);
                            setClickSection3(true);
                            setClickSection4(false);
                            setClickSection5(false);
                            setClickSection6(false);
                            setClickSection7(false);
                        }}
                    >
                        Entry Requirements
                    </span>
                    <span className={`${isClickedSection4 ? `text-white bg-[#E2231A]` : `text-black bg-[#F4C023]`} px-2 py-1 cursor-pointer w-full text-center`}
                        onClick={() => {
                            setClickSection1(false);
                            setClickSection2(false);
                            setClickSection3(false);
                            setClickSection4(true);
                            setClickSection5(false);
                            setClickSection6(false);
                            setClickSection7(false);
                        }}
                    >
                        Cost & Payment
                    </span>
                    <span className={`${isClickedSection5 ? `text-white bg-[#E2231A]` : `text-black bg-[#F4C023]`} px-2 py-1 cursor-pointer w-full text-center`}
                        onClick={() => {
                            setClickSection1(false);
                            setClickSection2(false);
                            setClickSection3(false);
                            setClickSection4(false);
                            setClickSection5(true);
                            setClickSection6(false);
                            setClickSection7(false);
                        }}
                    >
                        Career Progression
                    </span>
                    <span className={`${isClickedSection6 ? `text-white bg-[#E2231A]` : `text-black bg-[#F4C023]`} px-2 py-1 cursor-pointer w-full text-center`}
                        onClick={() => {
                            setClickSection1(false);
                            setClickSection2(false);
                            setClickSection3(false);
                            setClickSection4(false);
                            setClickSection5(false);
                            setClickSection6(true);
                            setClickSection7(false);
                        }}
                    >
                        University Options
                    </span>
                    <span className={`${isClickedSection7 ? `text-white bg-[#E2231A]` : `text-black bg-[#F4C023]`} px-2 py-1 cursor-pointer w-full text-center`}
                        onClick={() => {
                            setClickSection1(false);
                            setClickSection2(false);
                            setClickSection3(false);
                            setClickSection4(false);
                            setClickSection5(false);
                            setClickSection6(false);
                            setClickSection7(true);
                        }}
                    >
                        Sample Certificate
                    </span>
                </div>
                {isClickedSection1 && (
                    <>
                        <div className='w-full bg-[#F7FAFF] p-10 flex flex-col text-black'>
                            <span className='font-bold text-lg'>How our online course in Business Management works</span>
                            <div className='flex flex-col gap-5 mt-8 text-[18px]'>
                                <span>
                                    Students enrolled on our Diploma in Business Management course can complete a Level 4 Business management (120 credits), Level 5 Business management (120 credits) or a combined Level 4 & 5 Business management (240 credits) Qualifi diploma, designed to provide students with the skills needed to succeed in the Business industry.
                                </span>
                                <span>
                                    This online business course can be started and completed at any time, it’s completely flexible. Each module (Level 4 & Level 5) consists of 40 hours of guided online learning, with an additional 30-50 hours worth of optional materials that include recommended exercises, readings, digital resources and self-test tasks.
                                </span>
                                <span>
                                    To complete this online business course you’ll submit 6 online assignments at each level, and assignments are approximately 2,000-3,000 words each. Once you’ve passed your course, you’ll be awarded with a Qualifi Diploma and you’ll be able to top up your qualification to a bachelor’s degree at a range of UK universities.
                                </span>
                                <span>
                                    During this Business and Management course you’ll have access to 1-2-1 tutor support and webinars, social learning forums and additional materials to complete your diploma in business management with ease. You can find out more about the support you’ll have available on our Student Resources page. You can also read about the academic credentials  we meet and associations we’re part of to make sure you have the best learning experience.
                                </span>
                            </div>
                        </div>
                    </>
                )}
                {isClickedSection2 && (
                    <>
                        <div className='w-full bg-[#F7FAFF] p-10'>

                        </div>
                    </>
                )}
                {isClickedSection3 && (
                    <>
                        <div className='w-full bg-[#F7FAFF] p-10'>

                        </div>
                    </>
                )}
                {isClickedSection4 && (
                    <>
                        <div className='w-full bg-[#F7FAFF] p-10'>

                        </div>
                    </>
                )}
                {isClickedSection5 && (
                    <>
                        <div className='w-full bg-[#F7FAFF] p-10'>

                        </div>
                    </>
                )}
                {isClickedSection6 && (
                    <>
                        <div className='w-full bg-[#F7FAFF] p-10'>

                        </div>
                    </>
                )}
                {isClickedSection7 && (
                    <>
                        <div className='w-full bg-[#F7FAFF] p-10'>

                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default CourseDetailBody