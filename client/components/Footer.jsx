import React from 'react'

export const Footer = () => {
    const BASE_MOBILE = process.env.NEXT_PUBLIC_BASE_MOBILE;
    return (
        <>
            <footer>
                <div className='w-full hsrc flex font-sans bg-[#F7FAFF] text-black flex-col gap-3 justify-center items-center pt-5 capitalize'>
                    <span className='text-[#D80E03] text-lg font-semibold'>Langford Collage</span>
                    <div className='w-full md:w-[470px] text-center p-5'>
                        <span className='text-base text-[#000000CC]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                    </div>
                    <div className='w-full justify-center flex flex-wrap gap-5  mt-3 lg:mt-5 text-[16px]'>
                        <a href='/'>Home</a>
                        <a href='about'>About</a>
                        <a href='contact_us'>Contact Us</a>
                        <a href=''>Course</a>
                        <a href=''>Individuals</a>
                    </div>
                    <div className='w-full justify-center flex flex-col lg:flex-row gap-3 lg:gap-10 text-[16px] mt-3 mb-5'>
                        <div className='flex gap-1 items-center justify-center'>
                            <img src="/Icon/location.png" alt="" className='w-4 h-4' />
                            <a href='' target='_blank'>489, Pallama Road, Chillaw, Bangadeniya</a>
                        </div>
                        <div className='flex gap-1 items-center justify-center'>
                            <img src="/Icon/call.png" alt="" className='w-4 h-4' />
                            <a href={`tel:${BASE_MOBILE}`} target='_blank'>{BASE_MOBILE?.charAt(0) === '+' ? `0` + BASE_MOBILE.slice(3) : BASE_MOBILE}</a>
                        </div>
                        <div className='flex gap-1 items-center justify-center'>
                            <img src="/Icon/email.png" alt="" className='w-4 h-4' />
                            <a href='mailto:support@langfordcollage.com' target='_blank'>info@langfordcollage.com</a>
                        </div>
                    </div>
                    <div className='w-full justify-center flex gap-5 text-[16px] bg-black p-3 py-4'>
                        <span className='text-white'>Copyright © 2025 KDsolution All Rights Reserved.</span>
                    </div>
                </div>
            </footer>
        </>
    )
}
