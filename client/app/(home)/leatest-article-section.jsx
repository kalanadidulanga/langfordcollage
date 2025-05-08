"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArticleCard } from '@/components/Article-Card';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import axios from "axios";

function LeatestArticle() {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const [article, setArticle] = useState([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            ".article-left",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".article-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".article-right",
            { opacity: 0, x: 50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".article-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

    }, []);

    useEffect(() => {
        loadBlog();
    }, []);

    const loadBlog = async () => {

        try {
            const res = await axios.get(`${BASE_URL}/api/getAllBlogs`);

            if (res?.data?.status) {
                setArticle(res.data.data);
            } else {
                setArticle([]);
            }
        } catch (error) {
            setArticle([]);
        }

    }

    return (
        <>
            {article?.length > 0 && (
                <>
                    <div className='w-full lg:pb-10 pt-10 lg:pt-0 font-sans bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 article-section'>
                        <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                            <div className="w-full lg:grid lg:grid-cols-2">
                                <div className="w-full flex items-start flex-col lg:h-full">
                                    <span className="text-[6vw] lg:text-[4vw] font-sans font-bold ">
                                        Latest articles
                                    </span>
                                </div>
                                <div className="w-full h-full p-2">
                                    <div className="border-b-2 h-[70%] border-gray-400 relative">
                                    </div>
                                </div>
                            </div>

                            <div className="w-full bg-white text-gray-500 flex justify-center lg:justify-start article-right">
                                {/* Grid Layout for Large Screens */}
                                <div className="hidden lg:grid bg-white pt-10 pb-8 grid-cols-1 lg:grid-cols-3 justify-start gap-8">
                                    {article?.slice(0, 3)?.map((item, index) => (
                                        <ArticleCard
                                            key={index}
                                            image={item?.image_path || "/Images/article.png"}
                                            title={item?.title}
                                            description={item?.description}
                                            slug={item?.slug}
                                            action={false}
                                        />
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
                                        {article?.slice(0, 3)?.map((item, index) => (
                                            <SwiperSlide>
                                                <ArticleCard
                                                    key={index}
                                                    image={item?.image_path || "/Images/article.png"}
                                                    title={item?.title}
                                                    description={item?.description}
                                                    slug={item?.slug}
                                                    action={false}
                                                />
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

export default LeatestArticle;