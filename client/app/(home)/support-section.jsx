import React from 'react'

function Support() {
    return (
        <>
            <div className='w-full bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='flex items-start justify-start w-full lg:w-[60%] h-[70vh]  hidden lg:block'>
                    <img
                        src="/Images/work-man.png"
                        alt=""
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='w-full flex items-start font-bold flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw]'>
                        Support beyond you
                    </span>
                    <span className='text-[6vw] lg:text-[3vw]'>
                        learning
                    </span>

                    <div className='w-full bg-white pt-10 pb-8 text-gray-500 flex flex-col'>
                        <div className='w-full flex flex-col gap-1'>
                            <span className='text-[18px] font-extralight'>
                                Discover a wealth of invaluable resources to nurture your learning and overall well-being. With our 8 free support hubs, we are dedicated to empowering you in various aspects of your life. <br/>
                                Our dedicated hubs are designed to cater to your personal development, health, and well-being, as well as your employment and interpersonal skills. Explore our support hubs and gain access to an extensive array of tools, guidance, and knowledge. Whether you're seeking personal growth, looking to improve your mental and physical health, or aiming to enhance your professional skill set, our comprehensive resources are here to uplift you.<br/>
                                Invest in yourself and seize the opportunity to tap into your full potential. Take advantage of our diverse support hubs, carefully crafted to address your unique needs.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-white pt-8 pb-20 px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5'>
                <div className='flex items-start justify-center w-full'>
                    <button className='btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6]'>Find out more</button>
                </div>
            </div>
        </>
    )
};

export default Support;