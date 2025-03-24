import React from 'react'

function TestimonialHero() {
    return (
        <>
        <div className='w-[100%] px-5 lg:px-32'>
            <div className='w-full h-[45vh] mt-[20vh] flex justify-center items-center flex-col gap-5 lg:pl-36'>
                <div className='w-full flex flex-col text-center lg:text-start'>
                    <span className='font-bold text-5xl md:text-[6vw]'>Testimonials</span>
                </div>
            </div>
            <div className='w-full  flex flex-col justify-center items-start gap-3'>
                <span className='text-[13px]'>
                Below are a few words from students <br /> who have studied with Online <br /> Business School
                </span>
            </div>
        </div>
    </>
    )
}

export default TestimonialHero