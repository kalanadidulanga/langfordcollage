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
import Head from "next/head";

function page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return (
      <>
          <Head>
              <title>Langford College | Top Up Digree</title>
              <meta name="description" content="A Smarter Route To a British Degree"/>
              <meta name="keywords"
                    content="langfordcollege, langford college, Langford College, Uk Campus , uk campus , uk , ukcampus , campus , digree, langford , Langford , British Degree, British , Digree"/>
              <meta property="og:title" content="Langford College | Top Up Digree"/>
              <meta property="og:description" content="A Smarter Route To a British Degree"/>
              <meta property="og:image" content="https://api.langfordcollege.com/uploads/university/1749200734166.jpg"/>
              <meta property="og:url" content="https://langfordcollege.com/individual/top-up_degree"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="canonical" href="https://langfordcollege.com/individual/top-up_degree"/>
          </Head>
        <div className='topup-bg'>
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