"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Select from 'react-select';

function RequestACource() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
          ".request-left",
          { opacity: 0, x: -50 },
          {
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: ".request-section",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
              once: false,
            }
          }
        );
    
        gsap.fromTo(
          ".request-right",
          { opacity: 0, x: 50 },
          {
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: ".request-section",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
              once: false,
            }
          }
        );
    
      }, []);

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
            <div className='w-full pb-10 pt-10 bg-[#F7FAFF] text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 request-section'>
                <div className='w-full flex items-start flex-col lg:h-full'>
                    <span className='text-[6vw] lg:text-[3vw] request-left font-sans font-bold'>
                        Request a Course
                    </span>
                    <span className='text-[6vw] lg:text-[3vw] request-left font-mono font-bold'>
                        Prospectus
                    </span>

                    <div className='w-full flex justify-center font-sans'>
                        <div className='w-full  pt-10 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-5 font-normal text-lg'>
                            <div className='w-full flex flex-col gap-2 request-left'>
                                <span>First Name</span>
                                <input type="text" className='w-full rounded-lg outline-0 p-2 border border-[#E5E4E4] bg-white focus:border-2 focus:border-[#E2231A] hover:border-[#E2231A]' />
                            </div>
                            <div className='w-full flex flex-col gap-2 request-right'>
                                <span>Last Name</span>
                                <input type="text" className='w-full rounded-lg outline-0 p-2 border border-[#E5E4E4] bg-white focus:border-2 focus:border-[#E2231A] hover:border-[#E2231A]' />
                            </div>
                            <div className='w-full flex flex-col gap-2 request-left'>
                                <span>Email Address</span>
                                <input type="email" className='w-full rounded-lg outline-0 p-2 border border-[#E5E4E4] bg-white focus:border-2 focus:border-[#E2231A] hover:border-[#E2231A]' />
                            </div>
                            <div className='w-full flex flex-col gap-2 request-right'>
                                <span>Phone Number</span>
                                <input type="tel" className='w-full rounded-lg outline-0 p-2 border border-[#E5E4E4] bg-white focus:border-2 focus:border-[#E2231A] hover:border-[#E2231A]' />
                            </div>
                            <div className='w-full flex flex-col gap-2 request-left'>
                                <span>Country</span>
                                <Select
                                    options={options}
                                    onChange={handleChange}
                                    placeholder="Select Country"
                                    styles={customStyles}
                                />
                            </div>
                            <div className='w-full flex flex-col gap-2 request-right'>
                                <span>Course</span>
                                <Select
                                    options={options}
                                    onChange={handleChange}
                                    placeholder="Select Course"
                                    styles={customStyles}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start justify-end w-full'>
                        <button className='btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6] text-white request-right'>Send me my prospectus</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default RequestACource;