"use client";
import {useEffect} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

function HowTopupDegreeWork() {

    // useEffect(() => {
    //   gsap.registerPlugin(ScrollTrigger);

    //   gsap.fromTo(
    //     ".howtopup-left",
    //     { opacity: 0, x: -50 },
    //     {
    //       opacity: 1, x: 0, duration: 1, ease: "power3.out",
    //       scrollTrigger: {
    //         trigger: ".howtopup-section",
    //         start: "top 80%",
    //         end: "bottom 20%",
    //         toggleActions: "play reverse play reverse", // Works when scrolling up and down
    //         once: false,
    //       }
    //     }
    //   );

    //   gsap.fromTo(
    //     ".howtopup-right",
    //     { opacity: 0, x: 50 },
    //     {
    //       opacity: 1, x: 0, duration: 1, ease: "power3.out",
    //       scrollTrigger: {
    //         trigger: ".howtopup-section",
    //         start: "top 80%",
    //         end: "bottom 20%",
    //         toggleActions: "play reverse play reverse",
    //         once: false,
    //       }
    //     }
    //   );

    // }, []);

    return (<>

        <div
            className='w-full font-sans pt-20 pb-20 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 way-section '>
            <div className='flex items-end justify-end w-full lg:w-[50%] h-[65vh] way-right'>
                <img
                    src="/Images/degree.jpg"
                    alt=""
                    className='h-full w-full object-cover object-top'
                />
            </div>
            <div className='w-full flex items-start flex-col lg:h-full way-left'>
                <div className={`w-full flex flex-col`}>
                        <span className='text-[8vw] lg:text-[3vw] capitalize'>
                        Advance Your Degree with Langford College
                    </span>
                    <span className='text-[8vw] lg:text-[3vw] font-mono capitalize'>
                        Fast-Track to Your Final Year or Master’s
                    </span>
                </div>

                <div className='w-full bg-white pt-3 lg:pt-5 pb-8 text-[#2E2E27] flex flex-col'>
                    <div className='w-full flex flex-col gap-3 lg:pr-36'>
                            <span className='description2 text-[14px] lg:text-[16px] lg:description font-sans '>
                                At Langford College, we specialize in bridging the gap between your current qualifications and the final stages of your degree journey. <br/> <br/> Whether you aim to enter directly into the third year of your bachelor’s programme or progress seamlessly into a master degree, Our OFQUAL-regulated pathways give you the accreditation and confidence universities need to admit you at the advanced stage.
                            </span>
                    </div>
                </div>
            </div>
        </div>

        {/*<div className={`w-full flex flex-col pt-20 pb-20 bg-white`}>*/}
        {/*    <div*/}
        {/*        className='w-full font-sans bg-white pb-5 text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 howtopup-section '>*/}
        {/*        <div className='flex items-start justify-start w-full lg:w-[60%] howtopup-left'>*/}
        {/*            <img src="/Images/degree.png" alt="" className='w-full h-[400px] md:h-[70vh] object-cover'/>*/}
        {/*        </div>*/}
        {/*        <div*/}
        {/*            className='w-full lg:h-[60vh] gap-5 capitalize lg:gap-0 flex items-start text-[7vw] lg:text-[3.5vw] flex-col howtopup-right'>*/}
        {/*  <span className="font-sans">*/}
        {/*    Complete A Langford College*/}
        {/*  </span>*/}
        {/*            <span className="font-mono">*/}
        {/*     course and university <br/> top up*/}
        {/*  </span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div*/}
        {/*        className='w-full font-sans bg-white pb-8 text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 howtopup-section '>*/}
        {/*        <div className='flex items-start justify-start w-full howtopup-left'>*/}
        {/*  <span className='description2 text-[14px] lg:text-[16px] lg:description'>*/}
        {/*    Academic courses offered by Langford College are approved by OFQUAL awarding bodies, and universities will generally accept the credits awarded to students. Students should make it clear to the university that the qualification is OFQUAL RQF validated at the stated level/credit value.*/}
        {/*  </span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div*/}
        {/*        className='w-full bg-white px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 howtopup-section '>*/}
        {/*        <div className='flex items-start justify-start w-full howtopup-left'>*/}
        {/*            <button className='btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6] '*/}
        {/*                    onClick={() => {*/}
        {/*                        window.location.href = "/try_for_free";*/}
        {/*                    }}>Try for free*/}
        {/*            </button>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </>)
};

export default HowTopupDegreeWork;