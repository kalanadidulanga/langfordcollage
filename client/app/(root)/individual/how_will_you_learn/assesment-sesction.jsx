"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Assesment() {

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     gsap.fromTo(
    //       ".assessment-left",
    //       { opacity: 0, x: -50 },
    //       { 
    //         opacity: 1, x: 0, duration: 1, ease: "power3.out",
    //         scrollTrigger: {
    //           trigger: ".assessment-section",
    //           start: "top 80%", 
    //           end: "bottom 20%",
    //           toggleActions: "play reverse play reverse", // Works when scrolling up and down
    //           once: false,
    //         }
    //       }
    //     );

    //     gsap.fromTo(
    //       ".assessment-right",
    //       { opacity: 0, x: 50 },
    //       { 
    //         opacity: 1, x: 0, duration: 1, ease: "power3.out",
    //         scrollTrigger: {
    //           trigger: ".assessment-section",
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
            <div className='w-full font-sans bg-white pb-10 text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 assessment-section ' id="assessment">
                <div className='w-full flex items-start font-bold flex-col lg:h-full assessment-right'>
                    <div className="w-full lg:grid lg:grid-cols-2">
                        <div className="w-full flex items-start flex-col lg:h-full">
                            <span className="text-[9vw] lg:text-[4vw] font-sans font-bold">
                                Assessment
                            </span>
                        </div>
                        <div className="w-full h-full p-2">
                            <div className="border-b-2 h-[90%] border-gray-400 relative">
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-white pt-10 pb-8 text-[#2E2E27] flex gap-10'>
                        <div className='w-full flex flex-col gap-5'>
                            <span className='description2 text-[14px] lg:text-[16px] lg:description'>
                                Assessment at Langford College is a very straightforward process:
                            </span>
                            <div className='description2 text-[14px] lg:text-[16px] lg:description space-y-2'>
                                <span className='flex'>
                                    <li></li>
                                    <span>
                                        After you have completed an online module, you will have an online assessment to complete. This assessment contains 30 multiple-choice questions. You will have one hour to complete these questions, which are answered in sets of five, so you will have plenty of time to review and edit your answers. After an hour, the test will automatically time out.
                                    </span>
                                </span>
                                <span className='flex'>
                                    <li></li>
                                    <span>
                                        When the online modules have been successfully completed, you will then be able to take the final written assignments provided by Langford College that test your knowledge and understanding of the modules. After successful completion of these assignments, you will receive your diploma from the OFQUAL awarding organization.
                                    </span>
                                </span>
                                <span className='flex'>
                                    <li></li>
                                    <span>
                                        You will then be eligible to apply for progression onto a top up course through a recognised UK university on campus or by distance learning.
                                    </span>
                                </span>
                            </div>
                        </div>
                        {/* <div className='flex items-start justify-start w-full lg:w-[60%] h-[50vh]  hidden lg:block assessment-left'>
                            <img
                                src="/Images/assesment.svg"
                                alt=""
                                className='w-full h-full object-cover'
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Assesment;