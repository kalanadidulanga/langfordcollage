"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react'
import IndividualHero from './individual-hero-section';
import HowTopupDegreeWork from './how-topup-degree-work-section';
import WayToGraduate from './way-to-graduate-section';
import UnivercitiesInWorld from './univercities-in-world-section';
import ProgressionOptions from './progression-options-section';
import RequestACource from '@/app/(home)/request-a-cource-section';

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
            <IndividualHero/>
          </div>
        </div>
        <HowTopupDegreeWork/>
        <WayToGraduate/>
        <UnivercitiesInWorld/>
        <ProgressionOptions/>
        <RequestACource/>
        <div className='bg-white h-[15vh] w-full'></div>
        <Footer />
      </>
    );
  }
}

export default page