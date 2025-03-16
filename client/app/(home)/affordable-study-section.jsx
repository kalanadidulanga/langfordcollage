import React from 'react'

function AffordableStudy() {
    return (
        <>
            <div className='w-full bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='flex items-start justify-start w-full lg:w-[60%]'>
                    <img src="/Images/read_girl.jpg" alt="" className='w-full h-[400px] md:h-[550px] object-cover' />
                </div>
                <div className='w-full flex items-start text-[6vw] lg:text-[4vw] font-medium flex-col'>
                    <span>
                        Affordable study <br />
                        programmers with <br />
                        exclusive online
                    </span>
                    <span>
                        modules fast tracking <br />
                        learners to a university <br />
                        qualification
                    </span>
                </div>
            </div>
            <div className='w-full bg-white pt-10 pb-8 text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='flex items-start justify-start w-full'>
                    <span className='text-[18px]'>
                        Whether you are looking to enhance your skills, improve your team or pursue a professional education, the Online Business School’s learning pathways can provide you with all you need.
                        The Online Business School delivers online university pathway programmers with full undergraduate and postgraduate diploma awards to learners from all corners of the world. Learners can fast track their way through to a UK university qualification on campus or by distance learning.
                    </span>
                </div>
            </div>
            <div className='w-full bg-white pb-20 px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='flex items-start justify-start w-full'>
                    <button className='btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6]'>View Courses</button>
                </div>
            </div>
        </>
    )
};

export default AffordableStudy;