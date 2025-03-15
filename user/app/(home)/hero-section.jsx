import React from 'react'

function HeroSection() {
    return (
        <div className='w-[100%] h-full px-5 lg:px-32'>
            <div className='w-full h-[65vh] lg:h-[60vh] flex justify-center items-center flex-col md:px-[10vw] gap-5'>
                <div className='w-full flex flex-col text-start'>
                    <span className='font-bold text-5xl md:text-[6vw]'>Online degrees</span>
                </div>
                <div className='w-full flex flex-col text-start lg:text-end'>
                    <span className='font-normal text-5xl md:text-[6vw]'>without the high fees</span>
                </div>
            </div>
            <div className='flex flex-col justify-center items-start h-full gap-3'>
                <span className='text-[13px]'>Study for a degree or MBA from UK <br /> universities for less than £6,000</span>
                <div className='w-full flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <button className='btn bg-[#E2231A]'>View Courses</button>
                        <button className='btn bg-[#2E2E27]'>Top up Degrees</button>
                    </div>
                    <div className='flex gap-2'>
                        <button className='btn bg-[#2E2E27]'>Try for free</button>
                        <button className='btn bg-[#E2231A]'>Log In</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeroSection;