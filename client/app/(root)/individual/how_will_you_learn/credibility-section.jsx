"use client";
import React, { useState } from 'react'

function Credibility() {

    const [isclickSection1, setclickSection1] = useState(false);
    const [isclickSection2, setclickSection2] = useState(false);

    return (
        <>
            <div className='w-full font-sans lg:pb-10 pt-5 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 '>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw]'>
                    Credibility
                    </span>

                    {/* section 1 */}
                    <div className='w-full capitalize bg-white pt-5 mt-10 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection1(!isclickSection1)}>
                        <span>
                        What is an awarding body?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection1 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection1(!isclickSection1)} />
                    </div>
                    {isclickSection1 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex justify-between'>
                                <span>
                                Awarding bodies are also sometimes referred to as awarding organisations or exam boards, but they all mean the same thing. They are all terms used to describe an organisation that designs, develops, delivers and awards the recognition of learning outcomes. Langford College works together with ATHE, Qualifi and OTHM. These organisations must all be approved by OFQUAL, The UK Governing body for higher education.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 2 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection2(!isclickSection2)}>
                        <span>
                        How are universities linked to the modules?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection2 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection2(!isclickSection2)} />
                    </div>
                    {isclickSection2 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex justify-between'>
                                <span>
                                Learners who achieve an langford college qualification are automatically mapped against a standard UK higher education qualification framework. This is a universally recognised framework of credits. Universities can therefore award credits against the langford college study to give exemptions from large parts of their formal programmes. langford college has pre agreed arrangements with certain universities to provide credits against programmes either on campus or off campus. This is termed ‘university top-up’.
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
};

export default Credibility;