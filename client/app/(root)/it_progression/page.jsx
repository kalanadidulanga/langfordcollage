"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react'
import AboutHero from './about-hero-sections';
import Body from './body';

function page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return (
      <>
        <div className='about-bg'>
          <div className="content">
            <Header />
            <AboutHero />
          </div>
        </div>
        <Body/>
        <Footer />
      </>
    );
  }
}

export default page