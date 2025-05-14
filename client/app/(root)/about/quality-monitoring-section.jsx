import React from 'react'

function QualityMonitoring() {
    return (
        <>
            <div className='w-full pb-10 pt-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='w-full flex items-start flex-col lg:h-full'>
                    <span className='text-[8vw] lg:text-[3.5vw] font-sans leading-none'>
                        Quality Monitoring
                    </span>
                    <span className='text-[8vw] lg:text-[3.5vw] font-mono leading-[1.1]'>
                        Board
                    </span>

                    <div className='w-full bg-white pt-10 pb-8 text-[#2E2E27] flex flex-col'>
                        <div className='w-full flex flex-col gap-1'>
                            <span className='description2 text-[14px] lg:text-[16px] lg:description'>
                                Langford College also operates a Quality Monitoring Board (QMB) to ensure that we are always delivering accredited online courses and resources to meet your learning needs. This board meets regularly to assess:
                            </span>
                        </div>
                    </div>
                    <div className='w-full bg-white description2 text-[14px] lg:text-[16px] lg:description text-[#2E2E27] pb-10 pl-4'>
                        <li>Specific student issues</li>
                        <li>Any quality issues for university partners</li>
                        <li>Monitoring of assessment standards</li>
                        <li>Monitoring of material content against learning outcomes</li>
                        <li>Specific operational issues as they affect quality and customer service</li>
                    </div>
                    <div className='w-full bg-white pb-8 text-[#2E2E27] flex flex-col'>
                        <div className='w-full flex flex-col gap-1'>
                            <span className='description2 text-[14px] lg:text-[16px] lg:description'>
                                The Board Members include respected academic and business leaders. Outcomes of the reviews are shared online to ensure transparency and understanding amongst our partners and students. All feedback is welcomed so that issues can be formally raised via the QMB in a professional and objective manner.
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex items-start justify-start w-full lg:w-[50%] h-[72vh]'>
                    <img
                        src="/Images/quality-monitor.jpg"
                        alt=""
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
        </>
    )
};

export default QualityMonitoring;