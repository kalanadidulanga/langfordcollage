"use client";
import React from 'react'
import Select from 'react-select';

function CourseBody() {

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderColor: state.isFocused ? '#E2231A' : '#e2e8f0',
            boxShadow: state.isFocused ? '0 0 0 0.5px #E2231A' : 'none',
            '&:hover': {
                borderColor: '#E2231A',
            },
            outline: 'none',
            height: '45px',
        }),
    };

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

    const handleChange = (selectedOption) => {
        console.log('Selected:', selectedOption);
    };

    return (
        <>
            <div className='w-full pt-20 pb-20 bg-white grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className='w-full flex flex-col'>
                    <div className='w-full bg-[#1E1E1E] p-8'>
                        <span className='text-[3.6vw] font-bold'>Studies at a Glance</span>
                    </div>
                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 text-black px-[5vw] pt-10 gap-5'>
                        <div className='w-full flex flex-col gap-2'>
                            <span className='font-bold'>Start date:</span>
                            <span>Anytime</span>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <span className='font-bold'>Location:</span>
                            <span>Online</span>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <span className='font-bold'>Study pace:</span>
                            <span>Flexible</span>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <span className='font-bold'>Qualifications:</span>
                            <span>Langford Collage</span>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <span className='font-bold'>Assessment:</span>
                            <span>Written Examination</span>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <span className='font-bold'>Includes:</span>
                            <span>1-2-1 tutor support, all course materials.</span>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-[#F7FAFF] flex flex-col gap-5 text-black p-6 pr-20'>
                    <span className='font-bold text-3xl'>Start your journey today</span>
                    <div className='w-full flex flex-col gap-2 mt-5'>
                        <span className='text-[18px] font-semibold'>First Name</span>
                        <input type="text" className='w-full text-[18px] rounded outline-none p-2 border border-[#E5E4E4] bg-white focus:border focus:border-[#E2231A] hover:border-[#E2231A]' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-[18px] font-semibold'>Last Name</span>
                        <input type="text" className='w-full text-[18px] rounded outline-none p-2 border border-[#E5E4E4] bg-white focus:border focus:border-[#E2231A] hover:border-[#E2231A]' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-[18px] font-semibold'>Your Email (required)</span>
                        <input type="email" className='w-full text-[18px] rounded outline-none p-2 border border-[#E5E4E4] bg-white focus:border focus:border-[#E2231A] hover:border-[#E2231A]' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-[18px] font-semibold'>Phone</span>
                        <input type="tel" className='w-full text-[18px] rounded outline-none p-2 border border-[#E5E4E4] bg-white focus:border focus:border-[#E2231A] hover:border-[#E2231A]' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-[18px] font-semibold'>Your Course</span>
                        <Select
                            options={options}
                            onChange={handleChange}
                            placeholder="Select Country"
                            styles={customStyles}
                            className='text-[18px]'
                        />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-[18px] font-semibold'>Payment Options</span>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" defaultChecked className='w-4 h-4 border-[1px] border-[#E5E4E4] p-2 outline-none bg-white font-extralight text-[18px]' />
                            <span className='text-[16px]'>Annual payment (USD399)</span>
                        </div>
                    </div>
                    <div className='w-full flex gap-4'>
                        <button className="btn bg-[#E2231A] text-white px-4 py-2 hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6] hover:scale-105 transition-all duration-200">
                            Enroll Now
                        </button>
                        <button className="btn bg-[#E2231A] text-white px-4 py-2 hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6] hover:scale-105 transition-all duration-200">
                            Talk to Our Team
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseBody