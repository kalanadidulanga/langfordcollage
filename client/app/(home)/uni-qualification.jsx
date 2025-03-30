"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FastTrackingSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".fast-tracking-left",
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".fast-tracking-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse", // Works when scrolling up and down
          once: false,
        }
      }
    );

    gsap.fromTo(
      ".fast-tracking-right",
      { opacity: 0, x: 50 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".fast-tracking-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          once: false,
        }
      }
    );

  }, []);

  return (
    <div className="w-full pt-16 pb-14 bg-white text-black px-[10vw] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between lg:gap-32 gap-5 fast-tracking-section">
      {/* Left Side - Text Content */}
      <div className="flex items-start text-3xl md:text-[3.6vw] justify-start flex-col fast-tracking-left gap-3">
        <span className="font-bold font-sans capitalize">Fast tracking learners to a</span>
        <span className="font-mono font-semibold capitalize">University qualification</span>
      </div>

      {/* Right Side - List Items */}
      <div className="flex items-start lg:text-[1.6vw] gap-6 font-bold flex-col fast-tracking-right">
        <span className="border-b-[4px] border-[#E2231A] inline-block leading-[1] cursor-pointer hover:text-[#E2231A]"
          onClick={() => {
            window.location.href = "/igsce-and-short-courses";
          }}
        >
          IGCSE & short courses
        </span>
        <span className="border-b-[4px] border-[#E2231A] inline-block leading-[1] cursor-pointer hover:text-[#E2231A]"
          onClick={() => {
            window.location.href = "/level-3-a-level-university-entry-courses";
          }}
        >
          A Level university entry
        </span>
        <span className="border-b-[4px] border-[#E2231A] inline-block leading-[1] cursor-pointer hover:text-[#E2231A]"
          onClick={() => {
            window.location.href = "/university-first-and-second-year";
          }}
        >
          University 1st & 2nd year
        </span>
        <span className="border-b-[4px] border-[#E2231A] inline-block leading-[1] cursor-pointer hover:text-[#E2231A]"
          onClick={() => {
            window.location.href = "/level-6-courses";
          }}
        >
          Graduate Level
        </span>
        <span className="border-b-[4px] border-[#E2231A] inline-block leading-[1] cursor-pointer hover:text-[#E2231A]"
          onClick={() => {
            window.location.href = "/level-7-mba-advance-entry";
          }}
        >
          Masters/MBS
        </span>
      </div>
    </div>
  );
}
