"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArticleCard } from '@/components/Article-Card'
import axios from "axios";

function Body() {

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [article, setArticle] = useState([]);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.fromTo(
  //     ".article-left",
  //     { opacity: 0, x: -50 },
  //     {
  //       opacity: 1, x: 0, duration: 1, ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: ".article-section",
  //         start: "top 80%",
  //         end: "bottom 20%",
  //         toggleActions: "play reverse play reverse", // Works when scrolling up and down
  //         once: false,
  //       }
  //     }
  //   );

  //   gsap.fromTo(
  //     ".article-right",
  //     { opacity: 0, x: 50 },
  //     {
  //       opacity: 1, x: 0, duration: 1, ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: ".article-section",
  //         start: "top 80%",
  //         end: "bottom 20%",
  //         toggleActions: "play reverse play reverse",
  //         once: false,
  //       }
  //     }
  //   );

  // }, []);

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
      <div className='w-full px-[10vw] font-sans flex flex-col gap-10 pt-10 pb-20 bg-white text-black article-section '>
        <span className='font-bold text-[9vw] lg:text-[4vw] article-left'>Latest Articles</span>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start gap-8 space-y-5 article-right'>
          {article?.length > 0 ? (
            <>
              {article?.map((item, index) => (
                <ArticleCard
                  key={index}
                  image={item?.image_path || "/Images/article.png"}
                  title={item?.title}
                  description={item?.description}
                  slug={item?.slug}
                  action={true}
                />
              ))}
            </>
          ) : (
            <>
              <div className="w-full col-span-3 flex justify-start items-center">
                <span className="font-bold text-lg text-gray-400">No article found</span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Body