"use client";
import React, { useState } from 'react'

function PersonalDetails() {

    const [isclickSection1, setclickSection1] = useState(false);
    const [isclickSection2, setclickSection2] = useState(false);
    const [isclickSection3, setclickSection3] = useState(false);

    const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL;

    return (
        <>
            <div className='w-full font-sans pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 '>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[9vw] lg:text-[3vw]'>
                        Personal Details
                    </span>

                    {/* section 1 */}
                    <div className='w-full capitalize bg-white pt-5 mt-10 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection1(!isclickSection1)}>
                        <span>
                            How do I change my personal contact details once I have given them to langford college?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection1 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection1(!isclickSection1)} />
                    </div>
                    {isclickSection1 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description2 text-[14px] lg:text-[16px] lg:description flex justify-between'>
                                <span>
                                    You can request this by emailing student support at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 2 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection2(!isclickSection2)}>
                        <span>
                            Can I still access my student dashboard if I have finished my course?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection2 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection2(!isclickSection2)} />
                    </div>
                    {isclickSection2 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description2 text-[14px] lg:text-[16px] lg:description flex justify-between'>
                                <span>
                                    Access to the  langford college Dashboard is for a maximum of 5 years from date of enrolment. This can be extended if a request is made in writing to  langford college student admin.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 3 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection3(!isclickSection3)}>
                        <span>
                            I have forgotten my username/password and cannot login to my dashboard, how can I get access?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection3 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection3(!isclickSection3)} />
                    </div>
                    {isclickSection3 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description2 text-[14px] lg:text-[16px] lg:description flex justify-between'>
                                <span>
                                    If learners have lost or forgotten their login details, they can request a new password on provision of their email address. Email admin@langfordcollege.com for more assistance.
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
};

export default PersonalDetails;