"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TestimonialCard } from '@/components/Testimonial-Card';

function LeatestTestimonial() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
          ".testimonial-left",
          { opacity: 0, x: -50 },
          {
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: ".testimonial-section",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
              once: false,
            }
          }
        );
    
        gsap.fromTo(
          ".testimonial-right",
          { opacity: 0, x: 50 },
          {
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: ".testimonial-section",
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
            <div className='w-full lg:pb-10 pt-10 font-sans bg-white text-black px-[10vw] lg:pl-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 testimonial-section'>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw] testimonial-left'>
                        Latest Testimonials
                    </span>
                    <div className='w-full bg-white text-gray-500 flex justify-center testimonial-right'>
                        <div className='bg-white pt-10 pb-8 flex flex-row justify-start overflow-x-scroll gap-8 scrollbar-hide snap-x snap-mandatory'>
                            <TestimonialCard/>
                            <TestimonialCard/>
                            <TestimonialCard/>
                            <TestimonialCard/>
                            <TestimonialCard/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default LeatestTestimonial;