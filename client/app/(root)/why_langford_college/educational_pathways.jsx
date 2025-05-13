import React from 'react';

export default function EducationalPathways() {
    return (<>
        <div
            className='w-full lg:h-screen font-sans pt-10 lg:pb-10 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 '>
            <div className='w-full flex items-start flex-col lg:h-full'>
                <div className="w-full grid grid-cols-2">
                    <div className="w-full flex items-start flex-col lg:h-full capitalize">
                        <span className='font-sans text-[6vw] lg:text-[3.4vw] leading-none'>
                            Choose Your
                        </span>
                        <span className='text-[6vw] lg:text-[3.4vw] font-mono leading-[1.1]'>
                            Level
                        </span>
                    </div>
                    <div className="w-full h-full p-2">
                        <div className="border-b-2 h-[90%] border-gray-400 relative">
                        </div>
                    </div>
                </div>

                {/* section 1 */}
                <div className='w-full h-full flex flex-col hidden lg:block'>
                    {/*top section*/}
                    <div className={`w-full h-[45%] `}>

                    </div>
                    {/*middle Section*/}
                    <div className={`w-full h-[15%] flex justify-start items-center`}>
                        <div className={`w-[75%] bg-white h-full flex flex-col`}>
                            <div className={`w-full h-1/2 flex`}>
                                <div className={`w-[30%] h-full flex justify-end relative`}>
                                    <div
                                        className={`w-[400px] translate-x-11/13 absolute gap-5 px-2 bottom-10 right-0 flex items-end`}>
                                        <div
                                            className={`w-[100px] h-[95px] rounded-full border-2 bg-red-500 text-white border-red-500 flex justify-center items-center`}>
                                                <span
                                                    className={`font-sans text-[23px] leading-none flex flex-col justify-center items-center`}>
                                                    Level  <span>4 & 5</span>
                                                </span>
                                        </div>
                                        <div className={`w-[75%] h-[100%] flex flex-col px-2`}>
                                            <span className={`text1 font-bold text-[16px]`}>University First and Second Year</span>
                                            <div className={`flex mt-3 description1`}>
                                                <li></li>
                                                <span>Aged 18 or above</span>
                                            </div>
                                            <div className={`flex description1`}>
                                                <li></li>
                                                <span>Minimum of 2 A-levels or equivalent</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`w-[100%] border-e-4`}>
                                    </div>
                                </div>
                                <div className={`w-[70%] h-full flex justify-end relative`}>
                                    <div
                                        className={`w-[400px] translate-x-11/13 absolute gap-5 px-2 bottom-10 right-0 flex items-end`}>
                                        <div
                                            className={`w-[100px] h-[95px] rounded-full border-2 bg-red-500 text-white border-red-500 flex justify-center items-center`}>
                                                <span
                                                    className={`font-sans text-[23px] leading-none flex flex-col justify-center items-center`}>
                                                    Level <span>7</span>
                                                </span>
                                        </div>
                                        <div className={`w-[75%] h-[100%] flex flex-col px-2`}>
                                            <span className={`text1 font-bold text-[16px]`}>MBA Advance Entry</span>
                                            <div className={`flex mt-3 description1`}>
                                                <li></li>
                                                <span>Aged 21 or above</span>
                                            </div>
                                            <div className={`flex description1`}>
                                                <li></li>
                                                <span> 3 years  of Managerial experience</span>
                                            </div>
                                            <div className={`flex description1`}>
                                                <li></li>
                                                <span>Learners need a bachelors.  Experienced managers without one may also be considered.e</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`w-[100%] border-e-4`}>
                                    </div>
                                </div>
                            </div>
                            <div className={`w-full h-1/2 flex border-t-4`}>
                                <div className={`w-[70%] h-full flex justify-start relative`}>
                                    <div
                                        className={`w-[400px] -translate-x-13 absolute gap-5 px-2 top-10 left-0 flex items-start`}>
                                        <div
                                            className={`w-[100px] h-[95px] rounded-full border-2 bg-red-500 text-white border-red-500 flex justify-center items-center`}>
                                                <span
                                                    className={`font-sans text-[23px] leading-none flex flex-col justify-center items-center`}>
                                                    Level <span>3</span>
                                                </span>
                                        </div>
                                        <div className={`w-[75%] h-[100%] flex flex-col px-2`}>
                                            <span className={`text1 font-bold text-[16px]`}>A/L Entry</span>
                                            <div className={`flex mt-3 description1`}>
                                                <li></li>
                                                <span>Aged 16 or above</span>
                                            </div>
                                            <div className={`flex description1`}>
                                                <li></li>
                                                <span>5 or more GCSEs at grades C and above</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`w-[100%] border-s-4`}>
                                    </div>
                                </div>
                                <div className={`w-[30%] h-full flex justify-start relative`}>
                                    <div
                                        className={`w-[400px] -translate-x-13 absolute gap-5 px-2 top-10 left-0 flex items-start`}>
                                        <div
                                            className={`w-[100px] h-[95px] rounded-full border-2 bg-red-500 text-white border-red-500 flex justify-center items-center`}>
                                                <span
                                                    className={`font-sans text-[23px] leading-none flex flex-col justify-center items-center`}>
                                                    Level <span>6</span>
                                                </span>
                                        </div>
                                        <div className={`w-[75%] h-[100%] flex flex-col px-2`}>
                                            <span className={`text1 font-bold text-[16px]`}>Top up program</span>
                                            <div className={`flex mt-3 description1`}>
                                                <li></li>
                                                <span>Aged 21 or above</span>
                                            </div>
                                            <div className={`flex description1`}>
                                                <li></li>
                                                <span>HND</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`w-[100%] border-s-4`}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*bottom Section*/}
                    <div className={`w-full h-[45%]`}></div>
                </div>
                <div className={`w-full flex flex-col mt-5 lg:hidden`}>
                    <div className={`bg-[#f7faff] p-2 flex flex-col`}>
                        <div
                            className={`w-full gap-5 px-2 top-10 left-0 flex items-center`}>
                            <div
                                className={`w-[100px] h-[95px] rounded-full border-2 bg-red-500 text-white border-red-500 flex justify-center items-center`}>
                                                <span
                                                    className={`font-sans text-[23px] leading-none flex flex-col justify-center items-center`}>
                                                    Level <span>3</span>
                                                </span>
                            </div>
                            <div className={`w-[75%] h-[100%] flex flex-col px-2`}>
                                <span className={`text1 font-bold text-[16px]`}>A/L Entry</span>
                                <div className={`flex mt-3 description1`}>
                                    <li></li>
                                    <span>Aged 16 or above</span>
                                </div>
                                <div className={`flex description1`}>
                                    <li></li>
                                    <span>5 or more GCSEs at grades C and above</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full grid grid-cols-2 h-[7vh] py-1`}>
                        <div className={`border-black border-e-4 h-full`}>

                        </div>
                    </div>

                    <div
                        className={`w-full gap-5 bg-[#f7faff] p-2 bottom-10 right-0 flex items-center`}>
                        <div
                            className={`w-[100px] h-[95px] rounded-full border-2 bg-red-500 text-white border-red-500 flex justify-center items-center`}>
                                                <span
                                                    className={`font-sans text-[23px] leading-none flex flex-col justify-center items-center`}>
                                                    Level  <span>4 & 5</span>
                                                </span>
                        </div>
                        <div className={`w-[75%] h-[100%] flex flex-col px-2`}>
                            <span className={`text1 font-bold text-[16px]`}>University First and Second Year</span>
                            <div className={`flex mt-3 description1`}>
                                <li></li>
                                <span>Aged 18 or above</span>
                            </div>
                            <div className={`flex description1`}>
                                <li></li>
                                <span>Minimum of 2 A-levels or equivalent</span>
                            </div>
                        </div>
                    </div>

                    <div className={`w-full grid grid-cols-2 h-[7vh] py-1`}>
                        <div className={`border-black border-e-4 h-full`}>

                        </div>
                    </div>

                    <div
                        className={`w-full gap-5 bg-[#f7faff] p-2 top-10 left-0 flex items-center`}>
                        <div
                            className={`w-[100px] h-[95px] rounded-full border-2 bg-red-500 text-white border-red-500 flex justify-center items-center`}>
                                                <span
                                                    className={`font-sans text-[23px] leading-none flex flex-col justify-center items-center`}>
                                                    Level <span>6</span>
                                                </span>
                        </div>
                        <div className={`w-[75%] h-[100%] flex flex-col px-2`}>
                            <span className={`text1 font-bold text-[16px]`}>Top up program</span>
                            <div className={`flex mt-3 description1`}>
                                <li></li>
                                <span>Aged 21 or above</span>
                            </div>
                            <div className={`flex description1`}>
                                <li></li>
                                <span>HND</span>
                            </div>
                        </div>
                    </div>

                    <div className={`w-full grid grid-cols-2 h-[7vh] py-1`}>
                        <div className={`border-black border-e-4 h-full`}>

                        </div>
                    </div>

                    <div
                        className={`w-full gap-5 bg-[#f7faff] p-2 bottom-10 right-0 flex items-center`}>
                        <div
                            className={`w-[100px] h-[95px] rounded-full border-2 bg-red-500 text-white border-red-500 flex justify-center items-center`}>
                                                <span
                                                    className={`font-sans text-[23px] leading-none flex flex-col justify-center items-center`}>
                                                    Level <span>7</span>
                                                </span>
                        </div>
                        <div className={`w-[75%] h-[100%] flex flex-col px-2`}>
                            <span className={`text1 font-bold text-[16px]`}>MBA Advance Entry</span>
                            <div className={`flex mt-3 description1`}>
                                <li></li>
                                <span>Aged 21 or above</span>
                            </div>
                            <div className={`flex description1`}>
                                <li></li>
                                <span> 3 years  of Managerial experience</span>
                            </div>
                            <div className={`flex description1`}>
                                <li></li>
                                <span>Learners need a bachelors.  Experienced managers without one may also be considered.e</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>);
}