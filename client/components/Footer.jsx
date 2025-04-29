import React from 'react';
import { FaWhatsapp, FaTiktok, FaInstagram, FaYoutube, FaFacebookF, FaLinkedin } from "react-icons/fa";

export const Footer = () => {

    const FACEBOOK_LIKE = process.env.NEXT_PUBLIC_FB_LINK;
    const TIKTOK_LINK = process.env.NEXT_PUBLIC_TIKTOK_LINK;
    const INSTAGRAM_LINK = process.env.NEXT_PUBLIC_INSTAGRAM_LINK;
    const YOUTUBE_LINK = process.env.NEXT_PUBLIC_YOUTUBE_LINK;

    return (
        <footer className="bg-white text-black w-full h-[80vh] px-[10vw] capitalize">
            <div className="w-full h-full mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 gap-3 flex flex-col">
                    {/* <img src="/Logo.svg" alt="University of Chester" className="w-40 mb-4" /> */}
                    <span className='text-3xl font-bold text-red-500'>Langford Collage</span>
                    <p className="text-[18px] mt-3">University of Chester<br />Parkgate Road<br />Chester<br />CH1 4BJ</p>
                    <div className="flex mt-4 space-x-5">
                        <a href={`${FACEBOOK_LIKE}`}><FaFacebookF size={25} /></a>
                        <a href={`${INSTAGRAM_LINK}`}><FaInstagram size={25} /></a>
                        <a href={`${TIKTOK_LINK}`}><FaTiktok size={25} /></a>
                        <a href={`${YOUTUBE_LINK}`}><FaYoutube size={25} /></a>
                        <a href={`${FACEBOOK_LIKE}`}><FaLinkedin size={25} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Quick links</h4>
                    <ul className="space-y-2 text-[18px]">
                        <li><a href="/individual/how_will_you_learn">How will you learn</a></li>
                        <li><a href="/individual/our_hubs">our hubs</a></li>
                        <li><a href="/individual/top-up_degree">top up degree</a></li>
                        <li><a href="/individual/blog">blog</a></li>
                        <li><a href="/individual/testimonial">testimonial</a></li>
                        <li><a href="/about">about us</a></li>
                    </ul>
                </div>

                <div className='col-span-2 w-full'>
                    <h4 className="font-semibold mb-3">About Us,</h4>
                    <span className='text-[18px]'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, ea. Libero animi omnis sunt tenetur modi! Saepe aut fugiat pariatur repellendus accusamus quam tempore, eum est voluptas illo totam quod!
                    </span>
                </div>
            </div>

            <div className="bg-black text-white text-center py-4 text-sm">
                <span>Copyright © 2025 KDsolution All Rights Reserved.</span>
            </div>
        </footer>
    );
};
