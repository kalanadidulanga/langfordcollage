import React from 'react'

function PartnerUnivercity() {
    return (
        <>
            <div className='w-full  bg-white pb-10 pt-10 text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='flex items-start justify-start w-full lg:w-[60%] h-[50vh]  hidden lg:block'>
                    <img
                        src="/Images/PartnerUnivercity.jpg"
                        alt=""
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='w-full flex items-start flex-col lg:h-full'>
                    <span className='text-[8vw] lg:text-[3.5vw] font-sans leading-none capitalize'>
                        Partner university
                    </span>
                    <span className='text-[8vw] lg:text-[3.5vw] font-mono leading-[1.1] capitalize'>
                        qualifications
                    </span>

                    <div className='flex items-start justify-start w-full lg:w-[60%] h-[55vh] pt-5 block lg:hidden'>
                        <img
                            src="/Images/PartnerUnivercity.jpg"
                            alt=""
                            className='w-full h-full object-cover'
                        />
                    </div>

                    <div className='w-full bg-white pt-8 pb-8 text-[#2E2E27] flex flex-col'>
                        <div className='w-full flex flex-col gap-1'>
                            <span className='description2 text-[14px] lg:text-[16px] lg:description'>
                                On completion of the final assignments, students are awarded a recognised diploma qualification. This diploma can be used to top up to a full undergraduate degree or MBA at a variety of UK universities, either on campus or by distance learning. For more information on university top up options, click the link below.
                            </span>
                        </div>
                    </div>
                    <div className='w-full bg-white lg:pt-8 text-gray-500 flex flex-col'>
                        <div className='flex items-start justify-start w-full'>
                            <button className='btn text-white bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6]' onClick={() => {
                                window.location.href = "/individual/top-up_degree";
                            }}>Top Up Degree</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default PartnerUnivercity;