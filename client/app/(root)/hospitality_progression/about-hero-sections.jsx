import React from 'react'

function AboutHero() {
    return (
        <>
            <div className='w-[100%] px-5 lg:px-32 '>
                <div className='w-full h-[50vh] flex justify-center items-center flex-col gap-5 lg:pl-32'>
                    <div className='w-full flex flex-col text-center lg:text-start'>
                        <span className='font-sans text-5xl md:text-[6vw]'>Hospitality & Social Care</span>
                    </div>
                    <div className='w-full flex flex-col text-center lg:text-start'>
                        <span className='font-mono text-5xl md:text-[6vw]'>Progression Degrees</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutHero;