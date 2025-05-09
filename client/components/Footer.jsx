import React from 'react';
import { FaTiktok, FaInstagram, FaYoutube, FaFacebookF, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    const FACEBOOK_LIKE = process.env.NEXT_PUBLIC_FB_LINK;
    const TIKTOK_LINK = process.env.NEXT_PUBLIC_TIKTOK_LINK;
    const INSTAGRAM_LINK = process.env.NEXT_PUBLIC_INSTAGRAM_LINK;
    const YOUTUBE_LINK = process.env.NEXT_PUBLIC_YOUTUBE_LINK;
    const LINKDIN_LINK = process.env.NEXT_PUBLIC_LINKDIN_LINK;

    return (
        <div className="flex items-center justify-center lg:h-screen w-full border-t lg:mt-0">
            <footer className="bg-white text-black w-full lg:h-full  flex flex-col">
                <div className="flex-grow w-full grid grid-cols-1 md:grid-cols-4 gap-8 px-10 lg:px-30 py-5 lg:py-30">
                    <div className="col-span-1 gap-3 flex flex-col">
                        <div className='w-[50%] lg:w-[35%] h-[20vh]'>
                            <img src="/Logo.svg" alt="Langford Collage" className="w-full h-full" />
                        </div>
                        <p className="text-[15px] mt-3 lg:mt-0">128 City Road, <br /> London, <br /> United
                            Kingdom, <br /> EC1V 2NX</p>
                        <div className="flex mt-4 space-x-7">
                            <a href={`${FACEBOOK_LIKE}`} target='_blank' className={`hover:scale-125 duration-200`}><FaFacebookF size={25} /></a>
                            <a href={`${INSTAGRAM_LINK}`} target='_blank' className={`hover:scale-125 duration-200`}><FaInstagram size={25} /></a>
                            <a href={`${TIKTOK_LINK}`} target='_blank' className={`hover:scale-125 duration-200`}><FaTiktok size={25} /></a>
                            <a href={`${YOUTUBE_LINK}`} target='_blank' className={`hover:scale-125 duration-200`}><FaYoutube size={25} /></a>
                            <a href={`${LINKDIN_LINK}`} target='_blank' className={`hover:scale-125 duration-200`}><FaLinkedin size={25} /></a>
                        </div>
                    </div>

                    <div className='col-span-1 mt-5'>
                        <h4 className="font-semibold mb-3 text-[#2e2e27] text1">Quick Links</h4>
                        <ul className="space-y-2 text-[15px] capitalize">
                            <li><a href="/individual/how_will_you_learn" className={`hover:underline`}>How will you learn</a></li>
                            <li><a href="/individual/our_hubs" className={`hover:underline`}>our hubs</a></li>
                            <li><a href="/individual/top-up_degree" className={`hover:underline`}>top up degree</a></li>
                            <li><a href="/individual/blog" className={`hover:underline`}>blog</a></li>
                            <li><a href="/individual/testimonial" className={`hover:underline`}>testimonial</a></li>
                            <li><a href="/about" className={`hover:underline`}>about us</a></li>
                        </ul>
                    </div>

                    <div className='col-span-1 mt-5'>
                        <h4 className="font-bold mb-3 text1 text-[#2e2e27]">General Enquiries</h4>
                        <ul className="space-y-2 text-[15px]">
                            <li className='flex gap-3 items-center'>
                                <img src="/Icon/email.png" alt="email" className='w-4 h-4' />
                                <a href="mailto:info@langfordcollege.com" target="_blank" className={`hover:underline`}>info@langfordcollege.com</a>
                            </li>
                            <li className='flex gap-3 items-center'>
                                <img src="/Icon/call.png" alt="call" className='w-4 h-4' />
                                <a href="tel:+447849537739" target="_blank" className={`hover:underline`}>(+44) 7849 537739</a>
                            </li>
                        </ul>
                        {/* <h4 className="font-semibold mb-3 text-[18px] mt-5 text-[#2e2e27]">Press Office</h4>
                        <ul className="space-y-2 text-[15px]">
                            <li className='flex gap-3 items-center'>
                                <img src="/Icon/email.png" alt="email" className='w-4 h-4' />
                                <a href="mailto:press@wbs.ac.uk" target="_blank" className={`hover:underline`}>press@wbs.ac.uk</a>
                            </li>
                            <li className='flex gap-3 items-center'>
                                <img src="/Icon/call.png" alt="call" className='w-4 h-4' />
                                <a href="tel:+442476573967" target="_blank" className={`hover:underline`}>+442476573967</a>
                            </li>
                        </ul> */}
                    </div>
                    <div className='col-span-1 w-full lg:mt-5 mb-5'>
                        <h4 className="font-semibold mb-3 text1 text-[#2e2e27]">About Us,</h4>
                        <span className='text-[15px]'>
                            Langford College offers flexible, affordable online learning pathways for students worldwide, helping them fast-track undergraduate and postgraduate qualifications with full support and interactive tools for professional success.
                        </span>
                    </div>
                </div>
                <div className="bg-black text-white text-center py-4 text-sm mt-auto">
                    <span>Copyright © {new Date().getFullYear()} All Rights Reserved &nbsp;|&nbsp; Developed by KayD Solutions</span>
                </div>
            </footer>

        </div>
    );
};