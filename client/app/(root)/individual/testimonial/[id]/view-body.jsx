import { TestimonialCard } from '@/components/Testimonial-Card'
import React from 'react'

function ViewBody() {
    return (
        <>
            <div className='w-full lg:pb-20 pt-20 bg-white text-black flex flex-col gap-10'>
                <div className='w-full grid grid-cols-1 lg:grid-cols-2 px-[10vw] items-start font-bold lg:h-full'>
                    <img src="/Images/user.png" alt="user" className='h-[400px] object-contain' />
                    <div className='w-full h-full flex items-center'>
                        <span className='text-[6vw] lg:text-[3.4vw]'>
                            Monde Mubalu
                        </span>
                    </div>
                </div>
                <div className='w-full bg-[#F7FAFF] p-10 flex flex-col justify-center items-center px-[15vw]'>
                    <div className='w-full text-[18px] gap-5 flex flex-col'>
                        <span>
                            “OBS gave me an opportunity to pursue my studies, and at the same time accommodate my busy schedule as a working mum.”
                        </span>
                        <span className='font-bold'>
                            Monde studied our Level 4 & 5 Health and Social Care Diploma at OBS. Here’s what she had to say about her experience!
                        </span>
                        <span className='font-bold'>
                            Why did you choose to study with Online Business School?
                        </span>
                        <span>
                            OBS gave me an opportunity to pursue my studies, and at the same time accommodate my busy schedule as a working mum.
                        </span>
                        <span className='font-bold'>
                            How would you describe your experience of studying with Online Business School?
                        </span>
                        <span>
                            My experience with OBS is the need to want to learn more and continue to improve myself.
                        </span>
                        <span className='font-bold'>
                            What did you like the most about the course with Online Business School?
                        </span>
                        <span>
                            What I liked the most was the support I got throughout the course.
                        </span>
                        <span className='font-bold'>
                            Do you have any advice for current or prospective students?
                        </span>
                        <span>
                            I would like to advise all future students interested in studying with OBS to never give up no matter the challenges they face.
                        </span>
                        <span className='font-bold'>
                            What are your plans now?
                        </span>
                        <span>
                            I now plan to do a top up degree.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewBody