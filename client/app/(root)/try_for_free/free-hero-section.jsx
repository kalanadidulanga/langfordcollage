"use client";
import { useEffect } from "react";
import gsap from "gsap";

function FreeHero() {

    useEffect(() => {
        gsap.fromTo(
          ".fade-in",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
      }, []);

    return (
        <>
        <div className='w-[100%] font-sans px-5 lg:px-32 fade-in'>
            <div className='w-full h-[45vh] mt-[20vh] flex justify-center items-center flex-col gap-5 lg:pl-36'>
                <div className='w-full flex flex-col text-center lg:text-start fade-in'>
                    <span className='font-bold text-5xl md:text-[6vw]'>Try For Free</span>
                </div>
            </div>
        </div>
    </>
    )
}

export default FreeHero