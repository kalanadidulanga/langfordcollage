import React, { useState } from 'react'

export default function Body() {

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

    return (
        <div className='w-full '>
            <div
                className='w-full font-sans lg:pt-10 lg:pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 '>
                <div className='w-full flex items-start flex-col lg:h-full'>
                    <div className="w-full lg:grid lg:grid-cols-2">
                        <div className="w-full flex items-start flex-col font-sans lg:h-full">
                            <span className='text-[6vw] lg:text-[3.5vw] font-sans leading-none'>
                                IT and Engineering
                            </span>
                            <span className='text-[6vw] lg:text-[3.6vw] font-mono leading-[1.3]'>
                                Progression Pathways
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
                            Upon successfully completing your pathway degree with Langford College, you will be granted the opportunity to advance to the final year of your degree program at one of our prestigious partner universities in the UK. This seamless transition allows you to experience the renowned academic environment and global recognition that these institutions offer, further enhancing your qualifications and career prospects. With a wide range of options available, you can choose from top-tier universities known for their excellence in various fields, ensuring that your education reaches its full potential.                        </span>
                        <span className={`text-[2.2vw] font-sans mt-10`}>
                            Level 3 (Foundation)
                        </span>
                        <span className={`text-[18px] font-sans mt-3 border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection1(!isclickSection1)}>
                            Engineering
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection1 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection1 && (
                            <>
                                <div className='flex flex-col gap-2'>
                                    <span className={`text-[17px] description`}>
                                        Upon completing this course, students can progress to a full BA or BSc degree programme at a variety of UK universities, online or on campus.
                                    </span>
                                    <span className={`text-[17px] description`}>
                                        Some examples include:
                                    </span>
                                    <div className='w-full flex pl-5'>
                                        <li></li>
                                        <span>Coventry University</span>
                                    </div>
                                    <div className='w-full flex pl-5'>
                                        <li></li>
                                        <span>Anglia Ruskin University</span>
                                    </div>
                                    <div className='w-full flex pl-5'>
                                        <li></li>
                                        <span>London Metropolitan University</span>
                                    </div>
                                    <div className='w-full flex pl-5'>
                                        <li></li>
                                        <span>University of Derby</span>
                                    </div>
                                    <div className='w-full flex pl-5'>
                                        <li></li>
                                        <span>Middlesex University</span>
                                    </div>
                                </div>
                            </>
                        )}
                        <span className={`text-[18px] font-sans border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection2(!isclickSection2)}>
                            Information Technology
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection2 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection2 && (
                            <>
                                <div className='flex flex-col gap-2'>
                                    <span className={`text-[17px] description`}>
                                        Upon completing this course, students can progress to a full BA or BSc degree programme at a variety of UK universities, online or on campus.                                    </span>
                                    <span className={`text-[17px] description`}>
                                        Some examples include:
                                    </span>
                                    <div className='w-full flex pl-5'>
                                        <li></li>
                                        <span>Coventry University</span>
                                    </div>
                                    <div className='w-full flex pl-5'>
                                        <li></li>
                                        <span>Anglia Ruskin University</span>
                                    </div>
                                    <div className='w-full flex pl-5'>
                                        <li></li>
                                        <span>London Metropolitan University</span>
                                    </div>
                                    <div className='w-full flex pl-5'>
                                        <li></li>
                                        <span>University of Derby</span>
                                    </div>
                                    <div className='w-full flex pl-5'>
                                        <li></li>
                                        <span>Middlesex University</span>
                                    </div>
                                </div>
                            </>
                        )}
                        <span className={`text-[2.2vw] font-sans mt-16`}>
                            Level 4 & 5 (HND)
                        </span>
                        <span className={`text-[18px] font-sans border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection7(!isclickSection7)}>
                            IT and Computing
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection7 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection7 && (
                            <>
                                <div className='flex flex-col gap-2'>
                                    <div
                                        className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`text-[16px] description`}>
                                            Once you’ve completed your online Level 4 & 5 IT and Computing course you have the opportunity to complete a third-year top-up degree programme, known as a ‘BA top up’, from a wide range of UK universities.                                        </span>
                                        <span className={`text-[16px] description`}>
                                            Students can apply to any university offering the BA top up and you can choose to study for your degree either online or in-person on campus.                                        </span>
                                        <span className={`text-[16px] description`}>
                                            If you decide to pursue a full undergraduate degree through an accredited UK university, the costs are as follows.                                        </span>
                                        <div className='pl-5'>
                                            <li className='description'>Middlesex University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc Information Systems (Top-up) </li>
                                                <li>BSc (Hons) Information Technology and Business Information Systems (Top-up)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Gloucestershire</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) Computing</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Derby</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) Computing and Information Technology</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Hertfordshire </li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc Honours Information Technology top up</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Huddersfield</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) Information Technology (Top-up)</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        <span className={`text-[18px] font-sans border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection8(!isclickSection8)}>
                            IT and E-commerce
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection8 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection8 && (
                            <>
                                <div className='flex flex-col gap-2'>
                                    <div
                                        className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`text-[16px] description`}>
                                            Once you’ve completed your online Level 4 & 5 IT and E-Commerce course you have the opportunity to complete a third-year top-up degree programme, known as a ‘BA top up’, from a wide range of UK universities.                                        </span>
                                        <span className={`text-[16px] description`}>
                                            Students can apply to any university offering the BA top up and you can choose to study for your degree either online or in-person on campus.                                        </span>
                                        <span className={`text-[16px] description`}>
                                            If you decide to top up to a full undergraduate degree through an accredited UK university, the costs are as follows.                                        </span>
                                        <div className='pl-5'>
                                            <li className='description'>Middlesex University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc Information Systems (Top-up) </li>
                                                <li>BSc (Hons) Information Technology and Business Information Systems (Top-up)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Derby</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) Computing and Information Technology</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Huddersfield</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) Information Technology (Top-up)</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        <span className={`text-[18px] font-sans border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection9(!isclickSection9)}>
                            IT and Networking
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection9 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection9 && (
                            <>
                                <div className='flex flex-col gap-2'>
                                    <div
                                        className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`text-[16px] description`}>
                                            Once you’ve completed your online Level 4 & 5 IT and Networking course you have the opportunity to complete a third-year top-up degree programme, known as a ‘BA top up’, from a wide range of UK universities.                                        </span>
                                        <span className={`text-[16px] description`}>
                                            Students can apply to any university offering the BA top up and you can choose to study for your degree either online or in-person on campus.                                        </span>
                                        <span className={`text-[16px] description`}>
                                            If you decide to top up to a full undergraduate degree through an accredited UK university, the costs are as follows.                                        </span>
                                        <div className='pl-5'>
                                            <li className='description'>Middlesex University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc Information Systems (Top-up) </li>
                                                <li>BSc (Hons) Information Technology and Business Information Systems (Top-up)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Derby</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) Computing and Information Technology</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Huddersfield</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) Information Technology (Top-up)</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        <span className={`text-[18px] font-sans border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection10(!isclickSection10)}>
                            IT and Web design
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection10 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection10 && (
                            <>
                                <div className='flex flex-col gap-2'>
                                    <div
                                        className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`text-[16px] description`}>
                                            Once you’ve completed your online Level 4 & 5 IT and Web Design course you have the opportunity to complete a third-year top-up degree programme, known as a ‘BA top up’, from a wide range of UK universities.
                                        </span>
                                        <span className={`text-[16px] description`}>
                                            Students can apply to any university offering the BA top up and you can choose to study for your degree either online or in-person on campus.                                        </span>
                                        <span className={`text-[16px] description`}>
                                            If you decide to top up to a full undergraduate degree through an accredited UK university, the costs are as follows.                                        </span>
                                        <div className='pl-5'>
                                            <li className='description'>Middlesex University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc Information Systems (Top-up) </li>
                                                <li>BSc (Hons) Information Technology and Business Information Systems (Top-up)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Derby</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) Computing and Information Technology</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Roehampton</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc Honours Web Design and Development (top up)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Huddersfield</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) Information Technology (Top-up)</li>
                                            </div>
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
