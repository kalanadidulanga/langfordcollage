"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function LearnerJourney() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
          ".journy-left",
          { opacity: 0, x: -50 },
          { 
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: ".journy-section",
              start: "top 80%", 
              end: "bottom 20%",
              toggleActions: "play reverse play reverse", // Works when scrolling up and down
              once: false,
            }
          }
        );
    
        gsap.fromTo(
          ".journy-right",
          { opacity: 0, x: 50 },
          { 
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: ".journy-section",
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
            <div className='w-full pb-20 pt-20 font-sans bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 journy-section capitalize'>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw] journy-left'>
                        Learner journey
                    </span>

                    <div className='w-full bg-white pt-10 pb-8 text-[#2E2E27] flex flex-col journy-left'>
                        <div className='w-full flex flex-col gap-1'>
                            <span className='text-[16px] font-extralight'>
                                Our online business management, hotel and hospitality, and computing courses will help you obtain a diploma, which is recognised by employers and awarded by OFQUAL, the UK government higher education regulating body. <br />
                                These diplomas can then be used as progression onto completion of a full undergraduate or postgraduate degree course, at an accredited UK or overseas university.
                            </span>
                        </div>
                    </div>
                    <div className='w-full bg-white text-[16px] font-extralight text-[#2E2E27] pb-10 pl-4 journy-left'>
                        <li>Choose a course</li>
                        <li>Study the course modules</li>
                        <li>Complete online multiple choice tests and written assignments</li>
                        <li>Receive your certificate and university credits</li>
                        <li>Top up your qualifications and earn a BA degree or MBA</li>
                    </div>
                    <div className='w-full bg-white pb-8 text-[#2E2E27] flex flex-col journy-left'>
                        <div className='w-full flex flex-col gap-1'>
                            <span className='text-[16px] font-extralight'>
                                Your degree or MBA will be awarded to you by the university you complete your final year with. We currently partner with UK universities, who accept the OFQUAL credits awarded from studying our courses.
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex items-start justify-start w-full lg:w-[50%] h-[70vh] journy-right'>
                    <img
                        src="/Images/learner-journey.svg"
                        alt=""
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
        </>
    )
};

export default LearnerJourney;