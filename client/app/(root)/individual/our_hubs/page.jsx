"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react'
import OurHubsHero from './our-hubs-hero-section';
import Body from "./body";
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
              <title>Langford College | Our Hubs</title>
              <meta name="description" content="A Smarter Route To a British Degree"/>
              <meta name="keywords"
                    content="langfordcollege, langford college, Langford College, Uk Campus , uk campus , uk , ukcampus , campus , digree, langford , Langford , British Degree, British , Digree"/>
              <meta property="og:title" content="Langford College | Our Hubs"/>
              <meta property="og:description" content="A Smarter Route To a British Degree"/>
              <meta property="og:image" content="https://api.langfordcollege.com/uploads/university/1749200734166.jpg"/>
              <meta property="og:url" content="https://langfordcollege.com/individual/our_hubs"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="canonical" href="https://langfordcollege.com/individual/our_hubs"/>
          </Head>
        <div className='ourHubs-bg'>
          <div className="content">
            <Header />
            <OurHubsHero/>
          </div>
        </div>
        <Body/>
        <Footer />
      </>
    );
  }
}

export default page