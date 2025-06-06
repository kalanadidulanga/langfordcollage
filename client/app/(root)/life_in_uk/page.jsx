"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react'
import AboutHero from './about-hero-sections';
import Section1 from "@/app/(root)/life_in_uk/section_1";
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
              <title>Langford College | Life In UK</title>
              <meta name="description" content="A Smarter Route To a British Degree"/>
              <meta name="keywords"
                    content="langfordcollege, langford college, Langford College, Uk Campus , uk campus , uk , ukcampus , campus , digree, langford , Langford , British Degree, British , Digree"/>
              <meta property="og:title" content="Langford College | Life In UK<"/>
              <meta property="og:description" content="A Smarter Route To a British Degree"/>
              <meta property="og:image" content="https://api.langfordcollege.com/uploads/university/1749200734166.jpg"/>
              <meta property="og:url" content="https://langfordcollege.com/life_in_uk"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="canonical" href="https://langfordcollege.com/life_in_uk"/>
          </Head>
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