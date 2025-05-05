import React from 'react'

export const TestimonialCard = ({ image, title, descrption, slug }) => {

    const truncateHTML = (html, limit) => {
        const div = document.createElement("div");
        div.innerHTML = html;
        const text = div.innerText || div.textContent;
        return text.length > limit ? text.substring(0, limit) + "..." : text;
      };
    
    return (
        <div>
            <div className='w-full lg:min-w-[750px] lg:max-w-[750px] grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#F4C023] p-8'>
                <img src={image || "/Images/user.png"} alt="testimonial_image" className='w-full h-[40vh] object-cover rounded' />
                <div className='flex h-full flex-col gap-3'>
                    <span className='text-2xl text-black'>{title}</span>
                    <div
                        className="text-[16px] text-[#2E2E27] font-light line-clamp-2 lg:line-clamp-7 h-full"
                        dangerouslySetInnerHTML={{ __html: truncateHTML(descrption, 250) }}
                    />
                    <div className='flex items-start justify-start w-full text-white'>
                        <button className='btn font-normal bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6] transition-all duration-200 hover:scale-105'
                            onClick={() => {
                                window.location.href = `/individual/testimonial/${slug}`;
                            }}
                        >Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
