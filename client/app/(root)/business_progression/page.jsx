"use client";
import {Footer} from '@/components/Footer';
import Header from '@/components/Header';
import React, {useEffect, useState} from 'react'
import AboutHero from './about-hero-sections';
import AboutSecond from '../about/about-second-section';
import OurTeam from '../about/about-our-team';
import QualityMonitoring from '../about/quality-monitoring-section';
import OFQUAL from '../about/OFQUAL-section';
import PartnerUnivercity from '../about/partner-univercity-section';
import Body from './body';
import BackgroundSlider from "@/components/BackgroundSlider";
import Head from "next/head";

function page() {
    const [isClient, setIsClient] = useState(false);

    const images = [
        '/Images/business_progression.jpg',
    ];

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (isClient) {
        return (
            <>
                <Head>
                    <title>Langford College | Business Progression</title>
                    <meta name="description" content="A Smarter Route To a British Degree"/>
                    <meta name="keywords"
                          content="langfordcollege, langford college, Langford College, Uk Campus , uk campus , uk , ukcampus , campus , digree, langford , Langford , British Degree, British , Digree, level-7-mba-advance-entry , level 7 mba advance entry , MBA"/>
                    <meta property="og:title" content="Langford College | Business Progression"/>
                    <meta property="og:description" content="A Smarter Route To a British Degree"/>
                    <meta property="og:image" content="https://api.langfordcollege.com/uploads/university/1749200734166.jpg"/>
                    <meta property="og:url" content="https://langfordcollege.com/business_progression"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="canonical" href="https://langfordcollege.com/business_progression"/>
                </Head>
                <div className='relative w-full min-h-screen overflow-hidden'>
                    <BackgroundSlider images={images}/>
                    <div className="content">
                        <Header/>
                        <AboutHero/>
                    </div>
                </div>
                <Body/>
                <Footer/>
            </>
        );
    }
}

export default page