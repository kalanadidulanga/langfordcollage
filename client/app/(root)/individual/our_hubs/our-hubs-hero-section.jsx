"use client";
import { useEffect } from "react";
import gsap from "gsap";


function OurHubsHero() {

    useEffect(() => {
        gsap.fromTo(
          ".fade-in",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
      }, []);

    return (
        <>
            <div className='w-[100%] px-5 lg:px-32 fade-in'>
                <div className='w-full h-[40vh] mb-[20vh] flex justify-center items-center flex-col gap-5 lg:pl-36'>
                    <div className='w-full flex flex-col text-center lg:text-start fade-in'>
                        <span className='font-bold text-5xl md:text-[6vw] font-sans'>Online Langford</span>
                    </div>
                    <div className='w-full flex flex-col text-center lg:text-start lg:pl-28 fade-in'>
                        <span className='font-normal text-5xl md:text-[6vw] title2 font-mono'>College Hubs</span>
                    </div>
                </div>
                {/* <div className='w-full  flex flex-col justify-center items-start gap-3 fade-in'>
                    <span className='text-[13px]'>
                        Access to our unique support hubs <br /> containing a range of specialist and <br /> focused resources to support and <br /> develop you alongside your learning. <br /> Free to all our students.
                    </span>
                </div> */}
            </div>
        </>
    )
}

export default OurHubsHero;