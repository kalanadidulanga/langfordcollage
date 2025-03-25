import React from 'react'

export const CourceCard = ({image, title}) => {
    return (
        <div>
            <div className='w-full flex flex-col gap-3 font-sans'>
                <img src="/Images/card.svg" alt="courses_image" className='w-full h-[304px] object-cover' />
                <span className='text-2xl text-black font-bold'>Accountancy</span>
                <div className='flex items-start justify-start w-full text-white'>
                    <button className='btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6]'>Find out more</button>
                </div>
            </div>
        </div>
    )
}
