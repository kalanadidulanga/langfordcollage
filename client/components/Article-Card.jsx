import React from 'react'

export const ArticleCard = (image, title , descrption) => {
    return (
        <div>
            <div className='max-w-[370px] flex flex-col gap-3'>
                <img src="/Images/article.png" alt="courses_image" className='w-full h-[304px] object-cover' />
                <span className='text-2xl text-black'>Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration</span>
                <span className='text-[18px] text-black font-light'>We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business...</span>
                <div className='flex items-start justify-start w-full text-white'>
                    <button className='btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6]'>Find out more</button>
                </div>
            </div>
        </div>
    )
}
