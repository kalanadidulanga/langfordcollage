"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react'

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
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default page