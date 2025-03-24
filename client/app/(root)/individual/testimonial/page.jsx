"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react'
import TestimonialHero from './hero-section';
import Body from './body';
function page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return (
      <>
        <div className='testimonial-bg'>
          <div className="content">
            <Header />
            <TestimonialHero />
          </div>
        </div>
        <Body/>
        <Footer />
      </>
    );
  }
}

export default page