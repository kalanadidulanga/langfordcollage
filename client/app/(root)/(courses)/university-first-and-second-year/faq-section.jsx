"use client";
import React, { useState } from 'react'

function FAQ() {

    const [isclickSection1, setclickSection1] = useState(false);
    const [isclickSection2, setclickSection2] = useState(false);
    const [isclickSection3, setclickSection3] = useState(false);
    const [isclickSection4, setclickSection4] = useState(false);
    const [isclickSection5, setclickSection5] = useState(false);

    return (
        <>
            <div className='w-full font-sans lg:pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw]'>
                        FAQs
                    </span>

                    {/* section 1 */}
                    <div className='w-full bg-white pt-5 mt-10 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection1(!isclickSection1)}>
                        <span>
                            Are there any English language requirements?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection1 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection1(!isclickSection1)} />
                    </div>
                    {isclickSection1 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] font-extralight text-[16px] flex justify-between'>
                                <span>
                                    For students who do not live or come from an English language speaking country, we recommend taking an IELTS course to improve your language to level 5.5 or higher. This can be done alongside our courses. Your minimum level of English may vary depending upon which university you decide to complete your top up qualification from.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 2 */}
                    <div className='w-full bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection2(!isclickSection2)}>
                        <span>
                            Do I need any previous experience and qualifications?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection2 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection2(!isclickSection2)} />
                    </div>
                    {isclickSection2 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] font-extralight text-[16px] flex justify-between'>
                                <span>
                                    You will need to have an IELTS score of Level 5.5 or above on completion of the OBS course. You can study an English course alongside the OBS course. At Level 4/5, you will require a full secondary education to be eligible to enrol onto the course, and universities will require a minimum age before embarking on the university top-up programme. At level 7, you will require 5 years of managerial experience if you do not have a BA degree. This may vary for various university partners. However, we will look at every application individually and some exceptions may be made.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 3 */}
                    <div className='w-full bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection3(!isclickSection3)}>
                        <span>
                            Will there be an interview?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection3 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection3(!isclickSection3)} />
                    </div>
                    {isclickSection3 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] font-extralight text-[16px] flex justify-between'>
                                <span>
                                    There is no interview process. You will have to fill out a short application form to make sure you meet the criteria.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 4 */}
                    <div className='w-full bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection4(!isclickSection4)}>
                        <span>
                            How do I choose the best course for me?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection4 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection4(!isclickSection4)} />
                    </div>
                    {isclickSection4 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] font-extralight text-[16px] flex flex-col gap-5'>
                                <span>
                                    Learners should first visit the <a href="https://www.onlinebusinessschool.com/#Course-services" target='_blank' className='underline'>Langford Collage Course page</a> to view the range of courses on offer. It’s important you choose a subject you enjoy and will help you reach your goals. Here are some things to consider when choosing the right subject for you:
                                </span>
                                <div className='flex flex-col'>
                                    <li>Review the modules within the course: Do they interest you? Are they relevant to your chosen career path?</li>
                                    <li>How is the course taught and assessed: Do you have the motivation to study via distance learning? Are you able to work independently?</li>
                                </div>
                                <span>
                                    It is important that learners do not try to extend themselves too far and too quickly, so should ideally choose a path that comfortably moves on from their existing level of skills and experience.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 5 */}
                    <div className='w-full bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection5(!isclickSection5)}>
                        <span>
                            How do I apply for a course?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection5 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection5(!isclickSection5)} />
                    </div>
                    {isclickSection5 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] font-extralight text-[16px] flex flex-col gap-5'>
                                <span>
                                    You can choose your course and enrol online via the Langford Collage <a href="https://www.onlinebusinessschool.com/#Course-services" target='_blank' className='underline'>course page</a>. Alternatively, you can call the OBS Enrolments Team on 0333 772 1158, and they will guide you through the Enrolment process.
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
};

export default FAQ;