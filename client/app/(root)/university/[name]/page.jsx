"use client";
import {Footer} from '@/components/Footer';
import Header from '@/components/Header';
import React, {use, useEffect, useState} from 'react'
import Hero from './hero';
import axios from 'axios';
import UniBody from "@/app/(root)/university/[name]/body";
import BackgroundSlider from "@/components/BackgroundSlider";

function page({params}) {
    // Unwrap the `params` promise using React.use()
    const unwrappedParams = use(params);
    const id = unwrappedParams?.name;
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
            const res = await axios.get(`${BASE_URL}/api/serchUniByTitle?title=${id}`);
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
                    <div className='blog-bg'>
                        <div className="content">
                            <Header/>
                            <div className='w-full h-[60vh] p-5 flex flex-col justify-center items-center gap-3'>
                                <div
                                    className="w-28 h-28 border-6 border-blue-200 border-t-[#ff0000] rounded-full animate-spin"></div>
                                <span className='text-2xl'>Loading...</span>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </>
            );
        } else {
            return (
                <>
                    <div className='relative w-full min-h-[100vh] overflow-hidden'>
                        <BackgroundSlider images={[course?.banner_path]}/>
                        <div className="content">
                            <Header/>
                            <Hero name={course?.title}/>
                        </div>
                    </div>
                    <UniBody data={course}/>
                    <Footer/>
                </>
            );
        }
    }
}

export default page