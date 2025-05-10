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
    const [isclickSection14, setclickSection14] = useState(false);
    const [isclickSection15, setclickSection15] = useState(false);

    return (
        <div className='w-full '>
            <div
                className='w-full font-sans lg:pt-10 lg:pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 '>
                <div className='w-full flex items-start flex-col lg:h-full'>
                    <div className="w-full lg:grid lg:grid-cols-2">
                        <div className="w-full flex items-start flex-col font-sans lg:h-full">
                            <span className='text-[6vw] lg:text-[3.5vw] font-sans leading-none'>
                                Business Progression
                            </span>
                            <span className='text-[6vw] lg:text-[3.6vw] font-mono leading-[1.1]'>
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
                            Level 3 (Foundation)
                        </span>
                        <span className={`text-[18px] font-sans mt-3 border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection1(!isclickSection1)}>
                            Accountancy
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
                            Business Management
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
                        <span className={`text-[18px] font-sans border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection3(!isclickSection3)}>
                            Employability and Workspace Skills
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection3 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection3 && (
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
                        <span className={`text-[18px] font-sans border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection4(!isclickSection4)}>
                            Introduction to Management
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection4 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection4 && (
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
                        <span className={`text-[18px] font-sans border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection5(!isclickSection5)}>
                            Introduction to Management
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection5 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection5 && (
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
                        <span className={`text-[18px] font-sans border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection6(!isclickSection6)}>
                            People and Organizations
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection6 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection6 && (
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
                            Accounting and Finance
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection7 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection7 && (
                            <>
                                <div className='flex flex-col gap-2'>
                                    <div
                                        className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`text-[16px] description`}>
                                            Once you’ve completed your online Level 4 & 5 Accounting and Finance course you have the opportunity to complete a third-year Accounting and Finance degree programme, known as a ‘BA top up’, from a wide range of UK universities
                                        </span>
                                        <span className={`text-[16px] description`}>
                                            Students can apply to any university offering the BA top up and you can choose to study for your degree either online or in-person on campus.
                                        </span>
                                        <span className={`text-[16px] description`}>
                                            If you decide to top up to a full undergraduate degree through an accredited UK university, the costs are listed below.
                                        </span>
                                        <div className='pl-5'>
                                            <li className='description'>Coventry University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>Business Management and Leadership BA (Hons)– London Campus</li>
                                                <li>Business Management and Leadership BA (Hons)– Coventry Campus</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Northampton University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) in International Accounting </li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Derby</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) Business and Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Westcliff University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>Business Administration</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Hertfordshire</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Administration </li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Central Lancashire (UCLAN)</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Hertfordshire</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Administration (top-up) (Online)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Edinburgh Napier University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA in Business Management</li>
                                                <li>BA in Business and Enterprise</li>
                                                <li>BA in Sales Management </li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Sunderland – On Campus</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business and Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Bolton</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc Honours Business with Finance top-up</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Cumbria</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Global Business Management</li>
                                                <li>BA (Hons) International Business Management</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        <span className={`text-[18px] font-sans border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection8(!isclickSection8)}>
                            Business Management
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection8 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection8 && (
                            <>
                                <div className='flex flex-col gap-2'>
                                    <div
                                        className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`text-[16px] description`}>
                                            Did you know our online Diploma in Business Management provides students with a pathway to a degree in Business Management?
                                        </span>
                                        <span className={`text-[16px] description`}>
                                            Once you’ve completed your online Level 4 & 5 Business Management degree pathway course you have the opportunity to complete a third-year degree in Business Management known as a ‘BA top up’, from a wide range of UK universities.
                                        </span>
                                        <span className={`text-[16px] description`}>
                                            Students can apply to any university offering the BA top up and you can choose to study for your degree either online or in-person on campus.
                                        </span>
                                        <span className={`text-[16px] description`}>
                                            If you decide to top up to a full undergraduate degree through an accredited UK university, the costs are listed below.
                                        </span>
                                        <div className='pl-5'>
                                            <li className='description'>Coventry University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>Business Management and Leadership BA (Coventry Campus)</li>
                                                <li>Business Management and Leadership BA (London Campus)</li>
                                                <li>Business Management Top-Up (Online)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Anglia Ruskin University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) Business Management Top-Up</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Northampton University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) in International Accounting</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Derby</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) Business and Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Northumbria</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc Honours Global Business Management (Human Resources) (top-up)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Huddersfield</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA Honours Human Resource Management top-up</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Westcliff University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>Business Administration</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Hertfordshire</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Administration</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Central Lancashire (UCLAN)</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Hertfordshire</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Administration (top-up) (Online)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Edinburgh Napier University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA in Business Management </li>
                                                <li>BA in Business and Enterprise </li>
                                                <li>BA in Sales Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Sunderland</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business and Management </li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Cumbria</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Global Business Management</li>
                                                <li>BA (Hons) International Business Management</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        <span className={`text-[18px] font-sans border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection9(!isclickSection9)}>
                            Entrepreneurship and Management
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection9 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection9 && (
                            <>
                                <div className='flex flex-col gap-2'>
                                    <div
                                        className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`text-[16px] description`}>
                                            Once you’ve completed your online Level 4 & 5 Entrepreneurship course you have the opportunity to complete a third-year top-up degree programme, known as a ‘BA top up’, from a wide range of UK universities.
                                        </span>
                                        <span className={`text-[16px] description`}>
                                            Students can apply to any university offering the BA top up and you can choose to study for your degree either online or in-person on campus.
                                        </span>
                                        <span className={`text-[16px] description`}>
                                            If you decide to top up to a full undergraduate degree through an accredited UK university, the costs are listed below.
                                        </span>
                                        <div className='pl-5'>
                                            <li className='description'>Coventry University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>Business Management and Leadership BA (Hons)– London Campus</li>
                                                <li>Business Management and Leadership BA (Hons)– Coventry Campus</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Northampton University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) in International Accounting</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Derby</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) Business and Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Westcliff University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>Business Administration</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Hertfordshire</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Administration</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Central Lancashire (UCLAN)</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Management </li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Hertfordshire</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Administration (top-up) (Online)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Edinburgh Napier University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA in Business Management</li>
                                                <li>BA in Business and Enterprise </li>
                                                <li>BA in Sales Management </li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Sunderland</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business and Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Bolton </li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc Honours Business with Finance top-up</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Cumbria</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Global Business Management </li>
                                                <li>BA (Hons) International Business Management</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        <span className={`text-[18px] font-sans border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection10(!isclickSection10)}>
                            Logistics and Chain Supply Management
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection10 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection10 && (
                            <>
                                <div className='flex flex-col gap-2'>
                                    <div
                                        className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`text-[16px] description`}>
                                            Once you’ve completed your online Level 4 & 5 Logistics and Chain Supply Management course you have the opportunity to complete a third-year top-up degree programme, known as a ‘BA top up’, from a wide range of UK universities.
                                        </span>
                                        <span className={`text-[16px] description`}>
                                            Students can apply to any university offering the BA top up and you can choose to study for your degree either online or in-person on campus.
                                        </span>
                                        <span className={`text-[16px] description`}>
                                            If you decide to top up to a full undergraduate degree through an accredited UK university, the costs are listed below.
                                        </span>
                                        <div className='pl-5'>
                                            <li className='description'>Coventry University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>Business Management and Leadership BA (Hons)– London Campus</li>
                                                <li>Business Management and Leadership BA (Hons)– Coventry Campus</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Northampton University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) in International Accounting</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Derby</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) Business and Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Westcliff University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>Business Administration</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Hertfordshire</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Administration</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Central Lancashire (UCLAN)</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Hertfordshire</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Administration (top-up) (Online)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Edinburgh Napier University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA in Business Management</li>
                                                <li>BA in Business and Enterprise </li>
                                                <li>BA in Sales Management </li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Sunderland</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business and Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Bolton </li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc Honours Business with Finance top-up</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Cumbria</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Global Business Management </li>
                                                <li>BA (Hons) International Business Management</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        <span className={`text-[18px] font-sans border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection11(!isclickSection11)}>
                            Human Resource Management
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection11 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection11 && (
                            <>
                                <div className='flex flex-col gap-2'>
                                    <div
                                        className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`text-[16px] description`}>
                                            Once you’ve completed your  Level 4 & 5 Human Resource Management Online course you have the opportunity to complete a third-year top-up degree programme, known as a ‘BA top up’, from a wide range of UK universities.
                                        </span>
                                        <span className={`text-[16px] description`}>
                                            Students can apply to any university offering the BA top up and you can choose to study for your degree either online or in-person on campus.
                                        </span>
                                        <span className={`text-[16px] description`}>
                                            If you decide to top up to a full undergraduate degree through an accredited UK university, the costs are listed below.
                                        </span>
                                        <div className='pl-5'>
                                            <li className='description'>Coventry University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>Business Management and Leadership BA (Hons)– London Campus</li>
                                                <li>Business Management and Leadership BA (Hons)– Coventry Campus</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Northampton University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) in International Accounting</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Derby</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) Business and Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Westcliff University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>Business Administration</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Hertfordshire</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Administration</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Central Lancashire (UCLAN)</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Hertfordshire</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Administration (top-up) (Online)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Edinburgh Napier University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA in Business Management</li>
                                                <li>BA in Business and Enterprise </li>
                                                <li>BA in Sales Management </li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Sunderland</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business and Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Bolton </li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc Honours Business with Finance top-up</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Cumbria</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Global Business Management </li>
                                                <li>BA (Hons) International Business Management</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        <span className={`text-[18px] font-sans border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection12(!isclickSection12)}>
                            Leadership and Teamwork
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection12 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection12 && (
                            <>
                                <div className='flex flex-col gap-2'>
                                    <div
                                        className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`text-[16px] description`}>
                                            Once you’ve completed your online Level 4 & 5 Leadership and Teamwork course you have the opportunity to complete a third-year top-up degree programme, known as a ‘BA top up’, from a wide range of UK universities.
                                        </span>
                                        <span className={`text-[16px] description`}>
                                            Students can apply to any university offering the BA top up and you can choose to study for your degree either online or in-person on campus.
                                        </span>
                                        <span className={`text-[16px] description`}>
                                            If you decide to top up to a full undergraduate degree through an accredited UK university, the costs are listed below.
                                        </span>
                                        <div className='pl-5'>
                                            <li className='description'>Coventry University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>Business Management and Leadership BA (Hons)– London Campus</li>
                                                <li>Business Management and Leadership BA (Hons)– Coventry Campus</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Northampton University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) in International Accounting</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Derby</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) Business and Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Westcliff University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>Business Administration</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Hertfordshire</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Administration</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Central Lancashire (UCLAN)</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Hertfordshire</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Administration (top-up) (Online)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Edinburgh Napier University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA in Business Management</li>
                                                <li>BA in Business and Enterprise </li>
                                                <li>BA in Sales Management </li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Sunderland</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business and Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Bolton </li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc Honours Business with Finance top-up</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Cumbria</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Global Business Management </li>
                                                <li>BA (Hons) International Business Management</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        <span className={`text-[18px] font-sans border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection13(!isclickSection13)}>
                            Sales and Marketing
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection13 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection13 && (
                            <>
                                <div className='flex flex-col gap-2'>
                                    <div
                                        className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`text-[16px] description`}>
                                            Once you’ve completed your online Level 4 & 5 Sales and Marketing course you have the opportunity to complete a third-year top-up degree programme, known as a ‘BA top up’, from a wide range of UK universities.
                                        </span>
                                        <span className={`text-[16px] description`}>
                                            Students can apply to any university offering the BA top up and you can choose to study for your degree either online or in-person on campus.
                                        </span>
                                        <span className={`text-[16px] description`}>
                                            If you decide to top up to a full undergraduate degree through an accredited UK university, the costs are listed below.
                                        </span>
                                        <div className='pl-5'>
                                            <li className='description'>Coventry University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>Business Management and Leadership BA (Hons)– London Campus</li>
                                                <li>Business Management and Leadership BA (Hons)– Coventry Campus</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Northampton University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) in International Accounting</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Derby</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc (Hons) Business and Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Westcliff University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>Business Administration</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Hertfordshire</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Administration</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Central Lancashire (UCLAN)</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Hertfordshire</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business Administration (top-up) (Online)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Edinburgh Napier University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA in Business Management</li>
                                                <li>BA in Business and Enterprise </li>
                                                <li>BA in Sales Management </li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Sunderland</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Business and Management</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Bolton </li>
                                            <div className='pl-5 mt-2'>
                                                <li>BSc Honours Business with Finance top-up</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Cumbria</li>
                                            <div className='pl-5 mt-2'>
                                                <li>BA (Hons) Global Business Management </li>
                                                <li>BA (Hons) International Business Management</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        <span className={`text-[2.2vw] font-sans mt-16`}>
                            Level 6 (Top-up)
                        </span>
                        <span className={`text-[18px] font-sans border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection14(!isclickSection14)}>
                            Business Administration
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection14 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection14 && (
                            <>
                                <div className='flex flex-col gap-2'>
                                    <div
                                        className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`text-[16px] description`}>
                                            Once you’ve completed your online Level 6 Business Administration course you have the opportunity to complete a <span className='text1'>top-up degree</span> programme, known as an ‘MBA’, from a wide range of UK universities.                                        </span>
                                        <span className={`text-[16px] description`}>
                                            Students can apply to any university offering the MBA and you can choose to study for your degree either online or in-person on campus.                                        </span>
                                        <span className={`text-[16px] description`}>
                                            If you decide to top up to a full MBA degree through an accredited UK university, some examples of institutions are listed below:                                        </span>
                                        <div className='pl-5'>
                                            <li className='description'>Coventry University</li>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Northampton University</li>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Derby</li>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Middlesex University</li>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        <span className={`text-[2.2vw] font-sans mt-16`}>
                            Level 7 (MBA)
                        </span>
                        <span className={`text-[18px] font-sans border-t pt-2 flex items-center justify-between`} onClick={() => setclickSection15(!isclickSection15)}>
                            Strategic Management and Leadership
                            <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-6 ${isclickSection15 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`} />
                        </span>
                        {isclickSection15 && (
                            <>
                                <div className='flex flex-col gap-2'>
                                    <div
                                        className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`text-[16px] description`}>
                                            On completion of this course students have the opportunity to complete an MBA programme from a range of UK universities. The top up programme can be studied online or on campus. The MBA top up comprises the final 60 credits which consists of either a dissertation or a dissertation and one module.                                        </span>
                                        <span className={`text-[16px] description`}>
                                            Students may top-up <span className='text1'>on campus</span> or by <span className='text1'>distance learning.</span>
                                        </span>
                                        <span className={`text-[16px] description`}>
                                            Students can apply to any university offering the MBA top up, the following universities run Top Up programmes by <span className='text1'>distance</span> and <span className='text1'>on campus learning</span>:
                                        </span>
                                        <div className='pl-5'>
                                            <li className='description'>University of Gloucestershire</li>
                                            <div className='pl-5 mt-2'>
                                                <li>(Top Up) to MBA Business Administration</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Wolverhampton</li>
                                            <div className='pl-5 mt-2'>
                                                <li>MBA (Top Up)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Central Lancashire</li>
                                            <div className='pl-5 mt-2'>
                                                <li>MBA (Top Up)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Sunderland – On Campus</li>
                                            <div className='pl-5 mt-2'>
                                                <li>MBA (Top Up)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Anglia Ruskin University </li>
                                            <div className='pl-5 mt-2'>
                                                <li>Master of Business Administration MBA (Top-Up)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Buckinghamshire New University </li>
                                            <div className='pl-5 mt-2'>
                                                <li>International Master of Business Administration (MBA Top-Up)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Northampton University</li>
                                            <div className='pl-5 mt-2'>
                                                <li>Top up to MBA</li>
                                                <li>MA in Human Resource Management (Top-Up)</li>
                                                <li>MSc in Accounting and finance (Top-Up)</li>
                                                <li>Executive Master of Business Administration (Top-Up MBA)</li>
                                            </div>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>University of Chichester</li>
                                        </div>
                                        <div className='pl-5'>
                                            <li className='description'>Executive Full-Time MBA</li>
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
