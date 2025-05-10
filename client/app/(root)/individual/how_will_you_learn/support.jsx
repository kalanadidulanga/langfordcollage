"use client";
import React, { useState } from 'react'

function Support() {

    const [isclickSection1, setclickSection1] = useState(false);
    const [isclickSection2, setclickSection2] = useState(false);
    const [isclickSection3, setclickSection3] = useState(false);
    const [isclickSection4, setclickSection4] = useState(false);
    const [isclickSection5, setclickSection5] = useState(false);
    const [isclickSection6, setclickSection6] = useState(false);
    const [isclickSection7, setclickSection7] = useState(false);
    const [isclickSection8, setclickSection8] = useState(false);
    const [isclickSection9, setclickSection9] = useState(false);
    const [isclickSection10, setclickSection10] = useState(false);
    const [isclickSection11, setclickSection11] = useState(false);
    const [isclickSection12, setclickSection12] = useState(false);
    const [isclickSection13, setclickSection13] = useState(false);
    const [isclickSection14, setclickSection14] = useState(false);
    const [isclickSection15, setclickSection15] = useState(false);
    const [isclickSection16, setclickSection16] = useState(false);

    return (
        <>
            <div className='w-full font-sans lg:pb-10 pt-5 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 '>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw]'>
                        Support
                    </span>

                    {/* section 1 */}
                    <div className='w-full capitalize bg-white pt-5 mt-10 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection1(!isclickSection1)}>
                        <span>
                            What modules do I need to achieve a qualification?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection1 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection1(!isclickSection1)} />
                    </div>
                    {isclickSection1 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex justify-between'>
                                <span>
                                    You need to complete all the modules detailed in your required course option plus all the associated assessments to complete the langford college course and receive the diploma. This will give you the recognized university credits. You can study the modules at your own pace and can purchase more modules at any time.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 2 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection2(!isclickSection2)}>
                        <span>
                            Do I need a specific computer to study with  langford college?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection2 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection2(!isclickSection2)} />
                    </div>
                    {isclickSection2 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex justify-between'>
                                <span>
                                    As long as you have internet access any computer or tablet can be used to complete online modules and courses. You can also study on your phone with our mobile friendly content.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 3 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection3(!isclickSection3)}>
                        <span>
                            Can I access my dashboard and study on my mobile and tablet?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection3 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection3(!isclickSection3)} />
                    </div>
                    {isclickSection3 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex justify-between'>
                                <span>
                                    Yes, but this will only be accessible with an internet connection. All digital interactivity has been coded for compatibility on touch screens. You can also learn the material by printing it off.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 4 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection4(!isclickSection4)}>
                        <span>
                            What study materials do I need?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection4 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection4(!isclickSection4)} />
                    </div>
                    {isclickSection4 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex flex-col gap-5'>
                                <span>
                                    The modules themselves are sufficient for passing the associated assessments. The modules contain additional accessible resources that learners may wish to follow through to enhance their learning and these are provided within the text.  langford college also has extra learning resources like e books and webinars to aid your study, completely free of charge.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 5 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection5(!isclickSection5)}>
                        <span>
                            What is a certificate of completion?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection5 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection5(!isclickSection5)} />
                    </div>
                    {isclickSection5 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex flex-col gap-5'>
                                <span>
                                    When you pass a module or an assessment, a certificate of completion is automatically generated which details: module content, level of study and learning outcomes achieved. It is mapped against formal UK educational quality guidelines defined by OFQUAL. Upon completing all modules, you can then complete assignments set by the awarding body to complete your diploma with  langford college.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 6 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection6(!isclickSection6)}>
                        <span>
                            How long will it take?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection6 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection6(!isclickSection6)} />
                    </div>
                    {isclickSection6 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex flex-col gap-5'>
                                <span>
                                    Learners can learn at a pace that suits them. There are no module or assignment completion deadlines with  langford college, apart from the overall 5 year deadline. Learners can study the modules in any order at any time.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 7 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection7(!isclickSection7)}>
                        <span>
                            Does my previous study and experience count towards an Langford College course?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection7 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection7(!isclickSection7)} />
                    </div>
                    {isclickSection7 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex flex-col gap-5'>
                                <span>
                                    There are no exemptions or credits within the langford college system of study, and you have to study all the langford college modules to take advantage of our access route. However, if you think you may be exempt from a certain level, please contact us and we will advise you. We can also help you with your top up enquiries if you have already got the necessary qualifications.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 8 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection8(!isclickSection8)}>
                        <span>
                            Can I personalize my study?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection8 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection8(!isclickSection8)} />
                    </div>
                    {isclickSection8 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex flex-col gap-5'>
                                <span>
                                    Students can study the modules in any order and at any pace. To qualify for the university top-up, all of the modules and assignments must be completed.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 9 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection9(!isclickSection9)}>
                        <span>
                            What do I get when all the modules and assessments are completed?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection9 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection9(!isclickSection9)} />
                    </div>
                    {isclickSection9 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex flex-col gap-5'>
                                <span>
                                    Learners who complete the full programme are awarded a certificate and official credits. This qualification is recognised by UK higher education authorities and by the university sector. The student can then apply to one of our university partners to complete their degree.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 10 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection10(!isclickSection10)}>
                        <span>
                            Do all modules have an exam?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection10 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection10(!isclickSection10)} />
                    </div>
                    {isclickSection10 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex flex-col gap-5'>
                                <span>
                                    All modules have an online assessment. Completion of the requisite number of assessments and written assignments will give the participant a qualification recognised by many top line universities.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 11 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection11(!isclickSection11)}>
                        <span>
                            How do assessments work?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection11 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection11(!isclickSection11)} />
                    </div>
                    {isclickSection11 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex flex-col gap-5'>
                                <span>
                                    Assessments are made up of 30 multiple choice questions and last for one hour. There is an assessment at the end of each module. Questions are answered in sets of five to allow for review and editing if required. If a session times out or an issue occurs throughout, the assessment will time out at the point of the previous five questions. Consequently, you will not lose your previous answers. Results are given immediately upon completion. Upon completing all end of module assessments, learners then undertake assignments set by the awarding body to complete the full course.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 12 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection12(!isclickSection12)}>
                        <span>
                            What is an interactive learning module?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection12 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection12(!isclickSection12)} />
                    </div>
                    {isclickSection12 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex flex-col gap-5'>
                                <span>
                                    The interactive activities in the modules include tests, exercises and assessments that provide a guide to a learner’s progress through the module.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 13 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection13(!isclickSection13)}>
                        <span>
                            How can I pay for my fees as an overseas student?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection13 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection13(!isclickSection13)} />
                    </div>
                    {isclickSection13 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex flex-col gap-5'>
                                <span>
                                langford college has a network of overseas banks that will take payment direct or by credit /debit card. Alternatively, we have representatives in many overseas countries, and you can contact them to make payment.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 14 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection14(!isclickSection14)}>
                        <span>
                            How much support Will  langford college act as my sponsor for a student visa? is available for students?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection14 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection14(!isclickSection14)} />
                    </div>
                    {isclickSection14 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex flex-col gap-5'>
                                <span>
                                langford college cannot act a visa sponsor but your chosen university partner can.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 15 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection15(!isclickSection15)}>
                        <span>
                            Do I need a visa to complete modules/course through langford college?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection15 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection15(!isclickSection15)} />
                    </div>
                    {isclickSection15 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex flex-col gap-5'>
                                <span>
                                    No visa is required for online study. If a student chooses to take the university top-up programme on campus in the UK, a student visa will be required. Learners should request this through their chosen university.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 16 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection16(!isclickSection16)}>
                        <span>
                            Can I study anywhere in the world?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection16 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection16(!isclickSection16)} />
                    </div>
                    {isclickSection16 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex flex-col gap-5'>
                                <span>
                                    Yes – as long as you’ve got access to an internet connection. You can do your studies from anywhere in the world.
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
};

export default Support;