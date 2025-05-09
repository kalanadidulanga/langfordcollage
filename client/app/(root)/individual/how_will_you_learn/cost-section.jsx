"use client";
import React, { useState } from 'react'

function Cost() {

    const [isclickSection1, setclickSection1] = useState(false);
    const [isclickSection2, setclickSection2] = useState(false);
    const [isclickSection3, setclickSection3] = useState(false);
    const [isclickSection4, setclickSection4] = useState(false);
    const [isclickSection5, setclickSection5] = useState(false);

    return (
        <>
            <div className='w-full font-sans lg:pb-10 pt-5 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 '>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw]'>
                        Costs
                    </span>

                    {/* section 1 */}
                    <div className='w-full capitalize bg-white pt-5 mt-10 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection1(!isclickSection1)}>
                        <span>
                            Is the online payment taken immediately?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection1 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection1(!isclickSection1)} />
                    </div>
                    {isclickSection1 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex justify-between'>
                                <span>
                                    Yes. Once langford college has received the cleared funds your course material will be released to you immediately.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 2 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection2(!isclickSection2)}>
                        <span>
                            Is there any financial assistance available?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection2 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection2(!isclickSection2)} />
                    </div>
                    {isclickSection2 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex justify-between'>
                                <span>
                                langford college offers an interest free payment plan so that you can pay for your course over a set number of months. Contact one of our student advisers for more information about this. UK students may also be eligible for student loans for the university top-up programme. Learners should make enquiries directly to their chosen university.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 3 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection3(!isclickSection3)}>
                        <span>
                            Are there likely to be any additional costs?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection3 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection3(!isclickSection3)} />
                    </div>
                    {isclickSection3 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex justify-between'>
                                <span>
                                    No additional costs are levied by langford college, and all additional learning resources including tutor support, e-books and short business courses, are included in course tuition fees.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 4 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection4(!isclickSection4)}>
                        <span>
                            What payment options are available?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection4 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection4(!isclickSection4)} />
                    </div>
                    {isclickSection4 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex flex-col gap-5'>
                                <span>
                                    Payment can be made online through credit/debit card, bank transfer or PayPal, Western Union, as well as through an e-mail payment link sent by one of our advisors.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 5 */}
                    <div className='w-full capitalize bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default' onClick={() => setclickSection5(!isclickSection5)}>
                        <span>
                            How much do assessments cost?
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection5 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection5(!isclickSection5)} />
                    </div>
                    {isclickSection5 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] description text-[16px] flex flex-col gap-5'>
                                <span>
                                    Assessments are included with the course purchases.
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
};

export default Cost;