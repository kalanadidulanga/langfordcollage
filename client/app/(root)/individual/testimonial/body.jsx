"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TestimonialCard } from '@/components/Testimonial-Card'

function Body() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
          ".testimonialView-left",
          { opacity: 0, x: -50 },
          { 
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: ".testimonialView-section",
              start: "top 80%", 
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
              once: false,
            }
          }
        );
    
        gsap.fromTo(
          ".testimonialView-right",
          { opacity: 0, x: 50 },
          { 
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: ".testimonialView-section",
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
            <div className='w-full lg:pb-10 pt-10 font-sans bg-white text-black px-[10vw] lg:pl-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 testimonialView-section'>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw] testimonialView-left'>
                        Latest Testimonials
                    </span>
                    <div className='w-full bg-white text-gray-500 flex justify-start testimonialView-left'>
                        <div className='bg-white pt-10 pb-8 flex flex-col justify-start items-start gap-8'>
                            <TestimonialCard />
                            <TestimonialCard />
                            <TestimonialCard />
                            <TestimonialCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body