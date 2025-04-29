import { CourceCard } from '@/components/Cource-Card';
import React from 'react'

function WhyEnroll() {
    return (
        <>
            <div className='w-full lg:pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 capitalize'>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw]'>
                        Why enroll with
                    </span>
                    <span className='text-[6vw] font-bold lg:text-[3vw]'>
                        Langford Collage?
                    </span>

                    <div className='w-full bg-white text-gray-500 flex justify-center'>
                        <div className='bg-white pt-10 pb-8 grid grid-cols-1 lg:grid-cols-4 justify-start gap-8'>
                            <div className='w-full flex flex-col bg-[#F4C023]'>
                                <img src="/Images/why-enroll-1.svg" alt="courses_image" className='w-full h-[250px] object-cover' />
                                <span className='text-[18px] text-black  px-3 py-2 font-medium'>
                                    Last year 355 students graduated from Online
                                    Langford collage
                                </span>
                            </div>
                            <div className='w-full flex flex-col bg-[#F4C023]'>
                                <img src="/Images/why-enroll-2.svg" alt="courses_image" className='w-full h-[250px] object-cover' />
                                <span className='text-[18px] text-black  px-3 py-2 font-medium'>
                                    13 years of educating students online
                                </span>
                            </div>
                            <div className='w-full flex flex-col bg-[#F4C023]'>
                                <img src="/Images/why-enroll-3.svg" alt="courses_image" className='w-full h-[250px] object-cover' />
                                <span className='text-[18px] text-black  px-3 py-2 font-medium'>
                                    Over 15,000 students are currently enrolled at OBS
                                </span>
                            </div>
                            <div className='w-full flex flex-col bg-[#F4C023]'>
                                <img src="/Images/why-enroll-4.svg" alt="courses_image" className='w-full h-[250px] object-cover' />
                                <span className='text-[18px] text-black  px-3 py-2 font-medium'>
                                    Over 25 expert tutors available to help you succeed
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default WhyEnroll;