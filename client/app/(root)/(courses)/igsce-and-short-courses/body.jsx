"use client";
import React, {useEffect, useState} from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Body() {

    const [isclickSection1, setclickSection1] = useState(false);
    const [isclickSection2, setclickSection2] = useState(false);
    const [isclickSection3, setclickSection3] = useState(false);
    const [isclickSection4, setclickSection4] = useState(false);
    const [isclickSection5, setclickSection5] = useState(false);
    const [isclickSection6, setclickSection6] = useState(false);

    return (
        <>
            <div className='w-full font-sans pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 '>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[9vw] lg:text-[3vw]'>
                        IGCSE and Short Courses
                    </span>

                    {/* section 1 */}
                    <div className='w-full bg-white pt-5 mt-10 pb-4 text-black flex justify-between border-t-[1px] capitalize border-[#2E2E27] cursor-default' onClick={() => setclickSection1(!isclickSection1)}>
                        <span>
                            Why Choose the IGCSE?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection1 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection1(!isclickSection1)} />
                    </div>
                    {isclickSection1 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description2 text-[14px] lg:text-[16px] lg:description flex justify-between'>
                                <span>
                                    The International General Certificate of Secondary Education (IGCSE) is one of the most widely respected international qualifications for secondary-level students. It offers more flexibility and a broader range of subject options than any other international qualification, making it a preferred choice for students, educators, and institutions around the world.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 2 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection2(!isclickSection2)}>
                        <span>
                            Unparalleled Flexibility and Choice
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection2 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection2(!isclickSection2)} />
                    </div>
                    {isclickSection2 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description2 text-[14px] lg:text-[16px] lg:description flex justify-between'>
                                <span>
                                   The IGCSE programme is designed to meet the diverse needs of learners from different cultural, academic, and personal backgrounds. With a wide selection of subjects to choose from-ranging from core areas such as Mathematics, Science, and English to subjects like Business Studies, Art, and Information Technology-students can tailor their education to align with their interests, career goals, and academic strengths.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 3 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection3(!isclickSection3)}>
                        <span>
                            Ideal for Learners Aged 14 and Up
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection3 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection3(!isclickSection3)} />
                    </div>
                    {isclickSection3 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description2 text-[14px] lg:text-[16px] lg:description flex justify-between'>
                                <span>
                                    The IGCSE is typically undertaken by students between the ages of 14 to 16. However, its open entry policy makes it accessible to anyone aged 14 or older, regardless of their previous educational background. Whether you're a traditional student following the standard school path or a mature learner seeking to further your education, the IGCSE provides a flexible, globally recognized stepping stone to future success.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 4 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection4(!isclickSection4)}>
                        <span>
                            No Prior Qualifications Required
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection4 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection4(!isclickSection4)} />
                    </div>
                    {isclickSection4 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description2 text-[14px] lg:text-[16px] lg:description flex flex-col gap-5'>
                                <span>
                                    One of the key advantages of the IGCSE is that there are no prerequisites to enroll. This means that you don’t need any previous qualifications or academic achievements to get started. It’s designed to be accessible and inclusive, making it an excellent opportunity for students who want to build a strong academic foundation or re-enter education after a break.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 5 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection5(!isclickSection5)}>
                        <span>
                            Globally Recognized and Respected
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection5 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection5(!isclickSection5)} />
                    </div>
                    {isclickSection5 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description2 text-[14px] lg:text-[16px] lg:description flex flex-col gap-5'>
                                <span>
                                    IGCSE qualifications are recognized by leading universities and employers worldwide. Completing the IGCSE can open doors to A-Levels, the International Baccalaureate (IB), or other advanced studies, as well as boost your profile in the global job market.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 5 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection6(!isclickSection6)}>
                        <span>
                            A Pathway to Academic and Personal Success
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection6 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection6(!isclickSection6)} />
                    </div>
                    {isclickSection6 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description2 text-[14px] lg:text-[16px] lg:description flex flex-col gap-5'>
                                <span>
                                    Studying the IGCSE helps students develop essential skills such as critical thinking, problem-solving, communication, and independent learning. These are not only crucial for academic progress but are also highly valued in today's ever-evolving workforce.
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