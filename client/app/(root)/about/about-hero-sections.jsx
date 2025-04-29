import React from 'react'

function AboutHero() {
    return (
        <>
            <div className='w-[100%] px-5 lg:px-32 capitalize'>
                <div className='w-full h-[45vh] mb-[20vh] flex justify-center items-center flex-col gap-5 lg:pl-36'>
                    <div className='w-full flex flex-col text-center lg:text-start'>
                        <span className='font-bold text-5xl md:text-[6vw]'>About</span>
                    </div>
                    <div className='w-full flex flex-col text-center lg:text-start lg:pl-28'>
                        <span className='font-normal text-5xl md:text-[6vw] title2'>Langford Collage</span>
                    </div>
                </div>
                <div className='w-full  flex flex-col justify-center items-start gap-3'>
                    <span className='text-[13px]'>Affordable study programmes with <br/> exclusive online modules fast <br/>tracking learners to a university <br/> qualification</span>
                </div>
            </div>
        </>
    )
}

export default AboutHero;