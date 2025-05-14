import React from 'react'

function OurTeam() {
    return (
        <>
            <div className='w-full pb-10 pt-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[8vw] lg:text-[3.5vw] font-sans'>
                        Our Team
                    </span>

                    <div className='w-full bg-white pt-5 lg:pt-10 pb-8 text-[#2E2E27] flex flex-col'>
                        <div className='w-full flex flex-col gap-3 lg:pr-20'>
                            <span className='description2 text-[14px] lg:text-[16px] lg:description'>
                                Nothing is more important to us than for you to choose a course that’s right for you. That’s why every member of our adviser team has extensive knowledge of our courses and will advise you on a course that’s right for your future, goals and career prospects.
                            </span>
                            <span className='description2 text-[14px] lg:text-[16px] lg:description'>
                            They will guide you through the enrollment process, from helping you choose a course to finding the right finance options. Each member of the team is friendly and dedicated to ensuring you pick the option best for you.
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex items-end justify-end w-full lg:w-[60%] h-[40vh]'>
                    <img
                        src="/Images/team.jpg"
                        alt=""
                        className='h-full w-full lg:w-[90%] object-cover'
                    />
                </div>
            </div>
        </>
    )
};

export default OurTeam;