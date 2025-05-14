"use client";
import {Footer} from '@/components/Footer';
import Header from '@/components/Header';
import React, {use, useEffect, useState} from 'react'
import BlogHero from '../blog-hero-section';
import SingleViewBody from './single-view-body';
import axios from 'axios';
import toast from 'react-hot-toast';

function page({params}) {
    // Unwrap the `params` promise using React.use()
    const unwrappedParams = use(params);
    const id = unwrappedParams?.id;
    const [isClient, setIsClient] = useState(false);
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const [blog, setBlog] = useState([]);
    const [isClientLoading, setIsClientLoading] = useState(true);

    useEffect(() => {
        setIsClient(true);
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/serchBlogBySlug?slug=${id}`);
            if (res?.data?.status) {
                setBlog(res.data.data);
                setIsClientLoading(false);
            } else {
                setBlog([]);
                setIsClientLoading(false);
            }
        } catch (error) {
            setIsClientLoading(false);
            console.error(error);
            toast.error(error?.response?.data?.error);
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
                    <div className='blog-bg'>
                        <div className="content">
                            <Header/>
                            <BlogHero/>
                        </div>
                    </div>
                    <SingleViewBody data={blog}/>
                    <Footer/>
                </>
            );
        }
    }
}

export default page