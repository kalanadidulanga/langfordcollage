"use client";
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function CourseBody({ data }) {
    const BASE_MOBILE = process.env.NEXT_PUBLIC_BASE_MOBILE;
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [studyQualification, setStudyQualification] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [paymentOption, setPaymentOption] = useState("Annual");

    const [loading, setLoading] = useState(false);


    const handleEnroll = async () => {
        setLoading(true);

        if (!fname) {
            toast.error("Please Enter First Name");
            setLoading(false);
            return;
        }

        if (!lname) {
            toast.error("Please Enter Last Name");
            setLoading(false);
            return;
        }

        if (!email) {
            toast.error("Please Enter Email");
            setLoading(false);
            return;
        }

        if (!phone) {
            toast.error("Please Enter Phone Number");
            setLoading(false);
            return;
        }

        if (!studyQualification) {
            toast.error("Please Enter Study Qualification");
            setLoading(false);
            return;
        }

        if (!jobTitle) {
            toast.error("Please Enter Job Title");
            setLoading(false);
            return;
        }

        if (!paymentOption) {
            toast.error("Please Select Payment Option");
            setLoading(false);
            return;
        }

        try {
            const res = await axios.post(`${BASE_URL}/api/enrollNow`, {
                first_name: fname,
                last_name: lname,
                email: email,
                phone: phone,
                course: data?.course_name,
                course_level: data?.course_level,
                study_qualification: studyQualification,
                job_title: jobTitle,
                payment_option: paymentOption,
            });

            if (res?.data?.status) {
                setLoading(false);
                toast.success("Enrolled Successfully");
                setFname("");
                setLname("");
                setEmail("");
                setPhone("");
                setStudyQualification("");
                setJobTitle("");
                setPaymentOption("Annual");
            }
        } catch (error) {
            setLoading(false);
            toast.error(error?.response?.data?.error);
        }
    }
    return (
        <>
            <div className='w-full pt-20 pb-20 bg-white grid grid-cols-1 lg:grid-cols-2 gap-10 px-[3vw]'>
                <div className='w-full flex flex-col'>
                    <div className='w-full bg-[#1E1E1E] p-8 flex flex-col'>
                        <span className='text-[1.9vw] font-sans'>Book Your Course</span>
                        <span className='text-[1.2vw] font-sans capitalize'>Book your course now and get a guaranteed scholarship!</span>
                    </div>
                    <div className='w-full grid grid-cols-1 lg:grid-cols-3 text-[16px] text-black pt-10 gap-8'>
                        <div className='w-full flex flex-col gap-2'>
                            <span className='font-sans'>Level:</span>
                            <span>{data?.course_level ? data?.course_level : "N/A"}</span>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <span className='font-sans'>UCAS Code:</span>
                            <span>{data?.ucas_code ? data?.ucas_code : "N/A"}</span>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <span className='font-sans'>UCAS Points:</span>
                            <span>{data?.ucas_points ? data?.ucas_points : "N/A"}</span>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <span className='font-sans'>Start Date:</span>
                            <span>{data?.course_start_date ? data?.course_start_date : "N/A"}</span>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <span className='font-sans'>Duration:</span>
                            <span>{data?.duration ? data?.duration : "N/A"}</span>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <span className='font-sans'>Location:</span>
                            <span>{data?.course_location ? data?.course_location : "N/A"}</span>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <span className='font-sans'>Fees:</span>
                            <span>{data?.uk_fee ? data?.uk_fee : "N/A"}</span>
                        </div>
                        {/* <div className='w-full flex flex-col gap-2'>
                            <span className='font-sans'>International fees:</span>
                            <span>{data?.international_fee ? data?.international_fee : "N/A"}</span>
                        </div> */}
                        <div className='w-full flex flex-col gap-2'>
                            <span className='font-sans'>Course Leader:</span>
                            <span>{data?.course_leader ? data?.course_leader : "N/A"}</span>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-[#F7FAFF] flex flex-col gap-5 text-black p-6 pr-20'>
                    <span className='font-sans text-3xl '>Start your journey today</span>
                    <div className='w-full flex flex-col gap-2 mt-5'>
                        <span className='text-[16px] font-semibold'>First Name</span>
                        <input type="text"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            className='w-full text-[16px] rounded outline-none p-2 border border-[#E5E4E4] bg-white focus:border focus:border-[#E2231A] hover:border-[#E2231A]' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-[16px] font-semibold'>Last Name</span>
                        <input type="text"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            className='w-full text-[16px] rounded outline-none p-2 border border-[#E5E4E4] bg-white focus:border focus:border-[#E2231A] hover:border-[#E2231A]' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-[16px] font-semibold'>Your Email (required)</span>
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full text-[16px] rounded outline-none p-2 border border-[#E5E4E4] bg-white focus:border focus:border-[#E2231A] hover:border-[#E2231A]' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-[16px] font-semibold'>Phone</span>
                        <input type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className='w-full text-[16px] rounded outline-none p-2 border border-[#E5E4E4] bg-white focus:border focus:border-[#E2231A] hover:border-[#E2231A]' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-[16px] font-semibold'>Your Course</span>
                        <input type="text" className='w-full text-[16px] rounded outline-none p-2 border border-[#E5E4E4] bg-white focus:border focus:border-[#E2231A] hover:border-[#E2231A]' disabled value={data?.course_name ? data?.course_name : ''} />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-[16px] font-semibold'>Study Qualification</span>
                        <input type="text"
                            value={studyQualification}
                            onChange={(e) => setStudyQualification(e.target.value)}
                            className='w-full text-[16px] rounded outline-none p-2 border border-[#E5E4E4] bg-white focus:border focus:border-[#E2231A] hover:border-[#E2231A]' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-[16px] font-semibold'>Job Title</span>
                        <input type="text"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            className='w-full text-[16px] rounded outline-none p-2 border border-[#E5E4E4] bg-white focus:border focus:border-[#E2231A] hover:border-[#E2231A]' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-[16px] font-semibold'>Payment Options</span>
                        <div className='flex gap-3 items-center'>
                            <input type="radio" name='payment'
                                value="Annual"
                                defaultChecked={paymentOption === 'Annual' ? true : false}
                                onChange={(e) => setPaymentOption(e.target.checked ? e.target.value : '')}
                                className='w-4 h-4 border-[1px] border-[#E5E4E4] p-2 outline-none bg-white font-extralight text-[16px]' />
                            <span className='text-[16px]'>One-Time Payment ({data?.annual_payment ? data?.annual_payment : '0'}£)</span>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <input type="radio" name='payment'
                                value="Monthly"
                                defaultChecked={paymentOption === 'Monthly' ? true : false}
                                onChange={(e) => setPaymentOption(e.target.checked ? e.target.value : '')}
                                className='w-4 h-4 border-[1px] border-[#E5E4E4] p-2 outline-none bg-white font-extralight text-[16px]' />
                            <span className='text-[16px]'>Installment Payment ({data?.monthly_payment ? data?.monthly_payment : '0'}£ per month)</span>
                        </div>
                    </div>
                    <div className='w-full flex gap-4'>
                        <button className="btn bg-[#E2231A] text-white px-4 py-2 hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6] hover:scale-105 transition-all duration-200 flex items-center gap-3 disabled:bg-[#e2241aab] disabled:text-white disabled:cursor-not-allowed"
                            disabled={loading}
                            onClick={handleEnroll}
                        >
                            Enroll Now
                            {loading && (
                                <div className="animate-spin rounded-full h-4 w-4 border-b-3 border-white"></div>
                            )}
                        </button>
                        <button className="btn bg-[#E2231A] text-white px-4 py-2 hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6] hover:scale-105 transition-all duration-200"
                            onClick={() => {
                                window.open(`tel:${BASE_MOBILE}`);
                            }}>
                            Talk to Our Team
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseBody