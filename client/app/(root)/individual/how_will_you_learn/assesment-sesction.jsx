import React from 'react'

function Assesment() {
    return (
        <>
            <div className='w-full bg-white pb-20 text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='flex items-start justify-start w-full lg:w-[60%] h-[90vh]  hidden lg:block'>
                    <img
                        src="/Images/assesment.svg"
                        alt=""
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw]'>
                        Assessment
                    </span>
                    <div className='w-full bg-white pt-10 pb-8 text-[#2E2E27] flex flex-col'>
                        <div className='w-full flex flex-col gap-5'>
                            <span className='text-[18px] font-extralight'>
                                Assessment at Online Business School is a very straightforward process:
                            </span>
                            <div className='text-[18px] font-extralight space-y-2'>
                                <span className='flex'>
                                    <li></li>
                                    <span>
                                        After you have completed an online module, you will have an online assessment to complete. This assessment contains 30 multiple-choice questions. You will have one hour to complete these questions, which are answered in sets of five, so you will have plenty of time to review and edit your answers. After an hour, the test will automatically time out.
                                    </span>
                                </span>
                                <span className='flex'>
                                    <li></li>
                                    <span>
                                        After you have completed an online module, you will have an online assessment to complete. This assessment contains 30 multiple-choice questions. You will have one hour to complete these questions, which are answered in sets of five, so you will have plenty of time to review and edit your answers. After an hour, the test will automatically time out.
                                    </span>
                                </span>
                                <span className='flex'>
                                    <li></li>
                                    <span>
                                        When the online modules have been successfully completed, you will then be able to take the final written assignments provided by Online Business School that test your knowledge and understanding of the modules. After successful completion of these assignments, you will receive your diploma from the OFQUAL awarding organization.
                                    </span>
                                </span>
                                <span className='flex'>
                                    <li></li>
                                    <span>
                                        You will then be eligible to apply for progression onto a top up course through a recognised UK university on campus or by distance learning.
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Assesment;