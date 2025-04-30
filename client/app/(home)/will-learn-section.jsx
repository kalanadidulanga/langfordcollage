"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function WillLearn() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".learn-left",
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".learn-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          once: false,
        }
      }
    );

    gsap.fromTo(
      ".learn-right",
      { opacity: 0, x: 50 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".learn-section",
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
      {/* Main Section */}
      <div className="w-full bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 learn-section">

        {/* Right Side - Text Content */}
        <div className="w-full flex lg:items-end justify-start flex-col lg:h-full learn-left">
          <div className="w-full flex items-start pb-5 flex-col lg:h-full">
            <div className="w-full grid grid-cols-2">
              <div className="w-full flex items-start flex-col lg:h-full">
                <span className="text-[6vw] lg:text-[4vw] font-sans font-bold capitalize">
                  How you will
                </span>
                <span className="text-[6vw] lg:text-[3.5vw] font-mono capitalize">
                  learn
                </span>
              </div>
              <div className="w-full h-full p-2">
                <div className="border-b-2 h-[70%] border-gray-400 relative">
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-white pt-10 pb-8 text-black flex lg:items-start justify-start">
            {/* Left Side - Image */}
            <div className="flex items-start justify-start w-full h-[40vh] hidden lg:block learn-left">
              <img
                src="/Images/work.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start lg:items-end justify-start w-full gap-5 capitalize">
              <div className="w-full flex items-start lg:items-end lg:text-[1.6vw] gap-6 lg:gap-9 flex-col">
                <span className="border-b-[4px] border-[#E2231A] inline leading-[1]">Learner journey</span>
                <span className="border-b-[4px] border-[#E2231A] inline leading-[1]">Assessment</span>
                <span className="border-b-[4px] border-[#E2231A] inline leading-[1]">Levels explained</span>
                <span className="border-b-[4px] border-[#E2231A] inline leading-[1]">Support</span>
                <span className="border-b-[4px] border-[#E2231A] inline leading-[1]">Taster module</span>
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
      <div className="w-full bg-white pt-5 lg:pt-10 pb-20 px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 learn-section">
        <div className="flex items-start justify-start w-full">
          <button className="btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6] learn-left capitalize"
            onClick={() => {
              window.location.replace("/individual/how_will_you_learn");
            }}
          >Find out more</button>
        </div>
      </div>
    </>
  );
}

export default WillLearn;
