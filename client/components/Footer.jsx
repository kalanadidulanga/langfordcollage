import React from 'react';
import { FaTiktok, FaInstagram, FaYoutube, FaFacebookF, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    const FACEBOOK_LIKE = process.env.NEXT_PUBLIC_FB_LINK;
    const TIKTOK_LINK = process.env.NEXT_PUBLIC_TIKTOK_LINK;
    const INSTAGRAM_LINK = process.env.NEXT_PUBLIC_INSTAGRAM_LINK;
    const YOUTUBE_LINK = process.env.NEXT_PUBLIC_YOUTUBE_LINK;
    const LINKDIN_LINK = process.env.NEXT_PUBLIC_LINKDIN_LINK;

    return (
        <div className="flex items-center justify-center h-screen w-full border-t">
            <footer className="bg-white text-black w-full lg:h-full capitalize flex flex-col">
                <div className="flex-grow w-full grid grid-cols-1 md:grid-cols-4 gap-8 px-10 lg:px-30 py-30">
                    <div className="col-span-1 gap-3 flex flex-col">
                        <div className='w-[50%] lg:w-[35%] h-[20vh]'>
                            <img src="/Logo.svg" alt="Langford Collage" className="w-full h-full" />
                        </div>
                        <p className="text-[15px] mt-3 lg:mt-0">128 City Road, <br /> London, <br /> United
                            Kingdom, <br /> EC1V 2NX</p>
                        <div className="flex mt-4 space-x-7">
                            <a href={`${FACEBOOK_LIKE}`} target='_blank'><FaFacebookF size={25} /></a>
                            <a href={`${INSTAGRAM_LINK}`} target='_blank'><FaInstagram size={25} /></a>
                            <a href={`${TIKTOK_LINK}`} target='_blank'><FaTiktok size={25} /></a>
                            <a href={`${YOUTUBE_LINK}`} target='_blank'><FaYoutube size={25} /></a>
                            <a href={`${LINKDIN_LINK}`} target='_blank'><FaLinkedin size={25} /></a>
                        </div>
                    </div>

                    <div className='col-span-1 mt-5'>
                        <h4 className="font-semibold mb-3 text-[18px] text-[#2e2e27]">Quick links</h4>
                        <ul className="space-y-2 text-[15px]">
                            <li><a href="/individual/how_will_you_learn">How will you learn</a></li>
                            <li><a href="/individual/our_hubs">our hubs</a></li>
                            <li><a href="/individual/top-up_degree">top up degree</a></li>
                            <li><a href="/individual/blog">blog</a></li>
                            <li><a href="/individual/testimonial">testimonial</a></li>
                            <li><a href="/about">about us</a></li>
                        </ul>
                    </div>

                    <div className='col-span-1 mt-5'>
                        <h4 className="font-semibold mb-3 text-[18px] text-[#2e2e27]">General enquiries</h4>
                        <ul className="space-y-2 text-[15px]">
                            <li><a href="mailto:enquiries@wbs.ac.uk" target="_blank" className={`hover:underline`}>enquiries@wbs.ac.uk</a></li>
                            <li><a href="tel:+442476524306" target="_blank" className={`hover:underline`}>+442476524306</a></li>
                        </ul>
                        <h4 className="font-semibold mb-3 text-[18px] mt-5 text-[#2e2e27]">Press Office</h4>
                        <ul className="space-y-2 text-[15px]">
                            <li><a href="mailto:press@wbs.ac.uk" target="_blank" className={`hover:underline`}>press@wbs.ac.uk</a></li>
                            <li><a href="tel:+442476573967" target="_blank" className={`hover:underline`}>+442476573967</a></li>
                        </ul>
                    </div>
                    <div className='col-span-1 w-full lg:mt-5 mb-5'>
                        <h4 className="font-semibold mb-3 text-[18px] text-[#2e2e27]">About Us,</h4>
                        <span className='text-[15px]'>
                        Langford College offers flexible, affordable online learning pathways for students worldwide, helping them fast-track undergraduate and postgraduate qualifications with full support and interactive tools for professional success.
                        </span>
                    </div>
                </div>
                <div className="bg-black text-white text-center py-4 text-sm mt-auto">
                    <span>Copyright © 2024 KDsolution All Rights Reserved.</span>
                </div>
            </footer>

        </div>
    );
};