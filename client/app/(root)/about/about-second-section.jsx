import React from 'react'

function AboutSecond() {
    return (
        <>
            <div className='w-full pt-20 pb-20 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='flex items-start justify-start w-full lg:w-[50%] h-[55vh] md:h-[80vh] lg:h-[55vh]'>
                    <img
                        src="/Images/girl.jpg"
                        alt=""
                        className='w-full h-full object-cover object-center'
                    />
                </div>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <div className='w-full bg-white text-[#2E2E27] flex flex-col'>
                        <div className='w-full flex flex-col gap-3'>
                            <span className='text-[18px] font-extralight'>
                                Whether you are looking to enhance your skills, improve your team or pursue a professional education, the Online Business School’s learning pathways can provide you with all you need.
                            </span>
                            <span className='text-[18px] font-extralight'>
                                The Online Business School delivers online university pathway programmes with full Undergraduate and postgraduate diploma awards to learners from all corners of the world. Learners can fast track their way through to a UK university qualification on campus or by distance learning.
                            </span>
                            <span className='text-[18px] font-extralight'>
                                Our web based modules allow students to learn what they want, when they want and how they want and have been designed to facilitate a much faster, more affordable and engaging way to learn. With a 24/7 student networking platform, personal dashboards, 1-2-1 online tutorials, group webinars and bank of pre-recorded group webcasts, the Online Business School provides students with all the support that they need to succeed in developing their professional skill base and achieve a university qualification .
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutSecond;