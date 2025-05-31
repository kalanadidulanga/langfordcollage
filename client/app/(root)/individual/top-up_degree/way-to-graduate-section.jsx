"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function WayToGraduate() {

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    
    //     gsap.fromTo(
    //       ".way-left",
    //       { opacity: 0, x: -50 },
    //       { 
    //         opacity: 1, x: 0, duration: 1, ease: "power3.out",
    //         scrollTrigger: {
    //           trigger: ".way-section",
    //           start: "top 80%", 
    //           end: "bottom 20%",
    //           toggleActions: "play reverse play reverse", // Works when scrolling up and down
    //           once: false,
    //         }
    //       }
    //     );
    
    //     gsap.fromTo(
    //       ".way-right",
    //       { opacity: 0, x: 50 },
    //       { 
    //         opacity: 1, x: 0, duration: 1, ease: "power3.out",
    //         scrollTrigger: {
    //           trigger: ".way-section",
    //           start: "top 80%", 
    //           end: "bottom 20%",
    //           toggleActions: "play reverse play reverse",
    //           once: false,
    //         }
    //       }
    //     );
    
    //   }, []);

    return (
        <>
            <div className='w-full font-sans pb-20 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 way-section '>
                <div className='w-full flex items-start flex-col lg:h-full way-left'>
                    <div className={`w-full flex flex-col`}>
                        <span className='text-[8vw] lg:text-[3vw] capitalize'>
                        The most flexible and cost
                    </span>
                        <span className='text-[8vw] lg:text-[3vw] font-mono capitalize'>
                        effective way to Graduate
                    </span>
                    </div>

                    <div className='w-full bg-white pt-5 lg:pt-10 pb-8 text-[#2E2E27] flex flex-col'>
                        <div className='w-full flex flex-col gap-3 lg:pr-36'>
                            <span className='description2 text-[14px] lg:text-[16px] lg:description font-sans '>
                                Our degree pathways act as a direct equivalent to Year 1 and Year 2 of a bachelor’s degree, recognised by an OFQUAL awarding organisation, the pathway courses are accepted by many universities worldwide.
                                Once you complete your pathway, you’ll go to one of our nominated universities to finish Year 3 and obtain your full bachelor’s degree. Upon completion of our level 7 pathway courses, students progress onto the final module of an MBA programme.
                                Our pathways are the most flexible way to graduate! Being online with little restrictions, it’s possible to complete Year 1 and Year 2 while you work!
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex items-end justify-end w-full lg:w-[50%] h-[55vh] way-right'>
                    <img
                        src="/Images/graduate-man.png"
                        alt=""
                        className='h-full w-full object-cover object-top'
                    />
                </div>
            </div>
        </>
    )
};

export default WayToGraduate;