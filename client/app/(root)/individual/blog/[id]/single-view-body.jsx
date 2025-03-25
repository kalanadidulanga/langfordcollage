"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SingleViewBody() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            ".blog-view-left",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".blog-view-section",
                    start: "top 80%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".blog-view-left1",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".blog-view-section1",
                    start: "top 80%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".blog-view-left2",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".blog-view-section2",
                    start: "top 80%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".blog-view-left3",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".blog-view-section3",
                    start: "top 80%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".blog-view-left4",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".blog-view-section4",
                    start: "top 80%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".blog-view-left5",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".blog-view-section5",
                    start: "top 80%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".blog-view-left6",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".blog-view-section6",
                    start: "top 80%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".blog-view-left7",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".blog-view-section7",
                    start: "top 80%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".blog-view-right",
            { opacity: 0, x: 50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".blog-view-section",
                    start: "top 80%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

    }, []);

    return (
        <>
            <div className='w-full font-sans flex flex-col gap-10 pt-10 pb-20 bg-white text-black'>
                <div className='w-full bg-white pt-20 px-[10vw] text-black flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 blog-view-section'>
                    <div className='flex items-start justify-start w-full lg:w-[60%] blog-view-left'>
                        <img src="/Images/degree.png" alt="" className='w-full h-[400px] md:h-[65vh] object-cover' />
                    </div>
                    <div className='w-full lg:h-[70vh] gap-5 lg:gap-0 flex items-start justify-between text-[6vw] lg:text-[4vw] font-medium flex-col blog-view-right'>
                        <span className="font-bold">
                            Affordable and Accessible Online Courses in Malta with OBS and Elephant & Cross
                        </span>
                    </div>
                </div>
                <div className='w-full bg-[#F7FAFF] px-[10vw] flex flex-col gap-10 p-10'>
                    <div className='w-full flex flex-col gap-5 blog-view-section1'>
                        <span className='font-bold md:text-[1.5vw] blog-view-left1'>
                            The Positive Impact of Online Business School in Malta
                        </span>
                        <span className='text-[18px] font-extralight text-[#2E2E27] blog-view-left1'>
                            Malta’s higher education landscape has seen a significant shift in recent years. As technology advances, more people turn to online courses as a viable alternative to traditional classroom settings. Online Business School (OBS) leads this transformation by offering affordable and accessible diplomas. While OBS provides the platform for accessible and affordable online education, Elephant and Cross plays a crucial role in offering personalized guidance to students in Malta. This change makes education more attainable and aligns with the evolving needs of the Maltese population.
                        </span>
                    </div>
                    <div className='w-full flex flex-col gap-5 blog-view-section2'>
                        <span className='font-bold md:text-[1.5vw] blog-view-left2'>
                            Making Education Affordable
                        </span>
                        <span className='text-[18px] font-extralight text-[#2E2E27] blog-view-left2'>
                            One of OBS’s most significant benefits is its affordability compared to traditional institutions. The cost of higher education can be prohibitive, especially considering tuition fees, transportation, and accommodation. OBS reduces these financial burdens by offering a range of affordable diploma programs that are completed 100% online. This cost-effective approach ensures that more people in Malta can pursue their educational goals without the strain of excessive debt.
                        </span>
                    </div>
                    <div className='w-full flex flex-col gap-5 blog-view-section3'>
                        <span className='font-bold md:text-[1.5vw] blog-view-left3'>
                            Accessibility for All
                        </span>
                        <span className='text-[18px] font-extralight text-[#2E2E27] blog-view-left3'>
                            Accessibility is another crucial factor driving the popularity of online courses in Malta. OBS provides a flexible learning environment that caters to a diverse group of students, including working professionals, parents, and those with other commitments that make attending traditional classes difficult. The ability to study from anywhere and at any time means that education is no longer confined to a physical classroom. This flexibility is particularly beneficial for Maltese students, who can now balance their personal and professional lives while advancing their education.
                        </span>
                    </div>
                    <div className='w-full flex flex-col gap-5 blog-view-section4'>
                        <span className='font-bold md:text-[1.5vw] blog-view-left4'>
                            Personalized Learning Experience
                        </span>
                        <span className='text-[18px] font-extralight text-[#2E2E27] blog-view-left4'>
                            The personalized learning experience offered by OBS is another reason why online courses are flourishing in Malta. Unlike traditional classroom settings, online education allows students to learn at their own pace. This individualized approach caters to different learning styles and paces, ensuring that each student can fully grasp the material before moving on. Furthermore, OBS provides ample support through online forums, tutoring, and interactive resources, making the learning process engaging and effective.
                        </span>
                    </div>
                    <div className='w-full flex flex-col gap-5 blog-view-section5'>
                        <span className='font-bold md:text-[1.5vw] blog-view-left5'>
                            The Popularity of Online Learning in Malta
                        </span>
                        <span className='text-[18px] font-extralight text-[#2E2E27] blog-view-left5'>
                            The convenience and flexibility of online courses have made them immensely popular among Maltese students. Many appreciate the ability to study from the comfort of their homes or workplaces, eliminating the need for long commutes and issues with parking.. This convenience is particularly appealing in a fast-paced world where time is a precious commodity. <br />
                            Moreover, the diverse range of courses available through OBS means that students can find programs tailored to their interests and career goals. Whether it’s a diploma in HR, accounting, or business management. OBS offers specialized programs that cater to the specific needs of the Maltese job market.
                        </span>
                    </div>
                    <div className='w-full flex flex-col gap-5 blog-view-section6'>
                        <span className='font-bold md:text-[1.5vw] blog-view-left6'>
                            Top-Up Degrees and Progression
                        </span>
                        <span className='text-[18px] font-extralight text-[#2E2E27] blog-view-left6'>
                            Maltese students completing an online diploma through OBS can also complete a top-up degree at a British University.
                        </span>
                        <div className='flex flex-col text-[#2E2E27] blog-view-left6'>
                            <span className='flex text-[18px]'>
                                <li></li>
                                <span>MQF Level 4 Diploma: students enter into first year of a University Degree</span>
                            </span>
                            <span className='flex text-[18px]'>
                                <li></li>
                                <span>MQF Level 5 Diploma: students can go straight into final year of a University Degree (top-up)</span>
                            </span>
                            <span className='flex text-[18px]'>
                                <li></li>
                                <span>MQF Level 7 Diploma: students can top up into an MBA or Master’s Degree by completing a final project.</span>
                            </span>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-5 blog-view-section7'>
                        <span className='font-bold md:text-[1.5vw] blog-view-left7'>
                            Partnership with Elephant & Cross in Malta
                        </span>
                        <span className='text-[18px] font-extralight text-[#2E2E27] blog-view-left7'>
                            As our partner in Malta, Elephant & Cross helps students navigate the complexities of choosing the right diploma or degree program that aligns with their career aspirations and personal goals. <br />

                            For students in Malta, this means having access to local knowledgeable professionals who can offer insights into the best diploma and top-up degree programs available. <br />
                            The partnership between Online Business School and Elephant & Cross is transforming the educational landscape in Malta.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleViewBody