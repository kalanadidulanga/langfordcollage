"use client";
import React, { useState } from 'react'

function Assignments() {

    const [isclickSection1, setclickSection1] = useState(false);
    const [isclickSection2, setclickSection2] = useState(false);
    const [isclickSection3, setclickSection3] = useState(false);
    const [isclickSection4, setclickSection4] = useState(false);
    const [isclickSection5, setclickSection5] = useState(false);
    const [isclickSection6, setclickSection6] = useState(false);

    return (
        <>
            <div className='w-full font-sans lg:pb-10 pt-5 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 capitalize'>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw]'>
                        Assignments
                    </span>

                    {/* section 1 */}
                    <div className='w-full bg-white pt-5 mt-10 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection1(!isclickSection1)}>
                        <span>
                            Do I have to pay for my assignments?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection1 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection1(!isclickSection1)} />
                    </div>
                    {isclickSection1 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] font-extralight text-[16px] flex justify-between'>
                                <span>
                                    All assignment submissions are free of charge.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 2 */}
                    <div className='w-full bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection2(!isclickSection2)}>
                        <span>
                            Do I receive help and guidance while writing assignments?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection2 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection2(!isclickSection2)} />
                    </div>
                    {isclickSection2 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] font-extralight text-[16px] flex justify-between'>
                                <span>
                                    Yes – all students are encouraged to arrange an initial 30 minute ‘assignment preparation’ session with one of our tutors. The session will be conducted via Zoom and cover all aspects of assignment writing, particularly key areas that students need to be aware of. <br />
                                    In addition to this, students have access to tutors who work with Langford Collage. The tutor details are available via the dashboard and will show which areas they specialise in and when they are available. If a student wishes to arrange a session, they can do so directly from the dashboard, specify which topic they need assistance with, or contact our support team at studentsupport@onlinebusinessschool.com. Further information is available in the Student Handbook and the relevant course information packs.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 3 */}
                    <div className='w-full bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection3(!isclickSection3)}>
                        <span>
                            How do I submit my assignments?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection3 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection3(!isclickSection3)} />
                    </div>
                    {isclickSection3 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] font-extralight text-[16px] flex justify-between'>
                                <span>
                                    Submissions need to be uploaded to via the dashboard, in the ‘Assignments’ area.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 4 */}
                    <div className='w-full bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection4(!isclickSection4)}>
                        <span>
                            How many words do I have to write for my assignments?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection4 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection4(!isclickSection4)} />
                    </div>
                    {isclickSection4 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] font-extralight text-[16px] flex flex-col gap-5'>
                                <span>
                                    Depending on the course, we recommend students write between 2,000 – 8,000 words for each assignment. You will not be penalised for going over this word count limit as long as the work is related to the assignment question.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 5 */}
                    <div className='w-full bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection5(!isclickSection5)}>
                        <span>
                            When do I receive the assignments?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection5 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection5(!isclickSection5)} />
                    </div>
                    {isclickSection5 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] font-extralight text-[16px] flex flex-col gap-5'>
                                <span>
                                    Assignments are released to students upon enrolment.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 6 */}
                    <div className='w-full bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection6(!isclickSection6)}>
                        <span>
                            How long does the marking process take?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection6 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection6(!isclickSection6)} />
                    </div>
                    {isclickSection6 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] font-extralight text-[16px] flex flex-col gap-5'>
                                <span>
                                    After an assignment has been submitted, our markers will return the results within 14 working days. Once all assignments have been completed and marked, an Internal Verifier will view the work, which usually takes up to 10 working days. After the internal verification has come back and agrees with the initial marking, all of the assignments are sent to the awarding body for external verification. The awarding body will then check all of the work to ensure it is of the correct standard. This process can take up to 30 working days. In total, once you have completed all assignments and had them marked, it can take up to 40 working days to receive your final result.
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
};

export default Assignments;