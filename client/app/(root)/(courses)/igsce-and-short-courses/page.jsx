"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, {useEffect, useState } from 'react'
import Hero from './hero-section';
import CourseSection from './course-section';
import FAQ from './faq-section';
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
            <Header />
            <Hero/>
          </div>
        </div>
        <Body/>
        <CourseSection/>
        <FAQ/>
        <Footer />
      </>
    );
  }
}

export default page