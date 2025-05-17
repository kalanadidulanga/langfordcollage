"use client";
import Header from "@/components/Header";
import HeroSection from "./hero-section";
import UniQualification from "./uni-qualification";
import AffordableStudy from "./affordable-study-section";
import SocialLearning from "./social-learning-section";
import WillLearn from "./will-learn-section";
import Support from "./support-section";
import LearnAnywhere from "./learn-anywhere-section";
import MostPopular from "./most-popular-courses-section";
import RequestACource from "./request-a-cource-section";
import LeatestArticle from "./leatest-article-section";
import {Footer} from "@/components/Footer";
import {useEffect, useState} from "react";
import GetFuture from "./get-future-section";
import LeatestTestimonial from "./leatest-testimonial-section";
import NSS from "./nss-section";
import Awarding from "./awarding-section";
import WhatsNew from "./whats-new-section";
import UniProgession from "./university_progrssion";
import BackgroundSlider from "@/components/BackgroundSlider";

export default function Home() {

    const [isClient, setIsClient] = useState(false);

    const images = [
        // '/Images/main-bg.jpg',
        '/Images/home.jpg',
        '/Images/home2.jpg',
        '/Images/home3.jpg',
    ];

    useEffect(() => {
        setIsClient(true);

        const handleHashScroll = () => {
            if (window.location.hash) {
                const id = window.location.hash.substring(1);
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        // Wait for the page to render before scrolling
        setTimeout(handleHashScroll, 500);

    }, []);


    if (isClient) {
        return (
            <>
                <div className='relative w-full h-full overflow-hidden'>
                    <BackgroundSlider images={images}/>
                    <div className="content">
                        <Header/>
                        <HeroSection/>
                    </div>
                </div>
                <GetFuture/>
                <Awarding/>
                <UniQualification/>
                <NSS/>
                <WhatsNew/>
                {/* <AffordableStudy /> */}
                <UniProgession/>
                <MostPopular/>
                <SocialLearning/>
                <WillLearn/>
                <Support/>
                <LearnAnywhere/>
                <LeatestTestimonial/>
                <RequestACource/>
                <LeatestArticle/>
                <div className='bg-white p-10'></div>
                <Footer/>
            </>
        );
    }
}
