import React from 'react'

function OFQUAL() {
    return (
        <>
            <div className='w-full capitalize bg-white pb-20 text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='flex items-start justify-start w-full lg:w-[60%] h-[47vh]  hidden lg:block'>
                    <img
                        src="/Images/OFQUAL.jpg"
                        alt=""
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw]'>
                        OFQUAL recognised
                    </span>
                    <span className='text-[6vw] lg:text-[3vw]'>
                        partnerships
                    </span>

                    <div className='w-full bg-white pt-10 pb-8 text-[#2E2E27] flex flex-col'>
                        <div className='w-full flex flex-col gap-1'>
                            <span className='text-[16px] font-extralight'>
                            All learning materials are designed and written by professional academic authors so that each interactive module is aligned against specific learning criteria specified by OFQUAL .The Office of Qualifications and Examinations Regulation regulates qualifications, examinations and assessments in England. Langford College works with OFQUAL recognised awarding organisations for the verification of our programmes. These standards ensure those that learn with us receive a high quality education along with certification that is recognised universally by universities and employers.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default OFQUAL;