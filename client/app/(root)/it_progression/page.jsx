"use client";
import {Footer} from '@/components/Footer';
import Header from '@/components/Header';
import React, {useEffect, useState} from 'react'
import AboutHero from './about-hero-sections';
import Body from './body';
import BackgroundSlider from "@/components/BackgroundSlider";
import Head from "next/head";

function page() {
    const [isClient, setIsClient] = useState(false);

    const images = [
        '/Images/IT_pregression.jpg',
    ];

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (isClient) {
        return (
            <>
                <Head>
                    <title>Langford College | IT Progression</title>
                    <meta name="description" content="A Smarter Route To a British Degree"/>
                    <meta name="keywords"
                          content="langfordcollege, langford college, Langford College, Uk Campus , uk campus , uk , ukcampus , campus , digree, langford , Langford , British Degree, British , Digree"/>
                    <meta property="og:title" content="Langford College | IT Progression"/>
                    <meta property="og:description" content="A Smarter Route To a British Degree"/>
                    <meta property="og:image" content="https://api.langfordcollege.com/uploads/university/1749200734166.jpg"/>
                    <meta property="og:url" content="https://langfordcollege.com/it_progression"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="canonical" href="https://langfordcollege.com/it_progression"/>
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