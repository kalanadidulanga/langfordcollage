"use client";
import { useEffect } from "react";
import gsap from "gsap";

function HowWillYouLearnHero() {

    useEffect(() => {
        gsap.fromTo(
          ".fade-in",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
      }, []);

    return (
        <>
            <div className='w-[100%] px-5 lg:px-32 font-sans fade-in'>
                <div className='w-full h-[45vh] mb-[20vh] flex justify-center items-center flex-col gap-5 lg:pl-36'>
                    <div className='w-full flex flex-col text-center lg:text-start fade-in'>
                        <span className='font-bold text-5xl md:text-[6vw]'>How will</span>
                    </div>
                    <div className='w-full flex flex-col text-center lg:text-start lg:pl-28 fade-in'>
                        <span className='font-normal text-5xl md:text-[6vw] font-mono'>You Learn</span>
                    </div>
                </div>
                <div className='w-full  flex flex-col justify-center items-start gap-3 fade-in'>
                    <span className='text-[13px]'>
                    Whether you want to improve your <br /> skills, increase your employment <br /> opportunities or further your <br /> professional qualifications, Online <br /> Business School has a variety of <br /> distance learning courses to suit you.
                    </span>
                </div>
            </div>
        </>
    )
}

export default HowWillYouLearnHero;