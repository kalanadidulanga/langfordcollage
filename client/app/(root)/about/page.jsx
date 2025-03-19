"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react'
import AboutHero from './about-hero-sections';
import AboutSecond from './about-second-section';
import OurTeam from './about-our-team';
import QualityMonitoring from './quality-monitoring-section';
import OFQUAL from './OFQUAL-section';
import PartnerUnivercity from './partner-univercity-section';

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
        <AboutSecond/>
        <OurTeam/>
        <QualityMonitoring/>
        <OFQUAL/>
        <PartnerUnivercity/>
        <Footer />
      </>
    );
  }
}

export default page