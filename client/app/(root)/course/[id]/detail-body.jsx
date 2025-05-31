"use client";
import React, {useState} from 'react'
import DOMPurify from 'dompurify';
import HtmlViewer from "@/components/HtmlViewer";

function CourseDetailBody({data}) {
    const [isClickedSection, setClickSection] = useState(false);
    const [isClickedSection1, setClickSection1] = useState(true);
    const [isClickedSection2, setClickSection2] = useState(false);
    const [isClickedSection3, setClickSection3] = useState(false);
    const [isClickedSection4, setClickSection4] = useState(false);
    const [isClickedSection5, setClickSection5] = useState(false);
    const [isClickedSection6, setClickSection6] = useState(false);

    console.log(data?.how_it_works)

    return (
        <>
            <div
                className='w-full px-[10vw] py-[3vh] grid grid-cols-2 text-[#2e2e27] bg-white border-t border-b border-gray-300'>
                <div className='w-full flex flex-col lg:flex-row lg:gap-10 items-start lg:items-center'>
                    <span className='font-sans text-[22px]'>You are viewing</span>
                    <span className='font-sans text-[18px] description'>Course Summary</span>
                </div>
                <div className='w-full flex flex-col lg:flex-row gap-10 items-center justify-center lg:justify-end'>
                    <span className='font-sans text-[18px] flex items-center justify-center gap-3 cursor-pointer'
                          onClick={() => setClickSection(!isClickedSection)}>Course Contents <span
                        className={`text-[25px] text-red-500 ${isClickedSection ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`}>+</span></span>
                </div>
            </div>
            {isClickedSection && (
                <>
                    <div className='w-full lg:px-[10vw] py-[5vh] bg-[#F7FAFF] flex flex-col lg:flex-row'>
                        <div
                            className='w-full lg:w-[40%] flex flex-col items-start text-[17px] justify-start text-black gap-3 px-[10vw] lg:px-0 lg:border-e mr-5'>
                            <span
                                className={`${isClickedSection1 ? `pl-3 underline text-[28px]` : `text-black pl-0`} px-2 py-1 cursor-pointer text-center font-sans`}
                                onClick={() => {
                                    setClickSection1(!isClickedSection1);
                                    setClickSection2(false);
                                    setClickSection3(false);
                                    setClickSection4(false);
                                    setClickSection5(false);
                                    setClickSection6(false);
                                }}
                            >
                                How it works
                            </span>
                            {isClickedSection1 && (
                                <div className="lg:hidden bg-[#cfd2d8] p-2 rounded-lg">
                                    <HtmlViewer htmlContent={data?.how_it_works} />
                                </div>
                            )}
                            <span
                                className={`${isClickedSection2 ? `pl-3 underline text-[28px]` : `text-black pl-0`} px-2 py-1 cursor-pointer text-center font-sans`}
                                onClick={() => {
                                    setClickSection1(false);
                                    setClickSection2(!isClickedSection2);
                                    setClickSection3(false);
                                    setClickSection4(false);
                                    setClickSection5(false);
                                    setClickSection6(false);
                                }}
                            >
                                Course Modules
                            </span>
                            {isClickedSection2 && (
                                <div className="lg:hidden bg-[#cfd2d9] p-2 rounded-lg">
                                    <HtmlViewer htmlContent={data?.course_module} />
                                </div>
                            )}
                            <span
                                className={`${isClickedSection3 ? `pl-3 underline text-[28px]` : `text-black pl-0`} px-2 py-1 cursor-pointer text-center font-sans`}
                                onClick={() => {
                                    setClickSection1(false);
                                    setClickSection2(false);
                                    setClickSection3(!isClickedSection3);
                                    setClickSection4(false);
                                    setClickSection5(false);
                                    setClickSection6(false);
                                }}
                            >
                                Entry Requirements
                            </span>
                            {isClickedSection3 && (
                                <div className="lg:hidden bg-[#cfd2d9] p-2 rounded-lg">
                                    <HtmlViewer htmlContent={data?.entry_requirements} />
                                </div>
                            )}
                            <span
                                className={`${isClickedSection4 ? `pl-3 underline text-[28px]` : `text-black pl-0`} px-2 py-1 cursor-pointer text-center font-sans`}
                                onClick={() => {
                                    setClickSection1(false);
                                    setClickSection2(false);
                                    setClickSection3(false);
                                    setClickSection4(!isClickedSection4);
                                    setClickSection5(false);
                                    setClickSection6(false);
                                }}
                            >
                                Cost & Payment
                            </span>
                            {isClickedSection4 && (
                                <div className="lg:hidden bg-[#cfd2d9] p-2 rounded-lg">
                                    <HtmlViewer htmlContent={data?.cost_and_payment} />
                                </div>
                            )}
                            <span
                                className={`${isClickedSection5 ? `pl-3 underline text-[28px]` : `text-black pl-0`} px-2 py-1 cursor-pointer text-center font-sans`}
                                onClick={() => {
                                    setClickSection1(false);
                                    setClickSection2(false);
                                    setClickSection3(false);
                                    setClickSection4(false);
                                    setClickSection5(!isClickedSection5);
                                    setClickSection6(false);
                                }}
                            >
                                Career Progression
                            </span>
                            {isClickedSection5 && (
                                <div className="lg:hidden bg-[#cfd2d9] p-2 rounded-lg">
                                    <HtmlViewer htmlContent={data?.career_progression} />
                                </div>
                            )}
                            <span
                                className={`${isClickedSection6 ? `pl-3 underline text-[28px]` : `text-black pl-0`} px-2 py-1 cursor-pointer text-center font-sans`}
                                onClick={() => {
                                    setClickSection1(false);
                                    setClickSection2(false);
                                    setClickSection3(false);
                                    setClickSection4(false);
                                    setClickSection5(false);
                                    setClickSection6(!isClickedSection6);
                                }}
                            >
                                University Options
                            </span>
                            {isClickedSection6 && (
                                <div className="lg:hidden bg-[#cfd2d9] p-2 rounded-lg">
                                    <HtmlViewer htmlContent={data?.university_options} />
                                </div>
                            )}
                        </div>
                        <div
                            className='w-full flex flex-col items-start text-[17px] justify-start text-black gap-3 px-[10vw] lg:px-0 border-t lg:border-0 mt-5 lg:mt-0 pt-5 lg:pt-0'>
                            {isClickedSection1 && (
                                <div className="hidden lg:block">
                                    <HtmlViewer htmlContent={data?.how_it_works} />
                                </div>
                            )}

                            {isClickedSection2 && (
                                <div className="hidden lg:block">
                                    <HtmlViewer htmlContent={data?.course_module} />
                                </div>
                            )}

                            {isClickedSection3 && (
                                <div className="hidden lg:block">
                                    <HtmlViewer htmlContent={data?.entry_requirements} />
                                </div>
                            )}

                            {isClickedSection4 && (
                                <div className="hidden lg:block">
                                    <HtmlViewer htmlContent={data?.cost_and_payment} />
                                </div>
                            )}

                            {isClickedSection5 && (
                                <div className="hidden lg:block">
                                    <HtmlViewer htmlContent={data?.career_progression} />
                                </div>
                            )}

                            {isClickedSection6 && (
                                <div className="hidden lg:block">
                                    <HtmlViewer htmlContent={data?.university_options} />
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default CourseDetailBody