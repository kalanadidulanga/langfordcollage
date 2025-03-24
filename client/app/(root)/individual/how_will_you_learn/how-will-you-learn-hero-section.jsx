import React from 'react'

function HowWillYouLearnHero() {
    return (
        <>
            <div className='w-[100%] px-5 lg:px-32'>
                <div className='w-full h-[45vh] mb-[20vh] flex justify-center items-center flex-col gap-5 lg:pl-36'>
                    <div className='w-full flex flex-col text-center lg:text-start'>
                        <span className='font-bold text-5xl md:text-[6vw]'>How will</span>
                    </div>
                    <div className='w-full flex flex-col text-center lg:text-start lg:pl-28'>
                        <span className='font-normal text-5xl md:text-[6vw] title2'>You Learn</span>
                    </div>
                </div>
                <div className='w-full  flex flex-col justify-center items-start gap-3'>
                    <span className='text-[13px]'>
                    Whether you want to improve your <br /> skills, increase your employment <br /> opportunities or further your <br /> professional qualifications, Online <br /> Business School has a variety of <br /> distance learning courses to suit you.
                    </span>
                </div>
            </div>
        </>
    )
}

export default HowWillYouLearnHero;