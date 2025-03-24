"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react'
import OurHubsHero from './our-hubs-hero-section';
function page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return (
      <>
        <div className='ourHubs-bg'>
          <div className="content">
            <Header />
            <OurHubsHero/>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default page