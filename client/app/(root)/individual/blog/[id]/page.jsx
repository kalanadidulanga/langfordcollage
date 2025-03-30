"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, { use, useEffect, useState } from 'react'
import BlogHero from '../blog-hero-section';
import SingleViewBody from './single-view-body';
import axios from 'axios';
import toast from 'react-hot-toast';
function page({ params }) {
  // Unwrap the `params` promise using React.use()
  const unwrappedParams = use(params);
  const id = unwrappedParams?.id;
  const [isClient, setIsClient] = useState(false);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    setIsClient(true);
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/serchBlogBySlug?slug=${id}`);
      if(res?.data?.status){
        setBlog(res.data.data);
      }else{
        setBlog([]);
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
        <div className='blog-bg'>
          <div className="content">
            <Header />
            <BlogHero />
          </div>
        </div>
        <SingleViewBody data={blog}/>
        <Footer />
      </>
    );
  }
}

export default page