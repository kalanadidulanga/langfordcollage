"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function WillLearn() {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.fromTo(
  //     ".learn-left",
  //     { opacity: 0, x: -50 },
  //     {
  //       opacity: 1, x: 0, duration: 1, ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: ".learn-section",
  //         start: "top 90%",
  //         end: "bottom 10%",
  //         toggleActions: "play reverse play reverse",
  //         once: false,
  //       }
  //     }
  //   );

  //   gsap.fromTo(
  //     ".learn-right",
  //     { opacity: 0, x: 50 },
  //     {
  //       opacity: 1, x: 0, duration: 1, ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: ".learn-section",
  //         start: "top 90%",
  //         end: "bottom 10%",
  //         toggleActions: "play reverse play reverse",
  //         once: false,
  //       }
  //     }
  //   );

  // }, []);

  return (
    <>
      {/* Main Section */}
      <div className="w-full bg-white text-black px-[10vw] lg:pb-10 flex flex-col lg:flex-row items-start justify-start lg:justify-center lg:gap-32 gap-5">

        {/* Right Side - Text Content */}
        <div className="w-full flex lg:items-end justify-start flex-col lg:h-full">
          <div className="w-full flex items-start pb-5 flex-col lg:h-full">
            <div className="w-full grid lg:grid-cols-2">
              <div className="w-full flex items-start flex-col lg:h-full capitalize">
                <span className="text-[9vw] lg:text-[4vw] font-sans leading-none">
                  How you will
                </span>
                <span className="text-[9vw] lg:text-[4vw] font-mono leading-[1.1]">
                  Learn
                </span>
              </div>
              <div className="w-full h-full p-2">
                <div className="border-b-2 h-[90%] border-gray-400 relative">
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-white pt-5 pb-8 text-black flex lg:items-start justify-start gap-10">
            {/* Left Side - Image */}
            <div className="w-[80%] flex items-start justify-start hidden lg:block h-[70vh]">
              <img
                src="/Images/english-book.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start lg:items-end justify-start w-full gap-5 ">
              <div className="w-full flex items-start lg:items-end lg:text-[1.2vw] gap-6 lg:gap-0 flex-col">
                <div className="flex flex-col gap-1 hover:bg-[#f7faff] p-2 cursor-pointer"
                  onClick={() => {
                    window.location.href = `/individual/how_will_you_learn?section=learner_journey`;
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-sans capitalize">Learner journey</span>
                    <span className="font-sans capitalize text-[20px]">{`->`}</span>
                  </div>
                  <span className="description2 text-[14px] lg:text-[18px] lg:description">
                    Start with a personalized learning plan, then engage in workshops, online lessons, and projects to build skills and confidence.
                  </span>
                </div>
                <div className="flex flex-col gap-1 hover:bg-[#f7faff] p-2 cursor-pointer"
                  onClick={() => {
                    window.location.href = `/individual/how_will_you_learn?section=assessment`;
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-sans capitalize">Assessment</span>
                    <span className="font-sans capitalize text-[20px]">{`->`}</span>
                  </div>
                  <span className="description2 text-[14px] lg:text-[18px] lg:description">
                    Low-stakes quizzes and assignments track progress; formal assessments and feedback ensure readiness to advance.
                  </span>
                </div>
                <div className="flex flex-col gap-1 hover:bg-[#f7faff] p-2 cursor-pointer"
                  onClick={() => {
                    window.location.href = `/individual/how_will_you_learn?section=levels_explained`;
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-sans capitalize">Levels explained</span>
                    <span className="font-sans capitalize text-[20px]">{`->`}</span>
                  </div>
                  <span className="description2 text-[14px] lg:text-[18px] lg:description">
                    Five levels from Foundation to Advanced map your study, achievements, and mastery at each stage.
                  </span>
                </div>
                <div className="flex flex-col gap-1 hover:bg-[#f7faff] p-2 cursor-pointer"
                  onClick={() => {
                    window.location.href = `/individual/how_will_you_learn?section=support`;
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-sans capitalize">Support</span>
                    <span className="font-sans capitalize text-[20px]">{`->`}</span>
                  </div>
                  <span className="description2 text-[14px] lg:text-[18px] lg:description">
                    Dedicated tutors offer one-to-one mentoring, weekly study groups, virtual office hours, and 24/7 online resources for success.
                  </span>
                </div>
                <div className="flex flex-col gap-1 hover:bg-[#f7faff] p-2 cursor-pointer"
                  onClick={() => {
                    window.location.href = `/individual/how_will_you_learn`;
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-sans capitalize">Taster module</span>
                    <span className="font-sans capitalize text-[20px]">{`->`}</span>
                  </div>
                  <span className="description2 text-[14px] lg:text-[18px] lg:description">
                    Try our free Taster Module: sample a lesson, meet your instructor, and experience our teaching style before committing.
                  </span>
                </div>
              </div>

              {/* Image for medium screens */}
              <div className="flex items-start justify-start w-[100%] h-[35vh] hidden lg:hidden md:block">
                <img
                  src="/Images/work.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Button Section */}
      {/* <div className="w-full bg-white pt-5 lg:pt-10 pb-[13vh] px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 learn-section">
        <div className="flex items-start justify-start w-full">
          <button className="btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6] learn-left "
            onClick={() => {
              window.location.replace("/individual/how_will_you_learn");
            }}
          >Find out more</button>
        </div>
      </div> */}
    </>
  );
}

export default WillLearn;
