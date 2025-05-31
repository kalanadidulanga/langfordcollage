"use client";
import axios from 'axios';
import React, {useState} from 'react'
import toast from 'react-hot-toast';
import HtmlViewer from "@/components/HtmlViewer";

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
                    <div className='w-full flex flex-col mt-10'>
                        <span className='text-[6vw] lg:text-[2vw] text-black font-sans'>
                            {data?.title}
                        </span>
                    </div>
                    <div className='w-full grid grid-cols-1 lg:grid-cols-3 text-[16px] text-black mt-5 pt-5 pb-5 mb-5 gap-8 bg-[#ecf0ff] px-2'>
                        <div className='w-full flex flex-col gap-2 pb-3 border-b'>
                            <span className='font-sans'>Location:</span>
                            <span>{data?.location ? data?.location : "N/A"}</span>
                        </div>
                        <div className='w-full flex flex-col gap-2 pb-3 border-b'>
                            <span className='font-sans'>Number Of Students:</span>
                            <span>{data?.no_of_students ? data?.no_of_students : "N/A"}</span>
                        </div>
                        <div className='w-full flex flex-col gap-2 pb-3 border-b'>
                            <span className='font-sans'>Intake Available :</span>
                            <span>{data?.intake_available ? data?.intake_available : "N/A"}</span>
                        </div>
                        <div className='w-full lg:col-span-3 flex flex-col gap-2 pb-3 border-b'>
                            <span className='font-sans'>Unique Facilities:</span>
                            <div
                                className='w-fulltext-black mt-3'
                                >
                                <HtmlViewer htmlContent={data?.unique_facility}/>
                            </div>
                        </div>
                    </div>
                    <div
                        className='w-full text-black mt-3'
                        >
                        <HtmlViewer htmlContent={data?.description}/>
                    </div>
                    <div className='w-full flex items-center justify-start gap-3 mt-5'>
                        <a className='description2 text-[14px] lg:text-[16px] lg:description text-blue-500 underline w-full'
                           href={data?.link} target={`_blank`}>
                            Visit University
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UniBody