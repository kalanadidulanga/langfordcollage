import React from 'react'

function Section2() {
    return (<>
        <div
            className='w-full lg:pt-10 font-sans pb-20 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 '>
            <div className='w-full flex items-start flex-col lg:h-full'>
                <div className="w-full grid grid-cols-2">
                    <div className="w-full flex items-start flex-col lg:h-full capitalize">
                        <span className='text-[6vw] lg:text-[3.4vw] font-sans leading-none'>
                            Your Journey to a
                        </span>
                        <span className='text-[6vw] lg:text-[3.4vw] font-mono leading-[1.5]'>
                            UK Degree
                        </span>
                    </div>
                    <div className="w-full h-full p-2">
                        <div className="border-b-2 h-[70%] border-gray-400 relative">
                        </div>
                    </div>
                </div>

                {/* section 1 */}
                <div className='w-full bg-white pt-10 flex flex-col lg:flex-row'>
                    <div className={`w-full flex flex-col text-center`}>
                        <span className={`text-[6vw] lg:text-[2vw] leading-[1.1]`}>Level 3</span>
                        <span className={`text-[6vw] lg:text-[2vw] leading-[1.1]`}>(Foundation)</span>
                        <span className={`text-[5vw] lg:text-[1.5vw]`}>5 Months</span>
                    </div>
                    <div className={`w-full lg:w-[200px] p-2 flex justify-center lg:items-start`}>
                        <img src="/Icon/right_arrow_icon.svg" alt="right_arrow" className={`w-18 lg:w-full rotate-90 lg:-rotate-0`}/>
                    </div>
                    <div className={`w-full flex flex-col text-center`}>
                        <span className={`text-[6vw] lg:text-[2vw] leading-[1.1]`}>Level 4 and 5</span>
                        <span className={`text-[6vw] lg:text-[2vw] leading-[1.1]`}>(HND)</span>
                        <span className={`text-[5vw] lg:text-[1.5vw]`}>9 Months</span>
                        <div className={`w-full flex flex-col text-center mt-5 text-red-500`}>
                            <span className={`text-[6vw] lg:text-[1.5vw] leading-[1.1]`}>Save £49,000 </span>
                            <span className={`text-[6vw] lg:text-[1.5vw] leading-[1.1]`}>+</span>
                            <span className={`text-[6vw] lg:text-[1.5vw] leading-[1.1]`}>2 Years</span>
                        </div>
                    </div>
                    <div className={`w-full lg:w-[200px] p-2 flex justify-center lg:items-start`}>
                        <img src="/Icon/right_arrow_icon.svg" alt="right_arrow" className={`w-18 lg:w-full rotate-90 lg:-rotate-0`}/>
                    </div>
                    <div className={`w-full flex flex-col text-center`}>
                        <span className={`text-[6vw] lg:text-[2vw] leading-[1.1]`}>Migrate to the UK for the Final Year of the Bachelors</span>
                        <span className={`text-[5vw] lg:text-[1.5vw]`}>1 Year</span>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Section2;