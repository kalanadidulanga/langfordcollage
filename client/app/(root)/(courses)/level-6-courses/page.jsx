"use client";
import {Footer} from '@/components/Footer';
import Header from '@/components/Header';
import React, {useEffect, useState} from 'react'
import Hero from './hero-section';
import CourseSection from './course-section';
import FAQ from '../../individual/how_will_you_learn/faq-section';
import Body from './body';


function page() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (isClient) {
        return (
            <>
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