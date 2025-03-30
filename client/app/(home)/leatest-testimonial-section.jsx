"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TestimonialCard } from '@/components/Testimonial-Card';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import axios from "axios";

function LeatestTestimonial() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".testimonial-left",
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          once: false,
        }
      }
    );

    gsap.fromTo(
      ".testimonial-right",
      { opacity: 0, x: 50 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          once: false,
        }
      }
    );

  }, []);

  useEffect(() => {
    loadTestimonail();
  }, []);

  const loadTestimonail = async () => {

    try {
      const res = await axios.get(`${BASE_URL}/api/getAllTestimonials`);

      if (res?.data?.status) {
        setTestimonials(res.data.data);
      } else {
        setTestimonials([]);
      }
    } catch (error) {
      setTestimonials([]);
    }

  }


  return (
    <>
      {testimonials?.length > 0 && (
        <>
          <div className='w-full lg:pb-10 pt-10 font-sans bg-white text-black px-[10vw] lg:px-0 lg:pl-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 testimonial-section'>
            <div className='w-full flex items-start font-bold flex-col lg:h-full'>
              <span className='text-[6vw] lg:text-[3vw] testimonial-left'>
                Latest Testimonials
              </span>


              <div className="w-full bg-white text-gray-500 flex justify-center lg:justify-start testimonial-right">
                {/* Grid Layout for Large Screens */}
                <div className='bg-white hidden lg:block justify-start overflow-x-scroll gap-8 scrollbar-hide snap-x snap-mandatory'>
                  <div className='bg-white w-full pt-10 pb-8 flex flex-row justify-start overflow-x-scroll gap-8 scrollbar-hide snap-x snap-mandatory'>
                    {testimonials?.map((item, index) => (
                      <TestimonialCard key={index} image={item?.image_path} title={item?.title} descrption={item?.description} slug={item?.slug} />
                    ))}
                  </div>
                </div>

                {/* Swiper Slider for Small Screens */}
                <div className="lg:hidden w-full mt-3">
                  <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                  // pagination={{ clickable: true }}
                  >
                    {testimonials?.map((item, index) => (
                      <SwiperSlide>
                        <TestimonialCard key={index} image={item?.image_path} title={item?.title} descrption={item?.description} slug={item?.slug} />
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

export default LeatestTestimonial;