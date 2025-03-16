import React from 'react'

function WillLearn() {
    return (
        <>
            <div className='w-full bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='flex items-start justify-start w-full h-[50vh] hidden lg:block'>
                    <img
                        src="/Images/work.png"
                        alt=""
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='w-full flex lg:items-end justify-start font-bold flex-col lg:h-full'>
                    <span className='text-[6.8vw] lg:text-[3.3vw]'>
                        How you will learn
                    </span>
                    <div className='w-full bg-white pt-10 pb-8 text-black flex flex-col lg:items-end justify-start'>
                        <div className='flex items-start lg:items-end justify-start w-full gap-5'>
                            <div className='w-full flex items-start lg:items-end lg:text-[1.6vw] gap-6 font-bold flex-col'>
                                <span className='border-b-[4px] border-[#E2231A] inline leading-[1]'>Learner journey</span>
                                <span className='border-b-[4px] border-[#E2231A] inline leading-[1]'>Assessment</span>
                                <span className='border-b-[4px] border-[#E2231A] inline leading-[1]'>Levels explained</span>
                                <span className='border-b-[4px] border-[#E2231A] inline leading-[1]'>Support</span>
                                <span className='border-b-[4px] border-[#E2231A] inline leading-[1]'>Taster module</span>
                            </div>
                            <div className='flex items-start justify-start w-[100%] h-[35vh] hidden lg:hidden md:block'>
                                <img
                                    src="/Images/work.png"
                                    alt=""
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-white pt-10 pb-20 px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='flex items-start justify-start w-full'>
                    <button className='btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6]'>Find out more</button>
                </div>
            </div>
        </>
    )
};

export default WillLearn;