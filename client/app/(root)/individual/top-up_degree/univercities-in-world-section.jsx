"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function UnivercitiesInWorld() {

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    
    //     gsap.fromTo(
    //       ".uni-left",
    //       { opacity: 0, x: -50 },
    //       { 
    //         opacity: 1, x: 0, duration: 1, ease: "power3.out",
    //         scrollTrigger: {
    //           trigger: ".uni-section",
    //           start: "top 80%", 
    //           end: "bottom 20%",
    //           toggleActions: "play reverse play reverse", // Works when scrolling up and down
    //           once: false,
    //         }
    //       }
    //     );
    
    //     gsap.fromTo(
    //       ".uni-right",
    //       { opacity: 0, x: 50 },
    //       { 
    //         opacity: 1, x: 0, duration: 1, ease: "power3.out",
    //         scrollTrigger: {
    //           trigger: ".uni-section",
    //           start: "top 80%", 
    //           end: "bottom 20%",
    //           toggleActions: "play reverse play reverse",
    //           once: false,
    //         }
    //       }
    //     );

    //     gsap.fromTo(
    //         ".uni-left1",
    //         { opacity: 0, x: -50 },
    //         { 
    //           opacity: 1, x: 0, duration: 1, ease: "power3.out",
    //           scrollTrigger: {
    //             trigger: ".uni-section1",
    //             start: "top 80%", 
    //             end: "bottom 20%",
    //             toggleActions: "play reverse play reverse", // Works when scrolling up and down
    //             once: false,
    //           }
    //         }
    //       );
    
    //   }, []);

    return (
        <>
            <div className='w-full font-sans bg-white text-black px-[9vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 uni-section '>
                <div className='w-full flex items-start flex-col lg:h-full uni-left'>
                    <span className='text-[8vw] lg:text-[3vw] capitalize'>
                        Study at some of the best
                    </span>
                    <span className='text-[8vw] lg:text-[3vw] font-mono capitalize'>
                        Universities in the world!
                    </span>

                    <div className='w-full bg-white pt-5 lg:pt-10 pb-8 text-[#2E2E27] flex flex-col'>
                        <div className='w-full flex flex-col gap-1'>
                            <span className='description2 text-[14px] lg:text-[16px] lg:description'>
                                On completion of an OFQUAL regulated programme via Langford College, students can progress onto a range of Universities, these include:
                            </span>
                        </div>
                    </div>
                    <div className='w-full bg-white description2 text-[14px] lg:text-[16px] lg:description text-[#2E2E27] lg:pb-16 pb-5'>
                        <li>Anglia Ruskin University</li>
                        <li>Coventry University</li>
                        <li>University of Derby</li>
                        <li>University of Central Lancashire</li>
                    </div>
                </div>

                <div className='flex items-end justify-end w-full lg:w-[50%] h-[55vh] pb-10 uni-right'>
                    <img
                        src="/Images/univercity.jpg"
                        alt=""
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
            <div className='flex pb-20 font-sans flex-col bg-white text-[#2E2E27] description2 text-[14px] lg:text-[16px] lg:description px-[9vw] gap-3 uni-section1 '>
                <span className="uni-left1">
                    Langford College can provide students with the requisite OFQUAL documentation and transcript. Alternatively, students can visit the OFQUAL website <a href="https://register.ofqual.gov.uk/" className='underline cursor-pointer text-blue-500' target='_blank'>https://register.ofqual.gov.uk/</a> to confirm the qualification. Each university will consider an application on its merits subject to their own specific entry requirements.
                </span>
                <span className="uni-left1">
                    Graduating Langford College students can progress onto a university programme either to join at undergraduate entry level, usually on completion of a level 3 Programme, or onto a “top-up” degree, depending on the level of their completed OFQUAL programme. These level equivalencies can be viewed on our ‘Study Levels Explained‘ page. Generally, level 3 is undergraduate entry, level 4 first year degree, level 5 second year degree, level 6 graduate level and level 7 postgraduate level.
                </span>
                <span className="uni-left1">
                    University top-up courses require you to have a qualification in a relevant subject. Your chosen course should be closely tied to your previous qualification. However, it does not have to be the same subject. In many cases, if you have studied your level 3/4/5/6 or 7 qualifications in English, an IELTS may not be required. There is a wide range of flexibility, allowing our students to have a plethora of career or completion prospects upon graduation from Langford College courses. Universities will generally look at your broader experiences and motivations as well as formal qualifications.
                </span>
            </div>
        </>
    )
};

export default UnivercitiesInWorld;