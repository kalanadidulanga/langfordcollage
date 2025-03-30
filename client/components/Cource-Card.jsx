import React from 'react'

export const CourceCard = ({ image, title, slug }) => {
    return (
        <div>
            <div className='w-full flex flex-col gap-3 font-sans'>
                <img src={image || "/Images/card.svg"} alt="courses_image" className='w-full h-[305px] object-cover' />
                <span className='text-2xl text-black font-bold'>{title}</span>
                <div className='flex items-start justify-start w-full text-white'>
                    <button className='btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6] transition-all duration-200 hover:scale-105'
                        onClick={() => {
                            window.location.href = `/course/${slug}`
                        }}
                    >Find out more</button>
                </div>
            </div>
        </div>
    )
}
