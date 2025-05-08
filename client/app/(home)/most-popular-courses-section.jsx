"use client";
import React, { useEffect, useState } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CourceCard } from '@/components/Cource-Card';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import axios from 'axios';

function MostPopular() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.fromTo(
  //     ".course-left",
  //     { opacity: 0, x: -50 },
  //     {
  //       opacity: 1, x: 0, duration: 1, ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: ".course-section",
  //         start: "top 80%",
  //         end: "bottom 20%",
  //         toggleActions: "play reverse play reverse",
  //         once: false,
  //       }
  //     }
  //   );

  //   gsap.fromTo(
  //     ".course-right",
  //     { opacity: 0, x: 50 },
  //     {
  //       opacity: 1, x: 0, duration: 1, ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: ".course-section",
  //         start: "top 80%",
  //         end: "bottom 20%",
  //         toggleActions: "play reverse play reverse",
  //         once: false,
  //       }
  //     }
  //   );

  // }, []);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {

    try {
      const res = await axios.get(`${BASE_URL}/api/getAllCources`);

      if (res?.data?.status) {
        setCourses(
          res.data.data.sort((a, b) => {
            const aPriority = a.listingPriority === "None" ? Infinity : Number(a.listingPriority);
            const bPriority = b.listingPriority === "None" ? Infinity : Number(b.listingPriority);

            return aPriority - bPriority;
          })
        );


      } else {
        setCourses([]);
      }
    } catch (error) {
      setCourses([]);
    }

  }

  return (
    <>
      {courses?.length > 0 && (
        <>
          <div className='w-full lg:pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
            <div className='w-full flex items-start flex-col lg:h-full'>
              <div className="w-full lg:grid lg:grid-cols-2">
                <div className="w-full flex items-start flex-col lg:h-full">
                  <span className="text-[6vw] lg:text-[4vw] font-sans font-bold leading-none">
                    Most Popular
                  </span>
                  <span className="text-[6vw] lg:text-[3.5vw] font-mono leading-[1.1]">
                    Courses
                  </span>
                </div>
                <div className="w-full h-full p-2">
                  <div className="border-b-2 h-[90%] border-gray-400 relative">
                  </div>
                </div>
              </div>

              <div className="w-full bg-white text-[#2E2E27] flex justify-center lg:justify-start">
                {/* Grid Layout for Large Screens */}
                <div className="hidden lg:grid bg-white pt-10 pb-8 grid-cols-1 lg:grid-cols-3 justify-start gap-8 w-full">

                  {courses?.slice(0, 3)?.map((course, index) => (
                    <CourceCard key={index} image={course?.image_path} title={course?.course_name} slug={course?.slug} />
                  ))}

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
                    {courses?.slice(0, 3)?.map((course, index) => (
                      <SwiperSlide>
                        <CourceCard key={index} image={course?.image_path} title={course?.course_name} slug={course?.slug} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
};

export default MostPopular;