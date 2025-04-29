"use client";
import React, { useEffect, useState } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ProgressionOptions() {
    const [isclickSection1, setclickSection1] = useState(false);
    const [isclickSection2, setclickSection2] = useState(false);
    const [isclickSection3, setclickSection3] = useState(false);
    const [isclickSection4, setclickSection4] = useState(false);
    const [isclickSection5, setclickSection5] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
          ".opt-left",
          { opacity: 0, x: -50 },
          { 
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: ".opt-section",
              start: "top 80%", 
              end: "bottom 20%",
              toggleActions: "play reverse play reverse", // Works when scrolling up and down
              once: false,
            }
          }
        );
    
        gsap.fromTo(
          ".opt-right",
          { opacity: 0, x: 50 },
          { 
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: ".opt-section",
              start: "top 80%", 
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
              once: false,
            }
          }
        );
    
      }, []);

    return (
        <>
            <div className='w-full lg:pb-10 bg-white text-black px-[9vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 opt-section capitalize'>
                <div className='w-full flex items-start font-bold flex-col lg:h-full font-sans'>
                    <span className='text-[6vw] lg:text-[3vw] opt-left'>
                        Progression Options
                    </span>

                    {/* section 1 */}
                    <div className='w-full bg-white pt-5 mt-10 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default opt-left' onClick={() => setclickSection1(!isclickSection1)}>
                        <span>
                            Study FULL TIME or PART TIME on campus in the UK for top-up courses or direct entry to University
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection1 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection1(!isclickSection1)} />
                    </div>
                    {isclickSection1 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] font-extralight text-[16px] flex justify-between'>
                                <span>
                                    Most universities will accept Ofqual credits for advanced entry. Therefore students can choose their own university to study full time for a shorter period. Many universities will also offer part time study programmes either as day release or evening study or by distance learning. Some may also offer weekend workshops. Please check this with your preferred university. (Click here to Find a University). Students should understand that these are general guidelines. Students should always check the requirements with their preferred university or local university Agent if they intend to apply. Many universities operate part time/evening provision, and students should check possibilities with their preferred universities first.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 2 */}
                    <div className='w-full bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default opt-left' onClick={() => setclickSection2(!isclickSection2)}>
                        <span>
                            Study with UK Universities BASED OVERSEAS
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection2 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection2(!isclickSection2)} />
                    </div>
                    {isclickSection2 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] font-extralight text-[16px] flex justify-between'>
                                <span>
                                    Some UK universities operate overseas campuses and may accept local students on their programmes with advanced entry. For example, UK universities have campuses in Dubai, Mauritius, Sri Lanka, Hong Kong, amongst many others. Students should check locally for these arrangements. There are several UK campuses in UAE <a href="https://www.guide2dubai.com/living/education/british-universities-dubai" target='_blank' className='underline text-blue-500'>https://www.guide2dubai.com/living/education/british-universities-dubai</a> Other examples are Hong Kong, Cyprus, Mauritius and several parts of South Asia. International students looking to complete in the UK may also visit the NARIC website to view equivalencies <a href="https://www.naric.org.uk/naric/" target='_blank' className='underline text-blue-500'>https://www.naric.org.uk/naric/</a>
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 3 */}
                    <div className='w-full bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default opt-left' onClick={() => setclickSection3(!isclickSection3)}>
                        <span>
                            Study with NON UK UNIVERSITIES
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection3 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection3(!isclickSection3)} />
                    </div>
                    {isclickSection3 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] font-extralight text-[16px] flex justify-between'>
                                <span>
                                    Students may want to study at institutions nearer their home country or qualifications outside of UK. For example many Australian, Indian and Canadian universities offer distance learning and will recognise equivalent UK qualifications on a case by case basis.
                                    USA universities will generally accept UK advanced entry students and equivalence but there is a huge difference between regions and universities with general policy.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 4 */}
                    <div className='w-full bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default opt-left' onClick={() => setclickSection4(!isclickSection4)}>
                        <span>
                            Study for an AMBA MBA
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection4 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection4(!isclickSection4)} />
                    </div>
                    {isclickSection4 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] font-extralight text-[16px] flex justify-between'>
                                <span>
                                    The Association of MBAs is a membership organisation that provides accreditation and upholds the highest international standards of MBA programmes. Many UK universities are members and offer distance learning study. Although credits cannot be given, admission can be gained via the Langford Collage level 6 or 7 plus the requisite additional entry requirements of your chosen university. Students should check the regulations of their chosen university first.
                                </span>
                            </div>
                        </>
                    )}
                    {/* section 5 */}
                    <div className='w-full bg-white pt-5 pb-4 text-black flex justify-between border-t-[1px] border-[#2E2E27] cursor-default opt-left' onClick={() => setclickSection5(!isclickSection5)}>
                        <span>
                            Awarding body approved progression routes
                        </span>
                        <img src="/Icon/arrow.png" alt="arrow" className={`w-6 h-7 cursor-pointer ${isclickSection5 ? `duration-100 rotate-0` : `-rotate-90 duration-100`}`} onClick={() => setclickSection5(!isclickSection5)} />
                    </div>
                    {isclickSection5 && (
                        <>
                            <div className='w-full bg-white pb-8 text-[#2E2E27] font-extralight text-[16px] flex flex-col gap-5'>
                                <span>
                                    Our awarding bodies work in close partnership with various universities to facilitate progression opportunities. Top up on campus or online with one of our awarding bodies:
                                </span>
                                <div className='flex flex-col gap-2'>
                                    <span>ATHE:  <a href="https://www.athe.co.uk/progression-routes/" target='_blank' className='underline'>https://www.athe.co.uk/progression-routes/</a></span>
                                    <span>OTHM:  <a href="https://www.othm.org.uk/university-progression.html" target='_blank' className='underline'>https://www.othm.org.uk/university-progression.html</a></span>
                                    <span>Qualifi: <a href="https://qualifi.net/university-progression/" target='_blank' className='underline'>https://qualifi.net/university-progression/</a></span>
                                </div>
                                <span>
                                    If you require more information regarding specific progression routes, these are available on each course page under ‘university progression’, alternatively you can contact the Langford Collage Support team on <a href="mailto:info@onlinebusinessschool.com" target='_blank' className='underline text-blue-500'>info@onlinebusinessschool.com</a> for further advice and guidance.
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
};

export default ProgressionOptions;