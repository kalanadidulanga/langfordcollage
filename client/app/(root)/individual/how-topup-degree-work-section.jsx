import React from 'react'

function HowTopupDegreeWork() {
    return (
        <>
            <div className='w-full bg-white pt-20 text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='flex items-start justify-start w-full lg:w-[60%]'>
                    <img src="/Images/degree.png" alt="" className='w-full h-[400px] md:h-[70vh] object-cover' />
                </div>
                <div className='w-full lg:h-[70vh] gap-5 lg:gap-0 flex items-start justify-between text-[6vw] lg:text-[4vw] font-medium flex-col'>
                    <span>
                    How top-up <br /> degrees work
                    </span>
                    <span>
                    Complete an OBS <br /> course and university <br /> top up from £6,000
                    </span>
                </div>
            </div>
            <div className='w-full bg-white pt-10 pb-8 text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='flex items-start justify-start w-full'>
                    <span className='text-[18px]'>
                    Academic courses offered by Online Business School are approved by OFQUAL awarding bodies, and universities will generally accept the credits awarded to students. Students should make it clear to the university that the qualification is OFQUAL RQF validated at the stated level/credit value.
                    </span>
                </div>
            </div>
            <div className='w-full bg-white pb-20 px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='flex items-start justify-start w-full'>
                    <button className='btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6]'>Try for free</button>
                </div>
            </div>
        </>
    )
};

export default HowTopupDegreeWork;