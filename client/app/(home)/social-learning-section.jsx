"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SocialLearning() {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.fromTo(
  //     ".social-left",
  //     { opacity: 0, x: -50 },
  //     {
  //       opacity: 1, x: 0, duration: 1, ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: ".social-section",
  //         start: "top 80%",
  //         end: "bottom 20%",
  //         toggleActions: "play reverse play reverse",
  //         once: false,
  //       }
  //     }
  //   );

  //   gsap.fromTo(
  //     ".social-right",
  //     { opacity: 0, x: 50 },
  //     {
  //       opacity: 1, x: 0, duration: 1, ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: ".social-section",
  //         start: "top 80%",
  //         end: "bottom 20%",
  //         toggleActions: "play reverse play reverse",
  //         once: false,
  //       }
  //     }
  //   );

  // }, []);

  return (
    <>
      {/* Main Section */}
      <div className="w-full lg:h-screen lg:pb-10 lg:pt-10 pt-10 bg-white text-[#2e2e27] px-[9vw] flex flex-col items-start justify-start gap-5">

        <div className="w-full flex items-center justify-center pb-5 flex-col lg:h-full">
          <div className="w-full lg:grid lg:grid-cols-2">
            <div className="w-full flex items-start flex-col lg:h-full">
              <span className="text-[6vw] lg:text-[4vw] font-sans font-bold leading-none">
              A Unique Social
              </span>
              <span className="text-[6vw] lg:text-[4vw] font-mono leading-[1.1]">
              Learning Journey
              </span>
            </div>
            <div className="w-full h-full p-2">
              <div className="border-b-2 h-[90%] border-gray-400 relative">
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-start flex-col lg:flex-row lg:h-full social-left gap-10">
          <div className="w-full">
            <div className="w-full bg-white pb-5 text-[#2e2e27] flex flex-col">
              <div className="w-full flex flex-col gap-3">
                <span className="text-[16px]">
                  Online... Anytime... On any device...
                </span>
                <span className="text-[16px]">
                  The 100% online undergraduate and postgraduate diploma courses at Langford College provide students an affordable pathway to earning an undergraduate or postgraduate degree from a choice of respected UK universities.
                </span>
                <span className="text-[16px]">
                  Whether you pursue a qualification in hotel and hospitality, computing, or business management, the courses offered through Langford College will allow you the option to continue your education and pursue a top up to an undergraduate degree or MBA through one of our partner universities.
                </span>
              </div>
            </div>

            {/* List Section */}
            <div className="w-full bg-white text-[16px] text-[#2E2E27] pb-16">
              <li>University pathway programmes</li>
              <li>Professional body membership included</li>
              <li>Free professional development resources</li>
              <li>24/7 connection, anytime, anywhere, any device</li>
              <li>Tutor and mentor support structure</li>
              <li>Flexible payment options</li>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="grid items-start justify-start w-full lg:w-[60%] h-[50vh] hidden lg:block">
            <img
              src="/Images/work-girl.jpg"
              alt="social learning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </>
  );
}

export default SocialLearning;
