import React from 'react'

function LearnAnywhere() {
    return (
        <>
            <div className='w-full lg:pb-20 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw]'>
                        Learn anywhere,
                    </span>
                    <span className='text-[6vw] lg:text-[3vw]'>
                        anytime, from any
                    </span>
                    <span className='text-[6vw] lg:text-[3vw]'>
                        device
                    </span>

                    <div className='w-full bg-white pt-10 pb-8 text-gray-500 flex flex-col'>
                        <div className='w-full flex flex-col gap-1'>
                            <span className='text-[18px] font-extralight'>
                            Our web based modules allow students to learn what they want, when they want and how they want and have been designed to facilitate a much faster, more affordable and engaging way to learn. With a 24/7 student networking platform, personal dashboards, 1-2-1 online tutorials, group webinars and a bank of pre-recorded group webcasts, the Online Business School provides students with all the support that they need to succeed in developing their professional skill base and achieve a university qualification.
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex items-end justify-end w-full lg:w-[60%] h-[60vh] hidden lg:block'>
                    <img
                        src="/Images/robo-girl.png"
                        alt=""
                        className='h-full w-full lg:w-[90%] object-cover'
                    />
                </div>
            </div>
        </>
    )
};

export default LearnAnywhere;