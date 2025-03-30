"use client";
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, { use, useEffect, useState } from 'react'
import Hero from './hero';
import CourseBody from './body';
import RequestACource from '@/app/(home)/request-a-cource-section';
import CourseDetailBody from './detail-body';
import WhyEnroll from './why-enroll-section';
import axios from 'axios';

function page({ params }) {
  // Unwrap the `params` promise using React.use()
  const unwrappedParams = use(params);
  const id = unwrappedParams?.id;
  const [isClient, setIsClient] = useState(false);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [course, setCourse] = useState([]);

  useEffect(() => {
    setIsClient(true);
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/serchCourseBySlug?slug=${id}`);
      if (res?.data?.status) {
        setCourse(res.data.data);
      } else {
        setCourse([]);
      }
    } catch (error) {
      window.location.replace("/");
    }
  }

  if (isClient) {
    return (
      <>
        <div className='blog-bg'>
          <div className="content">
            <Header />
            <Hero name={course?.course_name} />
          </div>
        </div>
        <CourseBody data={course} />
        <CourseDetailBody data={course} />
        <WhyEnroll />
        <RequestACource />
        <div className='bg-white p-5'></div>
        <Footer />
      </>
    );
  }
}

export default page