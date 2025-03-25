"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArticleCard } from '@/components/Article-Card'

function Body() {

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
              toggleActions: "play reverse play reverse", // Works when scrolling up and down
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
            <div className='w-full px-[10vw] font-sans flex flex-col gap-10 pt-10 pb-20 bg-white text-black article-section'>
                <span className='font-bold text-[3.5vw] article-left'>Latest articles</span>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start gap-8 space-y-5 article-right'>
                    <ArticleCard
                        image="/Images/article.png"
                        title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                        description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                        action={true}
                    />
                    <ArticleCard
                        image="/Images/article.png"
                        title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                        description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                        action={true}
                    />
                    <ArticleCard
                        image="/Images/article.png"
                        title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                        description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                        action={true}
                    />
                    <ArticleCard
                        image="/Images/article.png"
                        title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                        description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                        action={true}
                    />
                    <ArticleCard
                        image="/Images/article.png"
                        title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                        description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                        action={true}
                    />
                    <ArticleCard
                        image="/Images/article.png"
                        title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                        description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                        action={true}
                    />
                </div>
            </div>
        </>
    )
}

export default Body