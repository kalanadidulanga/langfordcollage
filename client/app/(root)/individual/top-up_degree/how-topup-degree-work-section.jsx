"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HowTopupDegreeWork() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
          ".howtopup-left",
          { opacity: 0, x: -50 },
          { 
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: ".howtopup-section",
              start: "top 80%", 
              end: "bottom 20%",
              toggleActions: "play reverse play reverse", // Works when scrolling up and down
              once: false,
            }
          }
        );
    
        gsap.fromTo(
          ".howtopup-right",
          { opacity: 0, x: 50 },
          { 
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: ".howtopup-section",
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
            <div className='w-full font-sans bg-white pt-20 text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 howtopup-section'>
                <div className='flex items-start justify-start w-full lg:w-[60%] howtopup-left'>
                    <img src="/Images/degree.png" alt="" className='w-full h-[400px] md:h-[70vh] object-cover' />
                </div>
                <div className='w-full lg:h-[70vh] gap-5 lg:gap-0 flex items-start justify-between text-[6vw] lg:text-[4vw] font-medium flex-col howtopup-right'>
                    <span className="font-sans font-bold">
                    How top-up <br /> degrees work
                    </span>
                    <span className="font-mono font-bold">
                    Complete an OBS <br /> course and university <br /> top up from £6,000
                    </span>
                </div>
            </div>
            <div className='w-full font-sans bg-white pt-10 pb-8 text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 howtopup-section'>
                <div className='flex items-start justify-start w-full howtopup-left'>
                    <span className='text-[18px]'>
                    Academic courses offered by Langford Collage are approved by OFQUAL awarding bodies, and universities will generally accept the credits awarded to students. Students should make it clear to the university that the qualification is OFQUAL RQF validated at the stated level/credit value.
                    </span>
                </div>
            </div>
            <div className='w-full bg-white pb-20 px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 howtopup-section'>
                <div className='flex items-start justify-start w-full howtopup-left'>
                    <button className='btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6]'>Try for free</button>
                </div>
            </div>
        </>
    )
};

export default HowTopupDegreeWork;