"use client";
import React, { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function LearnAnywhere() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".learn-anyway-left",
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".learn-anyway-section",
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
          once: false,
        }
      }
    );

    gsap.fromTo(
      ".learn-anyway-right",
      { opacity: 0, x: 50 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".learn-anyway-section",
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
          once: false,
        }
      }
    );

  }, []);

  return (
    <>
      <div className='w-full lg:pb-20 pb-10 bg-white text-black px-[9vw] flex flex-col items-start justify-start gap-5 learn-anyway-section'>
        <div className='w-full flex items-start flex-col lg:h-full learn-anyway-left capitalize'>
          <div className="w-full lg:grid lg:grid-cols-2">
            <div className="w-full flex items-start flex-col lg:h-full">
              <span className="text-[6vw] lg:text-[4vw] font-sans font-bold capitalize">
                Learn anywhere,
              </span>
              <span className="text-[6vw] lg:text-[3.5vw] font-mono capitalize">
                Anytime, any device
              </span>
            </div>
            <div className="w-full h-full p-2">
              <div className="border-b-2 h-[70%] border-gray-400 relative">
              </div>
            </div>
          </div>

        </div>
        <div className='w-full flex items-start flex-col lg:flex-row lg:h-full learn-anyway-left capitalize gap-10'>
          <div className='w-full'>
            <div className='w-full bg-white text-[#2E2E27] flex flex-col'>
              <div className='w-full flex flex-col'>
                <span className='text-[18px] font-extralight'>

                  Our comprehensive web-based modules empower students to take control of their education—learning what they want, when they want, and how they want. These modules have been specifically crafted to deliver a significantly faster, more affordable, and engaging path to knowledge and qualification. Whether you're balancing work, family, or other commitments, Langford College ensures that education fits seamlessly into your lifestyle.
                  <br /><br />
                  Students benefit from a 24/7 networking platform, personalized dashboards to track progress, 1-2-1 online tutorials for individual guidance, interactive group webinars, and a library of pre-recorded webcasts for on-demand learning. Additionally, our dedicated academic support team is always just a click away, ready to assist and guide students through their learning journey.
                  <br /><br />
                  Langford College goes beyond traditional learning by fostering a collaborative and innovative environment where students can sharpen their professional skills, connect with peers and industry experts, and ultimately earn a globally recognized university qualification with confidence.

                  {/* Our web based modules allow students to learn what they want, when they want and how they want and have been designed to facilitate a much faster, more affordable and engaging way to learn. <br /> <br />With a 24/7 student networking platform, personal dashboards, 1-2-1 online tutorials, group webinars and a bank of pre-recorded group webcasts, the Langford College provides students with all the support that they need to succeed in developing their professional skill base and achieve a university qualification. */}
                </span>
              </div>
            </div>
          </div>
          <div className='flex items-end justify-end w-full lg:w-[60%] h-[62vh] hidden lg:block learn-anyway-right'>
            <img
              src="/Images/robo-girl.png"
              alt=""
              className='h-full w-full lg:w-[90%] object-cover'
            />
          </div>
        </div>



      </div>
    </>
  )
};

export default LearnAnywhere;