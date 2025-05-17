"use client";
import React, {useEffect, useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ArticleCard} from '@/components/Article-Card'
import axios from "axios";

function Body() {

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const [article, setArticle] = useState([]);
    const [isClientLoading, setIsClientLoading] = useState(true);

    const [isclickSection1, setclickSection1] = useState(false);
    const [isclickSection2, setclickSection2] = useState(false);
    const [isclickSection3, setclickSection3] = useState(false);
    const [isclickSection4, setclickSection4] = useState(false);
    const [isclickSection5, setclickSection5] = useState(false);
    const [isclickSection6, setclickSection6] = useState(false);

    const [isclickSection7, setclickSection7] = useState(false);
    const [isclickSection8, setclickSection8] = useState(false);
    const [isclickSection9, setclickSection9] = useState(false);
    const [isclickSection10, setclickSection10] = useState(false);
    const [isclickSection11, setclickSection11] = useState(false);
    const [isclickSection12, setclickSection12] = useState(false);
    const [isclickSection13, setclickSection13] = useState(false);
    const [isclickSection14, setclickSection14] = useState(false);
    const [isclickSection15, setclickSection15] = useState(false);

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
                setIsClientLoading(false);
            } else {
                setArticle([]);
                setIsClientLoading(false);
            }
        } catch (error) {
            setIsClientLoading(false);
            setArticle([]);
        }

    }

    return (
        <>
            <div
                className='w-full px-[10vw] font-sans flex flex-col gap-10 pt-10 pb-20 bg-white text-black article-section '>
                <span className='font-bold text-[9vw] lg:text-[4vw] article-left'>Latest Articles</span>
                <div
                    className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start gap-8 space-y-5 article-right'>
                    {isClientLoading ? (
                        <>
                            <div
                                className="w-full h-[55vh] bg-white p-2 rounded-lg shadow-xl overflow-hidden animate-pulse space-y-3">
                                <div className="w-full h-48 bg-gray-300"></div>
                                <div className="h-8 bg-gray-300 rounded w-full mt-2"></div>
                                <div className="h-20 bg-gray-300 rounded w-full"></div>
                                <div className="h-10 bg-gray-300 rounded w-2/5"></div>
                            </div>
                            <div
                                className="w-full h-[55vh] bg-white p-2 rounded-lg shadow-xl overflow-hidden animate-pulse space-y-3">
                                <div className="w-full h-48 bg-gray-300"></div>
                                <div className="h-8 bg-gray-300 rounded w-full mt-2"></div>
                                <div className="h-20 bg-gray-300 rounded w-full"></div>
                                <div className="h-10 bg-gray-300 rounded w-2/5"></div>
                            </div>
                            <div
                                className="w-full h-[55vh] bg-white p-2 rounded-lg shadow-xl overflow-hidden animate-pulse space-y-3">
                                <div className="w-full h-48 bg-gray-300"></div>
                                <div className="h-8 bg-gray-300 rounded w-full mt-2"></div>
                                <div className="h-20 bg-gray-300 rounded w-full"></div>
                                <div className="h-10 bg-gray-300 rounded w-2/5"></div>
                            </div>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            </div>
            {/* section 1 */}
            <div className='w-full px-[10vw] font-sans flex flex-col gap-10 pb-20 bg-[#f7faff] text-black'>
                <div
                    className='w-full pt-5 mt-5 pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                    <span className={`text-[6vw] capitalize lg:text-[2.2vw] font-sans`}>
                            Complete Your Degree Online, Then Move to the UK: A Smart, Cost-Effective Study Path
                        </span>
                    <span className={`description2 text-[14px] lg:text-[16px] lg:description mt-5 mb-5`}>
                    In today’s digital world, students no longer need to choose between quality education and affordability. With the growing credibility of online degrees, many aspiring international students are asking a crucial question: <span
                        className={`italic`}>Should I complete a cost-effective degree online and then move to the UK, or should I study the entire degree in the UK?</span> The answer depends on your goals-but for many, combining online education with a move to the UK offers the best of both worlds
                    </span>
                    <span className={`text-[18px] capitalize font-sans mt-3 border-t pt-2 flex items-center justify-between`}
                          onClick={() => setclickSection1(!isclickSection1)}>
                            The Cost Advantage of Studying Online
                            <img src="/Icon/arrow.png" alt="arrow"
                                 className={`w-6 h-6 ${isclickSection1 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`}/>
                        </span>
                    {isclickSection1 && (
                        <>
                            <div className='flex flex-col gap-2 description2 text-[14px] lg:text-[16px] lg:description'>
                                    <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                        Let’s start with the numbers. Studying a full undergraduate or postgraduate degree in the UK can be a significant financial investment. Tuition fees alone can range from £10,000 to £25,000 per year for international students, and that’s before factoring in living costs, which in cities like London can exceed £1,200 per month.
                                    </span>
                                <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                        Online learning offers a far more affordable alternative. Accredited online programs often cost a fraction of traditional UK university fees. Many institutions partner with UK universities, meaning students can earn a UK-recognized qualification at a much lower cost—all from the comfort of home. This model helps students save on both tuition and living expenses during the initial stages of their education.
                                    </span>
                            </div>
                        </>
                    )}
                    <span className={`text-[18px] capitalize font-sans border-t pt-2 flex items-center justify-between`}
                          onClick={() => setclickSection2(!isclickSection2)}>
                            Flexibility That Fits Your Life
                            <img src="/Icon/arrow.png" alt="arrow"
                                 className={`w-6 h-6 ${isclickSection2 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`}/>
                        </span>
                    {isclickSection2 && (
                        <>
                            <div className='flex flex-col gap-2 description2 text-[14px] lg:text-[16px] lg:description'>
                                    <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                    Online study also provides unmatched flexibility. Students can learn at their own pace, balance their studies with part-time work, and remain close to family while building a globally recognized academic foundation. Whether you're in Nigeria, India, Brazil, or anywhere else, you can access top-tier education without disrupting your current lifestyle.
                                    </span>
                            </div>
                        </>
                    )}
                    <span className={`text-[18px] capitalize font-sans border-t pt-2 flex items-center justify-between`}
                          onClick={() => setclickSection3(!isclickSection3)}>
                            Transitioning to the UK with Confidence
                            <img src="/Icon/arrow.png" alt="arrow"
                                 className={`w-6 h-6 ${isclickSection3 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`}/>
                        </span>
                    {isclickSection3 && (
                        <>
                            <div className='flex flex-col gap-2 description2 text-[14px] lg:text-[16px] lg:description'>
                                <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                       Once you've completed your online degree—or a portion of it—moving to the UK becomes a smoother, more strategic process. With a recognized qualification in hand, students can apply for postgraduate study, professional certifications, or even skilled worker visas. Many online programs are structured to align with UK immigration pathways, helping students meet eligibility requirements for further education or employment.
                                    </span>
                                <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                       Moreover, students who begin their studies online often arrive in the UK with greater academic confidence, refined time management skills, and a clearer career direction—valuable assets that help ease the transition into UK life.
                                    </span>
                            </div>
                        </>
                    )}
                    <span className={`text-[18px] capitalize font-sans border-t pt-2 flex items-center justify-between`}
                          onClick={() => setclickSection4(!isclickSection4)}>
                        Building a Global Network
                        <img src="/Icon/arrow.png" alt="arrow"
                             className={`w-6 h-6 ${isclickSection4 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`}/>
                    </span>
                    {isclickSection4 && (
                        <>
                            <div className='flex flex-col gap-2 description2 text-[14px] lg:text-[16px] lg:description'>
                                <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                    While studying online, students are not isolated. Many online programs foster global communities where learners connect, collaborate, and share experiences. When you eventually move to the UK, you may find that some of your online classmates are now your local peers—a built-in support system from day one.
                                </span>
                            </div>
                        </>
                    )}
                    <span className={`text-[18px] capitalize font-sans border-t pt-2 flex items-center justify-between`}
                          onClick={() => setclickSection5(!isclickSection5)}>
                            The Smarter Choice for the Future
                            <img src="/Icon/arrow.png" alt="arrow"
                                 className={`w-6 h-6 ${isclickSection5 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`}/>
                        </span>
                    {isclickSection5 && (
                        <>
                            <div className='flex flex-col gap-2 description2 text-[14px] lg:text-[16px] lg:description'>
                                    <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                        Choosing to begin your degree online and finish your academic or professional journey in the UK isn't just about saving money—it's about building a smarter pathway toward your goals. It's flexible, affordable, and strategic. In an era where the boundaries of education are being redefined, online study is no longer the alternative; it’s the advantage.
                                    </span>
                            </div>
                        </>
                    )}
                    <span className={`text-[6vw] capitalize lg:text-[2.2vw] font-sans pt-20`}>
                           Does Business Courses Need Physical Attention When You Can Do It Online?
                        </span>
                    <span className={`description2 text-[14px] lg:text-[16px] lg:description mt-5`}>
                    In the age of digital transformation, the traditional boundaries of education are being redefined—especially in the field of business. Business schools have long been associated with bustling campuses, face-to-face lectures, and in-person networking events. But today, a pressing question arises:<span
                        className={`italic`}>Do business courses really need physical attendance when they can be completed online-just as effectively?</span>
                    </span>
                    <span className={`description2 text-[14px] lg:text-[16px] lg:description mt-2 mb-5`}>
                    The answer is a resounding no-and here’s why
                    </span>
                    <span className={`text-[18px] capitalize font-sans border-t pt-2 flex items-center justify-between`}
                          onClick={() => setclickSection6(!isclickSection6)}>
                            Business Is Going Digital. Education Should Too.
                            <img src="/Icon/arrow.png" alt="arrow"
                                 className={`w-6 h-6 ${isclickSection6 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`}/>
                        </span>
                    {isclickSection6 && (
                        <>
                            <div className='flex flex-col gap-2 description2 text-[14px] lg:text-[16px] lg:description'>
                                    <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                    The business world itself has moved online. From virtual boardrooms to remote teams and cloud-based operations, today’s business environment is inherently digital. Learning business concepts through an online platform mirrors this reality and prepares students to operate effectively in the modern, tech-driven workplace.
                                    </span>
                                <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                        Online business courses equip learners with the same essential knowledge—marketing, finance, leadership, strategy, and entrepreneurship—without the limitations of geography or classroom walls. In fact, many online programs now offer cutting-edge simulations, case studies, and interactive tools that rival, and often surpass, traditional classroom experiences.
                                    </span>
                            </div>
                        </>
                    )}
                    <span className={`text-[18px] capitalize font-sans border-t pt-2 flex items-center justify-between`}
                          onClick={() => setclickSection7(!isclickSection7)}>
                            Flexibility with No Compromise on Quality
                            <img src="/Icon/arrow.png" alt="arrow"
                                 className={`w-6 h-6 ${isclickSection7 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`}/>
                        </span>
                    {isclickSection7 && (
                        <>
                            <div className='flex flex-col gap-2 description2 text-[14px] lg:text-[16px] lg:description'>
                                <div
                                    className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                            Studying business online offers unmatched flexibility. Whether you're a working professional, a parent, or someone switching careers, online courses allow you to learn at your own pace and schedule. Accredited institutions ensure that online business degrees and certificates maintain the same academic rigor and credibility as their on-campus counterparts.
                                        </span>
                                    <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                            From live webinars and group projects to recorded lectures and discussion forums, online learning offers a dynamic environment that supports both self-directed study and collaborative engagement.
                                        </span>
                                </div>
                            </div>
                        </>
                    )}
                    <span className={`text-[18px] capitalize font-sans border-t pt-2 flex items-center justify-between`}
                          onClick={() => setclickSection8(!isclickSection8)}>
                            Real-World Skills Through Virtual Learning
                            <img src="/Icon/arrow.png" alt="arrow"
                                 className={`w-6 h-6 ${isclickSection8 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`}/>
                        </span>
                    {isclickSection8 && (
                        <>
                            <div className='flex flex-col gap-2 description2 text-[14px] lg:text-[16px] lg:description'>
                                <div
                                    className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                            Contrary to the myth that online education is "passive," business courses delivered online are often more practical and hands-on. You'll work on real-world business problems, analyze global case studies, and use digital tools that are standard in today’s workplace. Moreover, online programs often integrate soft skills development-like communication, time management, and critical thinking-through virtual team collaboration and presentations.
                                        </span>
                                </div>
                            </div>
                        </>
                    )}
                    <span className={`text-[18px] capitalize font-sans border-t pt-2 flex items-center justify-between`}
                          onClick={() => setclickSection9(!isclickSection9)}>
                            Networking Without Borders
                            <img src="/Icon/arrow.png" alt="arrow"
                                 className={`w-6 h-6 ${isclickSection9 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`}/>
                        </span>
                    {isclickSection9 && (
                        <>
                            <div className='flex flex-col gap-2 description2 text-[14px] lg:text-[16px] lg:description'>
                                <div
                                    className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                            One major concern with online business education is the fear of missing out on networking. But the reality is quite the opposite. Online business programs today connect students from across the globe, offering an international peer network that is often richer and more diverse than a traditional classroom. These connections can lead to cross-border collaborations, global business ideas, and long-term professional relationships.
                                        </span>
                                </div>
                            </div>
                        </>
                    )}
                    <span className={`text-[18px] capitalize font-sans border-t pt-2 flex items-center justify-between`}
                          onClick={() => setclickSection10(!isclickSection10)}>
                            When Does Physical Presence Matter?
                            <img src="/Icon/arrow.png" alt="arrow"
                                 className={`w-6 h-6 ${isclickSection10 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`}/>
                        </span>
                    {isclickSection10 && (
                        <>
                            <div className='flex flex-col gap-2 description2 text-[14px] lg:text-[16px] lg:description'>
                                <div
                                    className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                            There may be certain moments—such as internships, final presentations, or immersive workshops—where in-person participation adds value. Some hybrid or blended programs offer optional campus visits or study tours to bridge this gap. However, for the vast majority of the curriculum, physical presence is not necessary to grasp concepts or excel in business education.
                                        </span>
                                </div>
                            </div>
                        </>
                    )}
                    <span className={`text-[18px] capitalize font-sans border-t pt-2 flex items-center justify-between`}
                          onClick={() => setclickSection11(!isclickSection11)}>
                            The Verdict: Online Business Education Is Here to Stay
                            <img src="/Icon/arrow.png" alt="arrow"
                                 className={`w-6 h-6 ${isclickSection11 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`}/>
                        </span>
                    {isclickSection11 && (
                        <>
                            <div className='flex flex-col gap-2 description2 text-[14px] lg:text-[16px] lg:description'>
                                <div
                                    className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                            The evolution of online learning has proven that you don’t need to be physically present in a classroom to learn, lead, and succeed in the world of business. With high-quality course content, interactive technology, global networking, and real-world application, online business programs are not just a backup plan—they're a forward-thinking choice.
                                        </span>
                                </div>
                            </div>
                        </>
                    )}

                    <span className={`text-[6vw] capitalize lg:text-[2.2vw] pt-20 font-sans`}>
                            Why It’s Important to Enjoy Your Life While You Complete Your Studies
                        </span>
                    <span className={`description2 text-[14px] lg:text-[16px] lg:description mt-5`}>
                    In a world that celebrates hustle and hard work, students are often told to put their social lives, hobbies, and personal wellbeing on hold until after they graduate. “Work now, play later” is a common motto. But the truth is, <span
                        className={`italic`}>In a world that celebrates hustle and hard work, students are often told to put their social lives, hobbies, and personal wellbeing on hold until after they graduate. “Work now, play later” is a common motto. But the truth is,</span> In fact, finding joy while studying is not just possible-it’s essential.
                    </span>
                    <span className={`description2 text-[14px] lg:text-[16px] lg:description mt-2 mb-5`}>
                    Here’s why enjoying your life while completing your studies is one of the smartest things you can do:
                    </span>
                    <span className={`text-[18px] capitalize font-sans border-t pt-2 flex items-center justify-between`}
                          onClick={() => setclickSection12(!isclickSection12)}>
                            Balance Prevents Burnout
                            <img src="/Icon/arrow.png" alt="arrow"
                                 className={`w-6 h-6 ${isclickSection12 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`}/>
                        </span>
                    {isclickSection12 && (
                        <>
                            <div className='flex flex-col gap-2 description2 text-[14px] lg:text-[16px] lg:description'>
                                <div
                                    className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                            Studying for a degree—whether online or on-campus—requires commitment. But without proper balance, long hours of studying can lead to stress, anxiety, and burnout. Taking time to relax, socialize, and engage in things you love helps recharge your energy and improve your focus. A healthy mind is a productive mind.
                                        </span>
                                </div>
                            </div>
                        </>
                    )}
                    <span className={`text-[18px] capitalize font-sans border-t pt-2 flex items-center justify-between`}
                          onClick={() => setclickSection13(!isclickSection13)}>
                            You Learn More Than What’s in the Books
                            <img src="/Icon/arrow.png" alt="arrow"
                                 className={`w-6 h-6 ${isclickSection13 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`}/>
                        </span>
                    {isclickSection13 && (
                        <>
                            <div className='flex flex-col gap-2 description2 text-[14px] lg:text-[16px] lg:description'>
                                <div
                                    className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                            Life outside the classroom offers lessons you can’t find in a textbook. Building friendships, exploring new places, volunteering, or even just enjoying a hobby teaches you soft skills like communication, emotional intelligence, and adaptability-all of which are vital for real-world success. A well-rounded education includes both academic knowledge and personal growth.
                                        </span>
                                </div>
                            </div>
                        </>
                    )}
                    <span className={`text-[18px] capitalize font-sans border-t pt-2 flex items-center justify-between`}
                          onClick={() => setclickSection14(!isclickSection14)}>
                            It Boosts Mental Health and Motivation
                            <img src="/Icon/arrow.png" alt="arrow"
                                 className={`w-6 h-6 ${isclickSection14 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`}/>
                        </span>
                    {isclickSection14 && (
                        <>
                            <div className='flex flex-col gap-2 description2 text-[14px] lg:text-[16px] lg:description'>
                                <div
                                    className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                            Enjoying your life while studying helps you stay positive and motivated. Small moments of joy—like having coffee with a friend, taking a weekend trip, or pursuing a creative interest—create emotional resilience. When you're happy, you're more likely to stay focused, overcome challenges, and remain committed to your goals.
                                        </span>
                                </div>
                            </div>
                        </>
                    )}
                    <span className={`text-[18px] capitalize font-sans border-t pt-2 flex items-center justify-between`}
                          onClick={() => setclickSection15(!isclickSection15)}>
                            Memories Matter
                            <img src="/Icon/arrow.png" alt="arrow"
                                 className={`w-6 h-6 ${isclickSection15 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`}/>
                        </span>
                    {isclickSection15 && (
                        <>
                            <div className='flex flex-col gap-2 description2 text-[14px] lg:text-[16px] lg:description'>
                                <div
                                    className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                            University or college years are a unique chapter in your life. They’re not just a stepping stone to a career-they're also a time to build lifelong memories. You’ll never get these years back, so make the most of them. The laughter, adventures, and connections you build now will stay with you forever, long after you’ve received your degree.
                                             </span>
                                </div>
                            </div>
                        </>
                    )}
                    <span className={`text-[18px] capitalize font-sans border-t pt-2 flex items-center justify-between`}
                          onClick={() => setclickSection15(!isclickSection15)}>
                            Online Study Makes It Easier to Find That Balance
                            <img src="/Icon/arrow.png" alt="arrow"
                                 className={`w-6 h-6 ${isclickSection15 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`}/>
                        </span>
                    {isclickSection15 && (
                        <>
                            <div className='flex flex-col gap-2 description2 text-[14px] lg:text-[16px] lg:description'>
                                <div
                                    className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                            With flexible schedules, self-paced learning, and the ability to study from anywhere, online education makes it easier than ever to balance life and learning. You can travel, work part-time, or care for your family—all while progressing through your studies. It gives you the freedom to enjoy your present while building your future.
                                             </span>
                                </div>
                            </div>
                        </>
                    )}
                    <span className={`text-[18px] capitalize font-sans border-t pt-2 flex items-center justify-between`}
                          onClick={() => setclickSection15(!isclickSection15)}>
                            The Bottom Line: You Deserve Both Success and Happiness
                            <img src="/Icon/arrow.png" alt="arrow"
                                 className={`w-6 h-6 ${isclickSection15 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`}/>
                        </span>
                    {isclickSection15 && (
                        <>
                            <div className='flex flex-col gap-2 description2 text-[14px] lg:text-[16px] lg:description'>
                                <div
                                    className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                            You don’t have to choose between academic achievement and a fulfilling life. You can-and should-have both. Learning how to enjoy the journey as you pursue your goals isn’t just good for your wellbeing-it’s part of becoming the best version of yourself.
                                             </span>
                                </div>
                            </div>
                        </>
                    )}
                    <span className={`text-[18px] capitalize font-sans border-t pt-2 flex items-center justify-between`}
                          onClick={() => setclickSection15(!isclickSection15)}>
                            Study hard, live fully, and make the most of every moment.
                            <img src="/Icon/arrow.png" alt="arrow"
                                 className={`w-6 h-6 ${isclickSection15 ? `rotate-0 duration-200` : `-rotate-90 duration-200`} transition-all`}/>
                        </span>
                    {isclickSection15 && (
                        <>
                            <div className='flex flex-col gap-2 description2 text-[14px] lg:text-[16px] lg:description'>
                                <div
                                    className='w-full bg-white pb-4 flex flex-col gap-3 justify-between  cursor-default'>
                                        <span className={`description2 text-[14px] lg:text-[16px] lg:description`}>
                                            Explore our flexible online programs designed to support your goals and your lifestyle.
                                             </span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Body