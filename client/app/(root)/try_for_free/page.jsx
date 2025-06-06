"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, {useEffect, useState } from 'react'
import FreeHero from './free-hero-section';
import StartYourJourny from './start-your-journy-section';
import TryForFree from './body';
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
              <title>Langford College | Try For Free</title>
              <meta name="description" content="A Smarter Route To a British Degree"/>
              <meta name="keywords"
                    content="langfordcollege, langford college, Langford College, Uk Campus , uk campus , uk , ukcampus , campus , digree, langford , Langford , British Degree, British , Digree"/>
              <meta property="og:title" content="Langford College | Try For Free"/>
              <meta property="og:description" content="A Smarter Route To a British Degree"/>
              <meta property="og:image" content="https://api.langfordcollege.com/uploads/university/1749200734166.jpg"/>
              <meta property="og:url" content="https://langfordcollege.com/try_for_free"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="canonical" href="https://langfordcollege.com/try_for_free"/>
          </Head>
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