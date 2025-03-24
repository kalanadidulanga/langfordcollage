"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AffordableStudy() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".affordable-left",
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".affordable-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          once: false,
        }
      }
    );

    gsap.fromTo(
      ".affordable-right",
      { opacity: 0, x: 50 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".affordable-section",
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
      <div className="w-full bg-white pt-20 text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 affordable-section">
        
        {/* Image - Left Side */}
        <div className="flex items-start justify-start w-full lg:w-[60%] affordable-left">
          <img src="/Images/read_girl.jpg" alt="" className="w-full h-[400px] md:h-[550px] object-cover" />
        </div>

        {/* Text - Right Side */}
        <div className="w-full flex items-start text-[6vw] lg:text-[4vw] font-medium flex-col affordable-right">
          <span>
            Affordable study <br />
            programmers with <br />
            exclusive online
          </span>
          <span>
            modules fast tracking <br />
            learners to a university <br />
            qualification
          </span>
        </div>

      </div>

      {/* Description Section */}
      <div className="w-full bg-white pt-10 pb-8 text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 affordable-section">
        <div className="flex items-start justify-start w-full affordable-right">
          <span className="text-[18px]">
            Whether you are looking to enhance your skills, improve your team or pursue a professional education, the Online Business School’s learning pathways can provide you with all you need. <br />
            The Online Business School delivers online university pathway programmers with full undergraduate and postgraduate diploma awards to learners from all corners of the world. Learners can fast track their way through to a UK university qualification on campus or by distance learning.
          </span>
        </div>
      </div>

      {/* Button Section */}
      <div className="w-full bg-white pb-20 px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 affordable-section">
        <div className="flex items-start justify-start w-full affordable-left">
          <button className="btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6]">View Courses</button>
        </div>
      </div>
    </>
  );
}

export default AffordableStudy;
