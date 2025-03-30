"use client";
import React, { useEffect, useState } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CourceCard } from '@/components/Cource-Card';
import "swiper/css";
import "swiper/css/pagination";
import axios from 'axios';

function CourseSection() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [courses, setCourses] = useState([]);

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

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {

    try {
      const res = await axios.post(`${BASE_URL}/api/serchCourseByLevel`, {
        course_level: "Level 4 & 5 - University first and second year courses"
      });

      if (res?.data?.status) {
        setCourses(res.data.data);
      } else {
        setCourses([]);
      }
    } catch (error) {
      setCourses([]);
    }

  }

  return (
    <>
      {courses?.length > 0 ? (
        <>
          <div className='w-full lg:pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 course-section'>
            <div className='w-full flex items-start flex-col lg:h-full'>
              <span className='text-[6vw] lg:text-[3vw] course-left font-bold font-sans'>
                Our Level 4 & 5
              </span>
              <span className='text-[6vw] font-bold lg:text-[3vw] course-left font-mono'>
                Courses
              </span>

              <div className="w-full bg-white text-[#2E2E27] flex justify-center lg:justify-start course-right">
                <div className="grid bg-white pt-10 pb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-start gap-8 w-full">

                  {courses?.map((course, index) => (
                    <CourceCard key={index} image={course?.image_path} title={course?.course_name} slug={course?.slug} />
                  ))}

                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='w-full lg:pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 course-section'>
            <div className='w-full flex items-start flex-col lg:h-full'>
              <span className='text-[6vw] lg:text-[3vw] course-left font-bold font-sans'>
                Our Level 4 & 5
              </span>
              <span className='text-[6vw] font-bold lg:text-[3vw] course-left font-mono'>
                Courses
              </span>

              <div className="w-full bg-white text-[#2E2E27] flex justify-center lg:justify-start course-right">
                <div className="grid bg-white pt-10 pb-8 grid-cols-1 lg:grid-cols-3 justify-start gap-8 w-full">
                  <span className='text-[20px]'>No course found</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
};

export default CourseSection;