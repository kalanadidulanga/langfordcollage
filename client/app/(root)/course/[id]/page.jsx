"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react'
import Hero from './hero';
import CourseBody from './body';
import RequestACource from '@/app/(home)/request-a-cource-section';
import CourseDetailBody from './detail-body';
import WhyEnroll from './why-enroll-section';

function page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return (
      <>
        <div className='blog-bg'>
          <div className="content">
            <Header />
            <Hero name={"Course Level 1"}/>
          </div>
        </div>
        <CourseBody/>
        <CourseDetailBody/>
        <WhyEnroll/>
        <RequestACource/>
        <div className='bg-white p-5'></div>
        <Footer />
      </>
    );
  }
}

export default page