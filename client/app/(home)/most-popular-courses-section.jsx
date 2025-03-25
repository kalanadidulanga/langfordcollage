"use client";
import React, { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CourceCard } from '@/components/Cource-Card';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function MostPopular() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".course-left",
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".course-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          once: false,
        }
      }
    );

    gsap.fromTo(
      ".course-right",
      { opacity: 0, x: 50 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".course-section",
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
      <div className='w-full lg:pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 course-section'>
        <div className='w-full flex items-start flex-col lg:h-full'>
          <span className='text-[6vw] lg:text-[3vw] course-left font-bold font-sans'>
            Most Popular
          </span>
          <span className='text-[6vw] font-bold lg:text-[3vw] course-left font-mono'>
            Courses
          </span>

          <div className="w-full bg-white text-[#2E2E27] flex justify-center course-right">
            {/* Grid Layout for Large Screens */}
            <div className="hidden lg:grid bg-white pt-10 pb-8 grid-cols-1 lg:grid-cols-3 justify-start gap-8">
              <CourceCard />
              <CourceCard />
              <CourceCard />
            </div>

            {/* Swiper Slider for Small Screens */}
            <div className="lg:hidden w-full mt-3 pb-20">
              <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                // pagination={{ clickable: true }}
                className="pb-20"
              >
                <SwiperSlide>
                  <CourceCard />
                </SwiperSlide>
                <SwiperSlide>
                  <CourceCard />
                </SwiperSlide>
                <SwiperSlide>
                  <CourceCard />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default MostPopular;