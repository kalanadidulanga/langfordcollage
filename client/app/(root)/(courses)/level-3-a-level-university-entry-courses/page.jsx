"use client";
import {Footer} from '@/components/Footer';
import Header from '@/components/Header';
import React, {useEffect, useState} from 'react'
import Hero from './hero-section';
import CourseSection from './course-section';
import FAQ from '../../individual/how_will_you_learn/faq-section';
import Body from './body';
import Head from "next/head";


function page() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (isClient) {
        return (
            <>
                <Head>
                    <title>Langford College</title>
                    <meta name="description" content="A Smarter Route To a British Degree"/>
                    <meta name="keywords"
                          content="langfordcollege, langford college, Langford College, Uk Campus , uk campus , uk , ukcampus , campus , digree, langford , Langford , British Degree, British , Digree , level-3-a-level-university-entry-courses , level 3 a/level university entry courses , A/L Entry Counrse , courses"/>
                    <meta property="og:title" content="Langford College"/>
                    <meta property="og:description" content="A Smarter Route To a British Degree"/>
                    <meta property="og:image" content="https://api.langfordcollege.com/uploads/university/1749200734166.jpg"/>
                    <meta property="og:url" content="https://langfordcollege.com/level-3-a-level-university-entry-courses"/>
                    <link rel="canonical" href="https://langfordcollege.com/level-3-a-level-university-entry-courses"/>
                </Head>
                <div className='try-for-free'>
                    <div className="content">
                        <Header/>
                        <Hero/>
                    </div>
                </div>
                <CourseSection/>
                <Body/>
                <FAQ/>
                <Footer/>
            </>
        );
    }
}

export default page