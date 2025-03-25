"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SocialLearning() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".social-left",
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".social-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          once: false,
        }
      }
    );

    gsap.fromTo(
      ".social-right",
      { opacity: 0, x: 50 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".social-section",
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
      <div className="w-full lg:pb-20 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 social-section">
        
        {/* Left Side - Text Content */}
        <div className="w-full flex items-start font-bold flex-col lg:h-full social-left">
          <span className="text-[6vw] lg:text-[3vw] font-sans font-bold">
            A social learning
          </span>
          <span className="text-[6vw] lg:text-[3vw] font-mono font-bold">
            experience like no other
          </span>

          <div className="w-full bg-white pt-10 pb-8 text-[#2E2E27] flex flex-col">
            <div className="w-full flex flex-col gap-1">
              <span className="text-[18px] font-extralight">
                Online... Anytime... On any device...
              </span>
              <span className="text-[18px] font-extralight">
                The 100% online undergraduate and postgraduate diploma courses at Online Business School provide students an affordable pathway to earning an undergraduate or postgraduate degree from a choice of respected UK universities.
              </span>
              <span className="text-[18px] font-extralight">
                Whether you pursue a qualification in hotel and hospitality, computing, or business management, the courses offered through Online Business School will allow you the option to continue your education and pursue a top up to an undergraduate degree or MBA through one of our partner universities.
              </span>
            </div>
          </div>

          {/* List Section */}
          <div className="w-full bg-white text-lg font-extralight text-[#2E2E27] pb-16">
            <li>University pathway programmes</li>
            <li>Professional body membership included</li>
            <li>Free professional development resources</li>
            <li>24/7 connection, anytime, anywhere, any device</li>
            <li>Tutor and mentor support structure</li>
            <li>Flexible payment options</li>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex items-start justify-start w-full lg:w-[60%] h-[90vh] hidden lg:block social-right">
          <img
            src="/Images/work-girl.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </>
  );
}

export default SocialLearning;
