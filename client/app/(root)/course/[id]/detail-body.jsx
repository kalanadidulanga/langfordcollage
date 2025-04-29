"use client";
import React, { useState } from 'react'

function CourseDetailBody({ data }) {
    const [isClickedSection1, setClickSection1] = useState(true);
    const [isClickedSection2, setClickSection2] = useState(false);
    const [isClickedSection3, setClickSection3] = useState(false);
    const [isClickedSection4, setClickSection4] = useState(false);
    const [isClickedSection5, setClickSection5] = useState(false);
    const [isClickedSection6, setClickSection6] = useState(false);

    return (
        <>
            <div className='w-full pb-20 lg:px-[10vw] bg-white capitalize'>
                <div className='w-full flex text-[17px] justify-center'>
                    <span className={`${isClickedSection1 ? `text-white bg-[#E2231A]` : `text-black bg-[#F4C023]`} px-2 py-1 cursor-pointer w-full text-center`}
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
                    <span className={`${isClickedSection2 ? `text-white bg-[#E2231A]` : `text-black bg-[#F4C023]`} px-2 py-1 cursor-pointer w-full text-center`}
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
                    <span className={`${isClickedSection3 ? `text-white bg-[#E2231A]` : `text-black bg-[#F4C023]`} px-2 py-1 cursor-pointer w-full text-center`}
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
                    <span className={`${isClickedSection4 ? `text-white bg-[#E2231A]` : `text-black bg-[#F4C023]`} px-2 py-1 cursor-pointer w-full text-center`}
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
                    <span className={`${isClickedSection5 ? `text-white bg-[#E2231A]` : `text-black bg-[#F4C023]`} px-2 py-1 cursor-pointer w-full text-center`}
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
                    <span className={`${isClickedSection6 ? `text-white bg-[#E2231A]` : `text-black bg-[#F4C023]`} px-2 py-1 cursor-pointer w-full text-center`}
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
                {isClickedSection1 && (
                    <>
                        <div className='w-full bg-[#F7FAFF] p-10'>
                            <div
                                className="text-[18px] text-[#2E2E27] font-light line-clamp-2 lg:line-clamp-5 h-full"
                                dangerouslySetInnerHTML={{ __html: data?.how_it_works ? data?.how_it_works : "N/A" }}
                            />
                        </div>
                    </>
                )}
                {isClickedSection2 && (
                    <>
                        <div className='w-full bg-[#F7FAFF] p-10'>
                            <div
                                className="text-[18px] text-[#2E2E27] font-light line-clamp-2 lg:line-clamp-5 h-full"
                                dangerouslySetInnerHTML={{ __html: data?.course_module ? data?.course_module : "N/A" }}
                            />
                        </div>
                    </>
                )}
                {isClickedSection3 && (
                    <>
                        <div className='w-full bg-[#F7FAFF] p-10'>
                            <div
                                className="text-[18px] text-[#2E2E27] font-light line-clamp-2 lg:line-clamp-5 h-full"
                                dangerouslySetInnerHTML={{ __html: data?.entry_requirements ? data?.entry_requirements : "N/A" }}
                            />
                        </div>
                    </>
                )}
                {isClickedSection4 && (
                    <>
                        <div className='w-full bg-[#F7FAFF] p-10'>
                            <div
                                className="text-[18px] text-[#2E2E27] font-light line-clamp-2 lg:line-clamp-5 h-full"
                                dangerouslySetInnerHTML={{ __html: data?.cost_and_payment ? data?.cost_and_payment : "N/A" }}
                            />
                        </div>
                    </>
                )}
                {isClickedSection5 && (
                    <>
                        <div className='w-full bg-[#F7FAFF] p-10'>
                            <div
                                className="text-[18px] text-[#2E2E27] font-light line-clamp-2 lg:line-clamp-5 h-full"
                                dangerouslySetInnerHTML={{ __html: data?.career_progression ? data?.career_progression : "N/A" }}
                            />
                        </div>
                    </>
                )}
                {isClickedSection6 && (
                    <>
                        <div className='w-full bg-[#F7FAFF] p-10'>
                            <div
                                className="text-[18px] text-[#2E2E27] font-light line-clamp-2 lg:line-clamp-5 h-full"
                                dangerouslySetInnerHTML={{ __html: data?.university_options ? data?.university_options : "N/A" }}
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default CourseDetailBody