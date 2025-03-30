"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, { use, useEffect, useState } from 'react'
import TestimonialHero from '../hero-section';
import ViewBody from './view-body';
import axios from 'axios';
function page({params}) {
  const unwrappedParams = use(params);
    const id = unwrappedParams?.id;
  const [isClient, setIsClient] = useState(false);

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    setIsClient(true);
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/serchTestimonialBySlug?slug=${id}`);
      if(res?.data?.status){
        setTestimonial(res.data.data);
      }else{
        setTestimonial([]);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.error);
      window.location.replace("/");
    }
  }

  if (isClient) {
    return (
      <>
        <div className='testimonial-bg'>
          <div className="content">
            <Header />
            <TestimonialHero />
          </div>
        </div>
        <ViewBody data={testimonial}/>
        <Footer />
      </>
    );
  }
}

export default page