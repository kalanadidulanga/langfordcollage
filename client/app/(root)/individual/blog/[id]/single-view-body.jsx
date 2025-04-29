"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SingleViewBody({data}) {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            ".blog-view-left",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".blog-view-section",
                    start: "top 80%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".blog-view-left1",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".blog-view-section1",
                    start: "top 80%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

    }, []);

    return (
        <>
            <div className='w-full font-sans flex flex-col gap-10 pt-10 pb-20 bg-white text-black capitalize'>
                <div className='w-full bg-white pt-20 px-[10vw] text-black flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 blog-view-section'>
                    <div className='flex items-start justify-start w-full lg:w-[60%] blog-view-left'>
                        <img src={data?.image_path || "/Images/degree.png"} alt="" className='w-full h-[400px] md:h-[65vh] object-cover' />
                    </div>
                    <div className='w-full lg:h-[70vh] gap-5 lg:gap-0 flex items-start justify-between text-[6vw] lg:text-[4vw] font-medium flex-col blog-view-right'>
                        <span className="font-bold">
                            {data?.title ? data?.title : "N/A"}
                        </span>
                    </div>
                </div>
                <div className='w-full bg-[#F7FAFF] px-[10vw] flex flex-col gap-10 p-10'>
                    <div className='w-full flex flex-col gap-5 blog-view-section1'>
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

export default SingleViewBody