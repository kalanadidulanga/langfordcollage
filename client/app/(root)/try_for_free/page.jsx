"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, {useEffect, useState } from 'react'
import FreeHero from './free-hero-section';
import StartYourJourny from './start-your-journy-section';
import TryForFree from './body';

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
            <FreeHero/>
          </div>
        </div>
        <TryForFree/>
        <StartYourJourny/>
        <div className='bg-white p-10'></div>
        <Footer />
      </>
    );
  }
}

export default page