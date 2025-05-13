"use client";
import {Footer} from '@/components/Footer';
import Header from '@/components/Header';
import React, {useEffect, useState} from 'react'
import AboutHero from './about-hero-sections';
import Body from './body';
import BackgroundSlider from "@/components/BackgroundSlider";

function page() {
    const [isClient, setIsClient] = useState(false);

    const images = [
        '/Images/hospitality_progression.jpg',
    ];

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (isClient) {
        return (
            <>
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