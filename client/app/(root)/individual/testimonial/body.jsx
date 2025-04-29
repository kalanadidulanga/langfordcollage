"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TestimonialCard } from '@/components/Testimonial-Card'
import axios from "axios";

function Body() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".testimonialView-left",
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonialView-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          once: false,
        }
      }
    );

    gsap.fromTo(
      ".testimonialView-right",
      { opacity: 0, x: 50 },
      {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonialView-section",
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
      <div className='w-full lg:pb-10 pt-10 font-sans bg-white text-black px-[10vw] lg:pl-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 testimonialView-section capitalize'>
        <div className='w-full flex items-start font-bold flex-col lg:h-full'>
          <span className='text-[6vw] lg:text-[3vw] testimonialView-left'>
            Latest Testimonials
          </span>
          <div className='w-full bg-white text-gray-500 flex justify-start testimonialView-left'>
            <div className='bg-white pt-10 pb-8 flex flex-col justify-start items-start gap-8 lg:w-[75%]'>
              {testimonials?.length > 0 ? (
                <>
                  {testimonials?.map((item, index) => (
                    <TestimonialCard  key={index} image={item?.image_path} title={item?.title} descrption={item?.description} slug={item?.slug}/>
                  ))}
                </>
              ) : (
                <>
                  <div className="w-full col-span-3 flex justify-start items-center">
                    <span className="font-bold text-lg text-gray-400">No Testimonial Found</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body