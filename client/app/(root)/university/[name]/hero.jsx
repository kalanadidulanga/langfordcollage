import React from 'react'

function Hero({name}) {
    return (
        <>
            <div className='w-[100%] px-5 lg:px-32 '>
                <div className='w-full h-[65vh] flex justify-center items-center flex-col gap-5 lg:pl-36'>
                    <div className='w-full flex flex-col text-center lg:text-start'>
                        <span className='font-sans text-5xl md:text-[6vw]'>{name}</span>
                    </div>
                    {/*<div className='w-full flex flex-col text-center lg:text-start lg:pl-28'>*/}
                    {/*    <span className='font-mono text-5xl md:text-[6vw] title2'>University</span>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}

export default Hero;