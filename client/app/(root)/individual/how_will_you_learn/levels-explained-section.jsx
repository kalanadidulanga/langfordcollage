"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function LevelsExplained() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
          ".level-left",
          { opacity: 0, x: -50 },
          { 
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: ".level-section",
              start: "top 80%", 
              end: "bottom 20%",
              toggleActions: "play reverse play reverse", // Works when scrolling up and down
              once: false,
            }
          }
        );
    
        gsap.fromTo(
          ".level-right",
          { opacity: 0, x: 50 },
          { 
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: ".level-section",
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
            <div className='w-full font-sans pb-20 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 level-section capitalize'>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw] level-left'>
                        Levels explained
                    </span>

                    <div className='w-full bg-white pt-10 pb-10 text-[#2E2E27] flex flex-col px-10 gap-10'>
                        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-10'>
                            <div className='w-full bg-[#F7FAFF] flex flex-col items-start justify-start gap-3 p-5 level-left'>
                                <span className='text-[24px]'>Level 3</span>
                                <span className='text-[16px] text-[#2E2E27] font-extralight'>
                                    The Level 3 course is a 120-credit course, which is equivalent to 2 A levels. The course is made up of 6 modules and 6/12 written assignments. This course provides entry onto the first year of undergraduate degree course, or a level 4 course.
                                </span>
                            </div>
                            <div className='w-full bg-[#F7FAFF] flex flex-col items-start justify-start gap-3 p-5 level-right'>
                                <span className='text-[22px]'>Level 4</span>
                                <span className='text-[16px]] text-[#2E2E27] font-extralight'>
                                Level 4 is the equivalent to the first year of a bachelor’s degree programme. The Level 4 course is made up of 6/10 modules and 6/10 assignments, which are equivalent to 120 university credits.
                                </span>
                            </div>
                            <div className='w-full bg-[#F7FAFF] flex flex-col items-start justify-start gap-3 p-5 level-left'>
                                <span className='text-[22px]'>Level 5</span>
                                <span className='text-[16px] text-[#2E2E27] font-extralight'>
                                Level 5 is the equivalent to the second year of a bachelor’s degree programme. It is also equivalent to a HND diploma. The Level 5 course has 5/9/10 modules and 5/6/7 assignments, which also provide the student with 120 university credits upon completion.
                                </span>
                            </div>
                            <div className='w-full bg-[#F7FAFF] flex flex-col items-start justify-start gap-3 p-5 level-right'>
                                <span className='text-[22px]'>Level 6</span>
                                <span className='text-[16px] text-[#2E2E27] font-extralight'>
                                Upon completion of a Level 6 course, you will be eligible for admission onto a postgraduate business programme, including an MBA course. The Level 6 course is made up of 10 modules and 5 written assignments.
                                </span>
                            </div>
                        </div>
                        <div className='w-full bg-[#F7FAFF]  flex flex-col items-start justify-start gap-3 p-5 level-left'>
                                <span className='text-[22px]'>Level 7</span>
                                <span className='text-[16px] text-[#2E2E27] font-extralight'>
                                The Level 7 course carries 120 credits which gives entry onto the MBA top Up (one module or one module + dissertation). This can be completed by studying either online or on campus at a recognised UK or overseas university. Our level 7 is made up of 30 modules and 8 written assignments.
                                </span>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default LevelsExplained;