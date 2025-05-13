"use client";
import {Footer} from '@/components/Footer';
import Header from '@/components/Header';
import React, {useEffect, useState} from 'react'
import AboutHero from './about-hero-sections';
import BackgroundSlider from "@/components/BackgroundSlider";
import EducationalPathways from "@/app/(root)/why_langford_college/educational_pathways";
import Section1 from "@/app/(root)/why_langford_college/section_1";
import Section2 from "@/app/(root)/why_langford_college/section_2";

function page() {
    const [isClient, setIsClient] = useState(false);

    const images = [
        '/Images/why_langforg.jpg',
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
                <EducationalPathways/>
                <Section1/>
                <Section2/>
                <Footer/>
            </>
        );
    }
}

export default page