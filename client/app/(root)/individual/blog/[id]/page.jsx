"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react'
import BlogHero from '../blog-hero-section';
import SingleViewBody from './single-view-body';
function page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return (
      <>
        <div className='blog-bg'>
          <div className="content">
            <Header />
            <BlogHero/>
          </div>
        </div>
        <SingleViewBody/>
        <Footer />
      </>
    );
  }
}

export default page