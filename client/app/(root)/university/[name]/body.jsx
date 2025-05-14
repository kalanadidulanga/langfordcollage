"use client";
import axios from 'axios';
import React, {useState} from 'react'
import toast from 'react-hot-toast';

function UniBody({data}) {

    return (
        <>
            <div className='w-full pt-20 pb-20 bg-white grid grid-cols-1 gap-10 px-[10vw]'>
                <div className='w-full flex flex-col'>
                    <div className='w-full flex flex-col'>
                        <span className='text-black description2 text-[14px] lg:text-[16px] lg:description'>
                            Upon successfully completing a pathway program at Langford College, which includes Level 3 (Foundation), Level 4 and 5 (HND), or Level 7 (MBA), you will have the opportunity to complete your final year at the following renowned UK university. This will allow you to graduate with full working rights, further enhancing your academic and professional prospects.
                        </span>
                    </div>
                    ]
                    <div className='w-full flex flex-col'>
                        <span className='text-[6vw] lg:text-[2vw] text-black font-sans'>
                            {data?.title}
                        </span>
                    </div>
                    <div className='w-full flex flex-col description2 text-[14px] lg:text-[16px] lg:description text-black mt-3'
                         dangerouslySetInnerHTML={{__html: data?.description}}/>
                    <div className='w-full flex items-center justify-start gap-3 mt-5'>
                        {/*<span className={`description2 text-[14px] lg:text-[18px] lg:description  font-sans text-black w-[10%] lg:w-[4%]`}>URl -</span>*/}
                        {/*<a className='text-[16px] text-blue-500 underline w-full hidden lg:block' href={data?.link} target={`_blank`}>*/}
                        {/*    {data?.link}*/}
                        {/*</a>*/}
                        <a className='description2 text-[14px] lg:text-[16px] lg:description text-blue-500 underline w-full' href={data?.link} target={`_blank`}>
                            Visit University
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UniBody