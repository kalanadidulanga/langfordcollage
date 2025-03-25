"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArticleCard } from '@/components/Article-Card';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function LeatestArticle() {

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

    return (
        <>
            <div className='w-full lg:pb-10 pt-10 lg:pt-0 font-sans bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 article-section'>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw] article-left'>
                        Latest articles
                    </span>
                    {/* <div className='w-full bg-white text-gray-500 flex justify-center article-right'>
                        <div className='bg-white pt-10 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start gap-8'>
                            
                            <ArticleCard
                                image="/Images/article.png"
                                title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                                description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                                action={false}
                            />
                            <ArticleCard
                                image="/Images/article.png"
                                title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                                description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                                action={false}
                            />
                        </div>
                    </div> */}

                    <div className="w-full bg-white text-gray-500 flex justify-center article-right">
                        {/* Grid Layout for Large Screens */}
                        <div className="hidden lg:grid bg-white pt-10 pb-8 grid-cols-1 lg:grid-cols-3 justify-start gap-8">
                            <ArticleCard
                                image="/Images/article.png"
                                title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                                description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                                action={false}
                            />
                            <ArticleCard
                                image="/Images/article.png"
                                title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                                description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                                action={false}
                            />
                            <ArticleCard
                                image="/Images/article.png"
                                title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                                description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                                action={false}
                            />
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
                                    <ArticleCard
                                        image="/Images/article.png"
                                        title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                                        description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                                        action={false}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ArticleCard
                                        image="/Images/article.png"
                                        title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                                        description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                                        action={false}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ArticleCard
                                        image="/Images/article.png"
                                        title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                                        description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                                        action={false}
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};

export default LeatestArticle;