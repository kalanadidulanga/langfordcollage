"use client";
import React, { useState } from 'react'

function Progression() {

    const [isclickSection1, setclickSection1] = useState(false);
    const [isclickSection2, setclickSection2] = useState(false);
    return (
        <>
            <div className='w-full font-sans lg:pb-10 pt-5 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 '>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw]'>
                        Progression
                    </span>

                    {/* section 1 */}
                    <div className='w-full bg-white pt-5 mt-10 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection1(!isclickSection1)}>
                        <span>
                        Will I be able to get through to higher education through  langford college?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection1 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection1(!isclickSection1)} />
                    </div>
                    {isclickSection1 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex justify-between'>
                                <span>
                                The  langford college programmes are mapped against UK higher education qualifications which are fully transferable to a range of other higher education routes and professional qualifications. On completion of the  langford college level 4/5 programme students will be awarded 240 credits (The first 2 years of a undergraduate degree) . They can then top up to their final year at one of our university partners who recognise the qualification. Similarly at level 7 students gain 120 credits from a total of 180 credits for an MBA. Again they can top up at an  langford college university partner.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 2 */}
                    <div className='w-full bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection2(!isclickSection2)}>
                        <span>
                        What potential job opportunities are there after I finish the course?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection2 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection2(!isclickSection2)} />
                    </div>
                    {isclickSection2 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex justify-between'>
                                <span>
                                Once you successfully complete your final year at university, you will have a full BA degree or postgraduate qualification that will open doors to many career options.
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
};

export default Progression;