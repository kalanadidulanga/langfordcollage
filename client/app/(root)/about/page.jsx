"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react'
import AboutHero from './about-hero-sections';
import AboutSecond from './about-second-section';
import OurTeam from './about-our-team';
import QualityMonitoring from './quality-monitoring-section';
import OFQUAL from './OFQUAL-section';
import PartnerUnivercity from './partner-univercity-section';
import BackgroundSlider from '@/components/BackgroundSlider';
import Head from "next/head";

function page() {
  const [isClient, setIsClient] = useState(false);

    const images = [
        '/Images/about-bg.png',
    ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return (
      <>
          <Head>
              <title>Langford College | About</title>
              <meta name="description" content="Langford College offers flexible, affordable online learning pathways for students worldwide, helping them fast-track undergraduate and postgraduate qualifications with full support and interactive tools for professional success."/>
              <meta name="keywords"
                    content="langfordcollege, langford college, Langford College, Uk Campus , uk campus , uk , ukcampus , campus , digree, langford , Langford , British Degree, British , Digree, about langford , About langford"/>
              <meta property="og:title" content="Langford College | About"/>
              <meta property="og:description" content="Langford College offers flexible, affordable online learning pathways for students worldwide, helping them fast-track undergraduate and postgraduate qualifications with full support and interactive tools for professional success."/>
              <meta property="og:image" content="https://api.langfordcollege.com/uploads/university/1749200734166.jpg"/>
              <meta property="og:url" content="https://langfordcollege.com/about"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="canonical" href="https://langfordcollege.com/about"/>
          </Head>
        <div className='relative w-full h-screen overflow-hidden'>
          <BackgroundSlider images={images}/>
          <div className="content">
            <Header />
            <AboutHero />
          </div>
        </div>
        <AboutSecond/>
        <OurTeam/>
        <QualityMonitoring/>
        <OFQUAL/>
        <PartnerUnivercity/>
        <Footer />
      </>
    );
  }
}

export default page