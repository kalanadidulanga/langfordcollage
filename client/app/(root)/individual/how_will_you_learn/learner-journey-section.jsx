"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function LearnerJourney() {

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     gsap.fromTo(
    //       ".journy-left",
    //       { opacity: 0, x: -50 },
    //       { 
    //         opacity: 1, x: 0, duration: 1, ease: "power3.out",
    //         scrollTrigger: {
    //           trigger: ".journy-section",
    //           start: "top 80%", 
    //           end: "bottom 20%",
    //           toggleActions: "play reverse play reverse", // Works when scrolling up and down
    //           once: false,
    //         }
    //       }
    //     );

    //     gsap.fromTo(
    //       ".journy-right",
    //       { opacity: 0, x: 50 },
    //       { 
    //         opacity: 1, x: 0, duration: 1, ease: "power3.out",
    //         scrollTrigger: {
    //           trigger: ".journy-section",
    //           start: "top 80%", 
    //           end: "bottom 20%",
    //           toggleActions: "play reverse play reverse",
    //           once: false,
    //         }
    //       }
    //     );

    //   }, []);

    return (
        <>
            <div className='w-full pb-10 pt-10 font-sans bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 journy-section ' id="learner_journey">
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <div className="w-full lg:grid lg:grid-cols-2">
                        <div className="w-full flex items-start flex-col lg:h-full">
                            <span className="text-[9vw] lg:text-[4vw] font-sans font-bold capitalize">
                                Learner journey
                            </span>
                        </div>
                        <div className="w-full h-full p-2">
                            <div className="border-b-2 h-[90%] border-gray-400 relative">
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex gap-10 pt-10 pb-8">
                        <div className="flex flex-col">
                            <div className='w-full bg-white text-[#2E2E27] flex flex-col journy-left'>
                                <div className='w-full flex flex-col gap-1'>
                                    <span className='description2 text-[14px] lg:text-[16px] lg:description'>
                                        Our online business management, hotel and hospitality, and computing courses will help you obtain a diploma, which is recognised by employers and awarded by OFQUAL, the UK government higher education regulating body. <br />
                                        These diplomas can then be used as progression onto completion of a full undergraduate or postgraduate degree course, at an accredited UK or overseas university.
                                    </span>
                                </div>
                            </div>
                            <div className='w-full bg-white mt-2 lg:mt-0 description2 text-[14px] lg:text-[16px] lg:description text-[#2E2E27] pb-5 lg:pb-10 pl-4 journy-left'>
                                <li>Choose a course</li>
                                <li>Study the course modules</li>
                                <li>Complete online multiple choice tests and written assignments</li>
                                <li>Receive your certificate and university credits</li>
                                <li>Top up your qualifications and earn a BA degree or MBA</li>
                            </div>
                            <div className='w-full bg-white text-[#2E2E27] flex flex-col journy-left'>
                                <div className='w-full flex flex-col gap-1'>
                                    <span className='description2 text-[14px] lg:text-[16px] lg:description'>
                                        Your degree or MBA will be awarded to you by the university you complete your final year with. We currently partner with UK universities, who accept the OFQUAL credits awarded from studying our courses.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-start justify-start w-full lg:w-[50%] h-[50vh] journy-right hidden lg:block'>
                            <img
                                src="/Images/learner-journey.svg"
                                alt=""
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
};

export default LearnerJourney;