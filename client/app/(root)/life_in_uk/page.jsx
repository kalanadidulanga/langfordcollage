"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react'
import AboutHero from './about-hero-sections';
import Section1 from "@/app/(root)/life_in_uk/section_1";

function page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return (
      <>
        <div className='life-bg'>
          <div className="content">
            <Header />
            <AboutHero />
          </div>
        </div>
        <Section1/>
        <Footer />
      </>
    );
  }
}

export default page