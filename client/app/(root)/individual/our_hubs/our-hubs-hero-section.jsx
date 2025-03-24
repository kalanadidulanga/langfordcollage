import React from 'react'

function OurHubsHero() {
    return (
        <>
            <div className='w-[100%] px-5 lg:px-32'>
                <div className='w-full h-[45vh] mb-[20vh] flex justify-center items-center flex-col gap-5 lg:pl-36'>
                    <div className='w-full flex flex-col text-center lg:text-start'>
                        <span className='font-bold text-5xl md:text-[6vw]'>Online Langford</span>
                    </div>
                    <div className='w-full flex flex-col text-center lg:text-start lg:pl-28'>
                        <span className='font-normal text-5xl md:text-[6vw] title2'>Collage Hubs</span>
                    </div>
                </div>
                <div className='w-full  flex flex-col justify-center items-start gap-3'>
                    <span className='text-[13px]'>
                        Access to our unique support hubs <br /> containing a range of specialist and <br /> focused resources to support and <br /> develop you alongside your learning. <br /> Free to all our students.
                    </span>
                </div>
            </div>
        </>
    )
}

export default OurHubsHero;