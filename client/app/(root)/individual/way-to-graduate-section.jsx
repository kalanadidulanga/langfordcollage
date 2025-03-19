import React from 'react'

function WayToGraduate() {
    return (
        <>
            <div className='w-full pb-20 pt-5 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw]'>
                        The most flexible and cost
                    </span>
                    <span className='text-[6vw] lg:text-[3vw]'>
                        effect way to Graduate
                    </span>

                    <div className='w-full bg-white pt-10 pb-8 text-[#2E2E27] flex flex-col'>
                        <div className='w-full flex flex-col gap-3 lg:pr-36'>
                            <span className='text-[18px] font-extralight'>
                                Our degree pathways act as a direct equivalent to Year 1 and Year 2 of a bachelor’s degree, recognised by an OFQUAL awarding organisation, the pathway courses are accepted by many universities worldwide.
                                Once you complete your pathway, you’ll go to one of our nominated universities to finish Year 3 and obtain your full bachelor’s degree. Upon completion of our level 7 pathway courses, students progress onto the final module of an MBA programme.
                                Our pathways are the most flexible way to graduate! Being online with little restrictions, it’s possible to complete Year 1 and Year 2 while you work!
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex items-end justify-end w-full lg:w-[50%] h-[65vh]'>
                    <img
                        src="/Images/graduate-man.jpg"
                        alt=""
                        className='h-full w-full object-cover object-top'
                    />
                </div>
            </div>
        </>
    )
};

export default WayToGraduate;