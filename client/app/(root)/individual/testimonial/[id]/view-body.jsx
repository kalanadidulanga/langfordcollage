"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ViewBody() {

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
              toggleActions: "play reverse play reverse",
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
                toggleActions: "play reverse play reverse",
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
              toggleActions: "play reverse play reverse",
              once: false,
            }
          }
        );
    
      }, []);

    return (
        <>
            <div className='w-full font-sans lg:pb-20 pt-20 bg-white text-black flex flex-col gap-10'>
                <div className='w-full grid grid-cols-1 lg:grid-cols-2 px-[10vw] items-start font-bold lg:h-full testi-section'>
                    <img src="/Images/user.png" alt="user" className='h-[400px] object-contain testi-left' />
                    <div className='w-full h-full flex items-center testi-right'>
                        <span className='text-[6vw] lg:text-[3.4vw]'>
                            Monde Mubalu
                        </span>
                    </div>
                </div>
                <div className='w-full bg-[#F7FAFF] p-10 flex flex-col justify-center items-center px-[15vw] testi-section1'>
                    <div className='w-full text-[18px] gap-5 flex flex-col testi-left1'>
                        <span>
                            “OBS gave me an opportunity to pursue my studies, and at the same time accommodate my busy schedule as a working mum.”
                        </span>
                        <span className='font-bold'>
                            Monde studied our Level 4 & 5 Health and Social Care Diploma at OBS. Here’s what she had to say about her experience!
                        </span>
                        <span className='font-bold'>
                            Why did you choose to study with Online Business School?
                        </span>
                        <span>
                            OBS gave me an opportunity to pursue my studies, and at the same time accommodate my busy schedule as a working mum.
                        </span>
                        <span className='font-bold'>
                            How would you describe your experience of studying with Online Business School?
                        </span>
                        <span>
                            My experience with OBS is the need to want to learn more and continue to improve myself.
                        </span>
                        <span className='font-bold'>
                            What did you like the most about the course with Online Business School?
                        </span>
                        <span>
                            What I liked the most was the support I got throughout the course.
                        </span>
                        <span className='font-bold'>
                            Do you have any advice for current or prospective students?
                        </span>
                        <span>
                            I would like to advise all future students interested in studying with OBS to never give up no matter the challenges they face.
                        </span>
                        <span className='font-bold'>
                            What are your plans now?
                        </span>
                        <span>
                            I now plan to do a top up degree.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewBody