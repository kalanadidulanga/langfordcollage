import { CourceCard } from '@/components/Cource-Card';
import React from 'react'

function MostPopular() {
    return (
        <>
            <div className='w-full lg:pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw]'>
                        Most Popular
                    </span>
                    <span className='text-[6vw] font-normal lg:text-[3vw]'>
                        Courses
                    </span>

                    <div className='w-full bg-white text-gray-500 flex justify-center'>
                        <div className='bg-white pt-10 pb-8 flex flex-wrap justify-start gap-8'>
                            <CourceCard />
                            <CourceCard />
                            <CourceCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MostPopular;