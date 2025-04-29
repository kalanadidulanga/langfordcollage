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
        <span className="font-bold font-sans capitalize">Why Langford </span>
        <span className="font-mono capitalize">College?</span>
        {/* <button className="btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6] text-white mt-8"
          onClick={() => {
            window.location.href = "/individual/how_will_you_learn";
          }}
        >Your Journey</button> */}
      </div>

      {/* Right Side - List Items */}
      <div className="flex items-start lg:text-[1.6vw] gap-6 font-bold flex-col fast-tracking-right">
        <div className="flex">
          <li></li>
          <span className="hover:underline">Globally Recognised UK Diplomas & Degrees</span>
        </div>
        <div className="flex">
          <li></li>
          <span className="hover:underline">Progress to Top UK Universities</span>
        </div>
        <div className="flex">
          <li></li>
          <span className="hover:underline">Fully Online with Personal Tutor Support</span>
        </div>
        <div className="flex">
          <li></li>
          <span className="hover:underline">Ofqual-Regulated, Qualifi-Accredited Programmes</span>
        </div>
        <div className="flex">
          <li></li>
          <span className="hover:underline">Start Anytime. Study at Your Pace</span>
        </div>
      </div>
    </div>
  );
}
