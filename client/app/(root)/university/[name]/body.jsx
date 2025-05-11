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
                        <span className='text-[17px] text-black description'>
                            Upon successfully completing a pathway program at Langford College, which includes Level 3 (Foundation), Level 4 and 5 (HND), or Level 7 (MBA), you will have the opportunity to complete your final year at the following renowned UK university. This will allow you to graduate with full working rights, further enhancing your academic and professional prospects.
                        </span>
                    </div>
                    ]
                    <div className='w-full flex flex-col'>
                        <span className='text-[2vw] text-black font-sans'>
                            {data?.title}
                        </span>
                    </div>
                    <div className='w-full flex flex-col description text-black mt-3'
                         dangerouslySetInnerHTML={{__html: data?.description}}/>
                    <div className='w-full flex items-center gap-3 mt-3'>
                        <span className={`text-[18px]  font-sans text-black`}>URl -</span>
                        <a className='text-[18px] text-black font-sans underline' href={data?.link} target={`_blank`}>
                            {data?.link}
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UniBody