"use client";
import { useEffect } from "react";
import gsap from "gsap";


function IndividualHero() {

    useEffect(() => {
        gsap.fromTo(
          ".fade-in",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
      }, []);

    return (
        <>
            <div className='w-[100%] font-sans px-5 lg:px-32 fade-in '>
                <div className='w-full h-[45vh] mb-[20vh] flex justify-center items-center flex-col gap-5 lg:pl-36 capitalize'>
                    <div className='w-full flex flex-col text-center lg:text-start fade-in'>
                        <span className='font-sans text-5xl md:text-[6vw]'>How Langford College</span>
                    </div>
                    <div className='w-full flex flex-col text-center lg:text-start lg:pl-28 fade-in'>
                        <span className='text-5xl md:text-[6vw] font-mono'>Degrees Work</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndividualHero;