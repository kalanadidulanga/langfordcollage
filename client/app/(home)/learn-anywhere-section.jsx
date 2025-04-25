"use client";
import React, { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function LearnAnywhere() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
          ".learn-anyway-left",
          { opacity: 0, x: -50 },
          {
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: ".learn-anyway-section",
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play reverse play reverse",
              once: false,
            }
          }
        );
    
        gsap.fromTo(
          ".learn-anyway-right",
          { opacity: 0, x: 50 },
          {
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: ".learn-anyway-section",
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play reverse play reverse",
              once: false,
            }
          }
        );
    
      }, []);

    return (
        <>
            <div className='w-full lg:pb-20 pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 learn-anyway-section'>
                <div className='w-full flex items-start flex-col lg:h-full learn-anyway-left'>
                    <span className='text-[6vw] lg:text-[3vw] font-bold font-sans capitalize'>
                        Learn anywhere,
                    </span>
                    <span className='text-[6vw] lg:text-[3vw] font-bold font-sans capitalize'>
                        anytime, from any
                    </span>
                    <span className='text-[6vw] lg:text-[3vw] font-mono capitalize'>
                        device
                    </span>

                    <div className='w-full bg-white pt-10 pb-8 text-[#2E2E27] flex flex-col'>
                        <div className='w-full flex flex-col gap-1'>
                            <span className='text-[18px] font-extralight'>
                            Our web based modules allow students to learn what they want, when they want and how they want and have been designed to facilitate a much faster, more affordable and engaging way to learn. With a 24/7 student networking platform, personal dashboards, 1-2-1 online tutorials, group webinars and a bank of pre-recorded group webcasts, the Langford Collage provides students with all the support that they need to succeed in developing their professional skill base and achieve a university qualification.
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex items-end justify-end w-full lg:w-[60%] h-[60vh] hidden lg:block learn-anyway-right'>
                    <img
                        src="/Images/robo-girl.png"
                        alt=""
                        className='h-full w-full lg:w-[90%] object-cover'
                    />
                </div>
            </div>
        </>
    )
};

export default LearnAnywhere;