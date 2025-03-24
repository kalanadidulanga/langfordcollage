import { ArticleCard } from '@/components/Article-Card';
import { CourceCard } from '@/components/Cource-Card';
import { TestimonialCard } from '@/components/Testimonial-Card';
import React from 'react'

function LeatestTestimonial() {
    return (
        <>
            <div className='w-full lg:pb-10 pt-10 bg-white text-black pl-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw]'>
                        Latest Testimonials
                    </span>
                    <div className='w-full bg-white text-gray-500 flex justify-center'>
                        <div className='bg-white pt-10 pb-8 flex flex-row justify-start overflow-x-scroll gap-8 scrollbar-hide snap-x snap-mandatory'>
                            <TestimonialCard/>
                            <TestimonialCard/>
                            <TestimonialCard/>
                            <TestimonialCard/>
                            <TestimonialCard/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default LeatestTestimonial;