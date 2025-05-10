import React, { useState } from 'react'

export default function Body() {

    const [isclickSection1, setclickSection1] = useState(false);
    const [isclickSection2, setclickSection2] = useState(false);

    const [isclickSection7, setclickSection7] = useState(false);
    const [isclickSection8, setclickSection8] = useState(false);
    const [isclickSection9, setclickSection9] = useState(false);
    const [isclickSection10, setclickSection10] = useState(false);

    return (
        <div className='w-full '>
            <div
                className='w-full font-sans lg:pt-10 lg:pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 '>
                <div className='w-full flex items-start flex-col lg:h-full'>
                    <div className="w-full lg:grid lg:grid-cols-2">
                        <div className="w-full flex items-start flex-col font-sans lg:h-full">
                            <span className='text-[6vw] lg:text-[3.5vw] font-sans leading-none'>
                                Hospitality Progression
                            </span>
                            <span className='text-[6vw] lg:text-[3.6vw] font-mono leading-[1.3]'>
                                Pathways
                            </span>
                        </div>
                        <div className="w-full h-full p-2">
                            <div className="border-b-2 h-[90%] border-gray-400 relative">
                            </div>
                        </div>
                    </div>

                    {/* section 1 */}
                    <div
                        className='w-full bg-white pt-5 mt-5 pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                        <span className={`text-[16px] description`}>
                            Upon successfully completing your pathway degree with Langford College, you will be granted the opportunity to progress to your degree program at one of our prestigious partner universities in the UK. This seamless transition allows you to experience the renowned academic environment and global recognition that these institutions offer, further enhancing your qualifications and career prospects. With a wide range of options available, you can choose from top-tier universities known for their excellence in various fields, ensuring that your education reaches its full potential.                        </span>
                        <span className={`text-[2.2vw] font-sans mt-10`}>
                            Level 4 & 5 (HND)
                        </span>
                        <span className={`text-[18px] font-sans mt-3 border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection1(!isclickSection1)}>
                            Health and Social Care
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection1 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection1 && (
                            <>
                                <div className='flex flex-col gap-2'>
                                    <span className={`text-[17px] description`}>
                                        Once you’ve completed your online Level 4 & 5 Diploma in Health and Social Care course you have the opportunity to complete a third-year top-up degree programme, known as a ‘BA top up’, from a wide range of UK universities.                                    </span>
                                    <span className={`text-[17px] description`}>
                                        Students can apply to any university offering the BA top up and you can choose to study for your degree either online or in-person on campus.
                                    </span>
                                    <span className={`text-[17px] description`}>
                                        If you decide to top up to a full undergraduate degree through an accredited UK university, the costs are listed below. Please note, the below costs are for distance learning/online only. You have the option of finishing on campus; costs will vary depending on which university you chose to complete the final year at.                                    </span>
                                    <div className='pl-5'>
                                        <li className='description'>Anglia Ruskin University </li>
                                        <div className='pl-5 mt-2'>
                                            <li>Management and Leadership in Health and Social Care (top-up) BSc (Hons)</li>
                                        </div>
                                    </div>
                                    <div className='pl-5'>
                                        <li className='description'>University of Derby</li>
                                        <div className='pl-5 mt-2'>
                                            <li>Integrative Health and Social Care (Top- Up) BSc (Hons)</li>
                                        </div>
                                    </div>
                                    <div className='pl-5'>
                                        <li className='description'>University of Bolton</li>
                                        <div className='pl-5 mt-2'>
                                            <li>BSc Honours Health and Social Care top-up</li>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        <span className={`text-[18px] font-sans border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection2(!isclickSection2)}>
                            Hotel, Hospitality and Tourism Management
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection2 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection2 && (
                            <>
                                <div className='flex flex-col gap-2'>
                                    <span className={`text-[17px] description`}>
                                        Once you’ve completed your online Level 4 & 5 Hospitality, Tourism and Hotel management course you have the opportunity to complete a third year Hospitality degree programme, known as a ‘BA top up’, from a wide range of UK universities.                                    </span>
                                    <span className={`text-[17px] description`}>
                                        Students can apply to any university offering the BA top up and you can choose to study for your degree either online or in-person on campus. Below are just a few of the universities that offer the Hospitality degree top up programme:                                    </span>
                                    <div className='pl-5'>
                                        <li className='description'>University of Derby</li>
                                        <div className='pl-5 mt-2'>
                                            <li>International Hospitality Business Management (Top-Up)</li>
                                        </div>
                                    </div>
                                    <div className='pl-5'>
                                        <li className='description'>Bournemouth University</li>
                                        <div className='pl-5 mt-2'>
                                            <li>BA (Hons) International Hospitality & Tourism Management</li>
                                        </div>
                                    </div>
                                    <div className='pl-5'>
                                        <li className='description'>University of Central Lancashire</li>
                                        <div className='pl-5 mt-2'>
                                            <li>Management in Hospitality BA – Top up</li>
                                        </div>
                                    </div>
                                    <div className='pl-5'>
                                        <li className='description'>University of Sunderland</li>
                                        <div className='pl-5 mt-2'>
                                            <li>International Tourism and Hospitality Management (Top-Up) BSc (Hons)</li>
                                        </div>
                                    </div>
                                    <div className='pl-5'>
                                        <li className='description'>University of Northampton</li>
                                        <div className='pl-5 mt-2'>
                                            <li>International Tourism Management (Top-Up) BA</li>
                                        </div>
                                    </div>
                                    <div className='pl-5'>
                                        <li className='description'>Middlesex University London</li>
                                        <div className='pl-5 mt-2'>
                                            <li>BSc Honours International Hospitality and Tourism Management top-up</li>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
