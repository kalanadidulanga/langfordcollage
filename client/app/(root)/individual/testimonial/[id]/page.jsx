"use client";
import {Footer} from '@/components/Footer';
import Header from '@/components/Header';
import React, {use, useEffect, useState} from 'react'
import TestimonialHero from '../hero-section';
import ViewBody from './view-body';
import axios from 'axios';
import BlogHero from "@/app/(root)/individual/blog/blog-hero-section";
import SingleViewBody from "@/app/(root)/individual/blog/[id]/single-view-body";

function page({params}) {
    const unwrappedParams = use(params);
    const id = unwrappedParams?.id;
    const [isClient, setIsClient] = useState(false);

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const [testimonial, setTestimonial] = useState([]);
    const [isClientLoading, setIsClientLoading] = useState(true);

    useEffect(() => {
        setIsClient(true);
        // loadData();
    }, []);

    const loadData = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/serchTestimonialBySlug?slug=${id}`);
            if (res?.data?.status) {
                setTestimonial(res.data.data);
                setIsClientLoading(false);
            } else {
                setTestimonial([]);
                setIsClientLoading(false);
            }
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.error);
            window.location.replace("/");
            setIsClientLoading(false);
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
                    <div className='testimonial-bg'>
                        <div className="content">
                            <Header/>
                            <TestimonialHero/>
                        </div>
                    </div>
                    <ViewBody data={testimonial}/>
                    <Footer/>
                </>
            );
        }
    }
}

export default page