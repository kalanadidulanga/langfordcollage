"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react'
import AboutHero from './about-hero-sections';
import AboutSecond from '../about/about-second-section';
import OurTeam from '../about/about-our-team';
import QualityMonitoring from '../about/quality-monitoring-section';
import OFQUAL from '../about/OFQUAL-section';
import PartnerUnivercity from '../about/partner-univercity-section';
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