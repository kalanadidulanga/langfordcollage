"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ViewBody({ data }) {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            ".testi-left",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".testi-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".testi-left1",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".testi-section1",
                    start: "top 80%",
                    end: "bottom 20%",
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".testi-right",
            { opacity: 0, x: 50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".testi-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    once: false,
                }
            }
        );

    }, []);

    return (
        <>
            <div className='w-full font-sans lg:pb-20 pt-20 bg-white text-black flex flex-col gap-10'>
                <div className='w-full grid grid-cols-1 lg:grid-cols-2 px-[10vw] items-start font-bold lg:h-full testi-section'>
                    <img src={data?.image_path || "/Images/user.png"} alt="user" className='h-[400px] object-contain testi-left' />
                    <div className='w-full h-full flex items-center testi-right'>
                        <span className='text-[6vw] lg:text-[3.4vw]'>
                            {data?.title ? data?.title : "N/A"}
                        </span>
                    </div>
                </div>
                <div className='w-full bg-[#F7FAFF] p-10 flex flex-col justify-center items-center px-[15vw] testi-section1'>
                    <div className='w-full text-[18px] gap-5 flex flex-col testi-left1'>
                        <div
                            className="text-[18px] text-[#2E2E27] font-light h-full w-full"
                            dangerouslySetInnerHTML={{ __html: data?.description ? data?.description : "" }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewBody