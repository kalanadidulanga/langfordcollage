"use client";
import {Footer} from '@/components/Footer';
import Header from '@/components/Header';
import React, {use, useEffect, useState} from 'react'
import Hero from './hero';
import CourseBody from './body';
import RequestACource from '@/app/(home)/request-a-cource-section';
import CourseDetailBody from './detail-body';
import WhyEnroll from './why-enroll-section';
import axios from 'axios';
import NSS from '@/app/(home)/nss-section';
import BackgroundSlider from "@/components/BackgroundSlider";

function page({params}) {
    // Unwrap the `params` promise using React.use()
    const unwrappedParams = use(params);
    const id = unwrappedParams?.id;
    const [isClient, setIsClient] = useState(false);
    const [isClientLoading, setIsClientLoading] = useState(true);
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
                setIsClientLoading(false);
            } else {
                setCourse([]);
                setIsClientLoading(false);
            }
        } catch (error) {
            setIsClientLoading(false);
            window.location.replace("/");
        }
    }

    if (isClient) {
        if (isClientLoading) {
            return (
                <>
                    <div className='bg-gray-400 animate-pulse'>
                        <div className="content">
                            <Header/>
                            <div className='w-full h-[75vh] p-5 flex flex-col justify-center items-center gap-3'>
                                <div
                                    className="w-28 h-28 border-6 border-blue-200 border-t-[#ff0000] rounded-full animate-spin"></div>
                                <span className='text-2xl'>Loading...</span>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className='relative w-full min-h-screen overflow-hidden'>
                        <BackgroundSlider images={[course?.banner_path]}/>
                        <div className="content">
                            <Header/>
                            <Hero name={course?.course_name}/>
                        </div>
                    </div>
                    <CourseBody data={course}/>
                    {/* <NSS/> */}
                    <CourseDetailBody data={course}/>
                    {/* <WhyEnroll /> */}
                    <div className='bg-white p-10'></div>
                    <RequestACource/>
                    <div className='bg-white p-5'></div>
                    <Footer/>
                </>
            );
        }
    }
}

export default page