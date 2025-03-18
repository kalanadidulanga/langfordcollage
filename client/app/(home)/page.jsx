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
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return (
      <>
        <div className='main-bg'>
          <div className="content">
            <Header />
            <HeroSection />
          </div>
        </div>
        <UniQualification />
        <AffordableStudy />
        <SocialLearning />
        <WillLearn />
        <Support />
        <LearnAnywhere />
        <MostPopular />
        <RequestACource />
        <LeatestArticle />
        <Footer />
      </>
    );
  }
}
