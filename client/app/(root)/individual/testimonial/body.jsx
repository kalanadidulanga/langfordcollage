"use client";
import React, {useEffect, useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {TestimonialCard} from '@/components/Testimonial-Card'
import axios from "axios";
import {ArticleCard} from "@/components/Article-Card";

function Body() {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const [testimonials, setTestimonials] = useState([]);
    const [isClientLoading, setIsClientLoading] = useState(true);

    // useEffect(() => {
    //   gsap.registerPlugin(ScrollTrigger);

    //   gsap.fromTo(
    //     ".testimonialView-left",
    //     { opacity: 0, x: -50 },
    //     {
    //       opacity: 1, x: 0, duration: 1, ease: "power3.out",
    //       scrollTrigger: {
    //         trigger: ".testimonialView-section",
    //         start: "top 80%",
    //         end: "bottom 20%",
    //         toggleActions: "play reverse play reverse",
    //         once: false,
    //       }
    //     }
    //   );

    //   gsap.fromTo(
    //     ".testimonialView-right",
    //     { opacity: 0, x: 50 },
    //     {
    //       opacity: 1, x: 0, duration: 1, ease: "power3.out",
    //       scrollTrigger: {
    //         trigger: ".testimonialView-section",
    //         start: "top 80%",
    //         end: "bottom 20%",
    //         toggleActions: "play reverse play reverse",
    //         once: false,
    //       }
    //     }
    //   );

    // }, []);

    useEffect(() => {
        loadTestimonail();
    }, []);

    const loadTestimonail = async () => {

        try {
            const res = await axios.get(`${BASE_URL}/api/getAllTestimonials`);

            if (res?.data?.status) {
                setTestimonials(res.data.data);
                setIsClientLoading(false);
            } else {
                setTestimonials([]);
                setIsClientLoading(false);
            }
        } catch (error) {
            setTestimonials([]);
            setIsClientLoading(false);
        }

    }

    return (
        <>
            <div
                className='w-full lg:pb-10 pt-10 font-sans bg-white text-black px-[10vw] lg:pl-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 testimonialView-section '>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
          <span className='text-[9vw] lg:text-[4vw] testimonialView-left'>
            Latest Testimonials
          </span>
                    <div className='w-full bg-white text-gray-500 flex justify-start testimonialView-left'>
                        <div className='bg-white pt-10 pb-8 flex flex-col justify-start items-start gap-8 lg:w-[75%]'>
                            {isClientLoading ? (
                                <>
                                    <div
                                        className='w-full lg:min-w-[750px] lg:max-w-[750px] grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 shadow-xl animate-pulse'>
                                        <div className='w-full h-[40vh] object-cover rounded bg-gray-300'></div>
                                        <div className='flex h-full flex-col gap-3'>
                                            <div className='bg-gray-300 h-12'></div>
                                            <div
                                                className="text-[16px] bg-gray-300  line-clamp-2 lg:line-clamp-7 h-full"></div>
                                            <div
                                                className='flex items-start justify-start bg-gray-300 w-2/5 h-12'></div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {testimonials?.length > 0 ? (
                                        <>
                                            {testimonials?.map((item, index) => (
                                                <TestimonialCard key={index} image={item?.image_path}
                                                                 title={item?.title} descrption={item?.description}
                                                                 slug={item?.slug}/>
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            <div className="w-full col-span-3 flex justify-start items-center">
                                                <span
                                                    className="font-bold text-lg text-gray-400">No Testimonial Found</span>
                                            </div>
                                        </>
                                    )}
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