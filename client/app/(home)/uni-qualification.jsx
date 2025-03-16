import React from 'react'

function UniQualification() {
    return (
        <>
            <div className='w-full pt-16 pb-20 bg-white text-black px-[10vw] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between lg:gap-32 gap-5'>
                <div className='flex items-start text-3xl md:text-[3.6vw] justify-start flex-col'>
                    <span className='font-bold'>Fast tracking learners to a</span>
                    <span className='title2'>University qualification</span>
                </div>
                <div className='flex items-start lg:text-[1.6vw] gap-6 font-bold flex-col'>
                    <span className='border-b-[4px] border-[#E2231A] inline-block leading-[1]'>IGCSE  & short  courses</span>
                    <span className='border-b-[4px] border-[#E2231A] inline-block leading-[1]'>A Level university entry</span>
                    <span className='border-b-[4px] border-[#E2231A] inline-block leading-[1]'>Masters/MBS</span>
                    <span className='border-b-[4px] border-[#E2231A] inline-block leading-[1]'>Graduate Level</span>
                </div>
            </div>
        </>
    )
};

export default UniQualification;