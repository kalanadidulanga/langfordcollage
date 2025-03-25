import React from 'react'

export const TestimonialCard = ({ image, title, descrption }) => {
    return (
        <div>
            <div className='w-full lg:max-w-[750px] grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#F4C023] p-8'>
                <img src="/Images/user.png" alt="courses_image" className='w-full h-full object-cover rounded' />
                <div className='flex h-full flex-col gap-3'>
                    <span className='text-2xl text-black'>Monde Mubalu</span>
                    <span className='text-[18px] text-[#2E2E27] font-light'>
                        “OBS gave me an opportunity to pursue my studies, and at the same time accommodate my busy schedule as... <br />
                        - Level 4&5 Human Resource Management -
                    </span>
                    <div className='flex items-start justify-start w-full text-white'>
                        <button className='btn font-normal bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6]'
                            onClick={() => {
                                window.location.href = `/individual/testimonial/1`;
                            }}
                        >Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
