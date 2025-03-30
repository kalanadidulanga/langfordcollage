"use client";
import Label from '@/components/form/Label'
import Alert from '@/components/ui/alert/Alert';
import Button from '@/components/ui/button/Button'
import { Modal } from '@/components/ui/modal'
import { useModal } from '@/hooks/useModal'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

function Pagetable() {
    const { isOpen, openModal, closeModal } = useModal();
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const [loading, setLoading] = useState(false);

    const [testimonial, setTestimonials] = useState([]);
    const [error, setError] = useState("");

    const [enrollId, setEnrollId] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [studyQualification, setStudyQualification] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [paymentOption, setPaymentOption] = useState("Annual");
    const [course, setCourse] = useState("");
    const [courseLevel, setCourseLevel] = useState("");


    useEffect(() => {
        loadTestimonials();
    }, []);

    const loadTestimonials = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/getAllEnrolls`);

            if (response?.data?.status) {
                setTestimonials(response?.data?.data);
            } else {
                setTestimonials([]);
            }
        } catch (error: any) {
            toast.error(error?.response?.data?.error);
        }
    };

    const handleSave = async () => {
        setLoading(true);

        try {

            const res = await axios.post(`${BASE_URL}/api/acceptEnroll`, {
                id: enrollId,
                fname: fname,
                lname: lname,
                email: email,
                phone: phone,
                course: course,
                course_level: courseLevel,
                studyQualification: studyQualification,
                jobTitle: jobTitle,
                paymentOption: paymentOption,
            });

            if (res?.data?.status) {
                toast.success(res?.data?.message);
                loadTestimonials();
                closeModal();
            }

        } catch (error: any) {
            setError(error?.response?.data?.error);
        }

    };

    const clear = () => {
        setError("");
        setEnrollId("");
        setFname("");
        setLname("");
        setEmail("");
        setPhone("");
        setStudyQualification("");
        setJobTitle("");
        setPaymentOption("");
        setCourse("");
        setCourseLevel("");
    }

    return (
        <>
            <div className='w-full h-full flex flex-col'>
                <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>

                    {testimonial?.length > 0 ? (
                        <>
                            {testimonial?.map((data: any, index) => (

                                <div className='w-full border-2 rounded-lg shadow-md hover:shadow-md hover:shadow-blue-200  p-5 flex flex-col gap-1' key={index}>
                                    <span className='font-bold text-[20px] dark:text-white'>{data?.fname} {data?.lname}</span>
                                    <hr className='border-[1px] border-gray-300' />
                                    <div className='flex flex-col gap-2 mt-2'>
                                        <span className='text-[14px] dark:text-white'>{data?.email}</span>
                                        <span className='text-[14px] dark:text-white'>{data?.phone}</span>
                                    </div>
                                    <div className='flex flex-row gap-2 items-center mt-2'>
                                        <button className='bg-[#f6a53b] text-white py-1 rounded px-4 w-full' onClick={() => {

                                            setEnrollId(data?.id);
                                            setFname(data?.fname);
                                            setLname(data?.lname);
                                            setEmail(data?.email);
                                            setPhone(data?.phone);
                                            setCourse(data?.course);
                                            setCourseLevel(data?.course_level);
                                            setStudyQualification(data?.study_qualification);
                                            setJobTitle(data?.job_title);
                                            setPaymentOption(data?.payment_option);
                                            openModal();

                                        }}>View</button>
                                        {/* <button className='bg-[#f63b3b] text-white py-1 rounded px-4 w-full' onClick={() => deleteBlog(data?.id)}>Cancel</button> */}
                                    </div>
                                </div>

                            ))}
                        </>
                    ) : (
                        <>
                            <div className='col-span-3 border-2 rounded-lg p-5 flex flex-col gap-1'>
                                <span className='font-semibold text-[20px] text-gray-400 dark:text-white'>No Enroll Requests Found..</span>
                            </div>
                        </>
                    )}

                </div>
            </div>

            <Modal isOpen={isOpen} onClose={() => {
                if (!loading) {
                    closeModal();
                    clear();
                }
            }} className="max-w-[900px] m-4">
                <div className="no-scrollbar relative w-full max-w-[900px] max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
                    <div className="px-2">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            Enroll Request
                        </h4>
                    </div>
                    <div className="flex flex-col">
                        {error && (
                            <>
                                <div className='w-full'>
                                    <Alert variant={'error'} title={'Oops'} message={error} />
                                </div>
                            </>
                        )}
                        <div className="custom-scrollbar h-full overflow-y-auto px-2 pb-3">
                            <div className="mt-7">
                                <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-x-6 gap-y-5">

                                    <div className="col-span-1">
                                        <Label>First Name</Label>
                                        <input type="text"
                                            className='w-full bg-white border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                            value={fname}
                                            disabled
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <Label>Last Name</Label>
                                        <input type="text"
                                            className='w-full bg-white border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                            value={lname}
                                            disabled
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <Label>Email</Label>
                                        <div className='flex flex-row gap-2'>
                                            <input type="text"
                                                className='w-full bg-white border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                                value={email}
                                                disabled
                                            />
                                            <Button size="sm" disabled={loading} onClick={() => {
                                                window.open(`mailto:${email}`, '_blank');
                                            }}>
                                                Mail
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="col-span-1">
                                        <Label>Mobile</Label>
                                        <div className='flex flex-row gap-2'>
                                            <input type="text"
                                                className='w-full bg-white border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                                value={phone}
                                                disabled
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Course Level</Label>
                                        <input type="text"
                                            className='w-full bg-white border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                            value={courseLevel}
                                            disabled
                                        />
                                    </div>
                                    <div className="col-span-1">
                                        <Label>Course</Label>
                                        <input type="text"
                                            className='w-full bg-white border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                            value={course}
                                            disabled
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <Label>Study Qualification</Label>
                                        <input type="text"
                                            className='w-full bg-white border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                            value={studyQualification}
                                            disabled
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <Label>Job Title</Label>
                                        <input type="text"
                                            className='w-full bg-white border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                            value={jobTitle}
                                            disabled
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <Label>Payment Option</Label>
                                        <input type="text"
                                            className='w-full bg-white border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                            value={paymentOption}
                                            disabled
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                            <Button size="sm" variant="outline" disabled={loading} onClick={() => {
                                closeModal();
                                clear();
                            }}>
                                Close
                            </Button>
                            <Button size="sm" onClick={handleSave} disabled={loading} className='flex items-center gap-3'>
                                Accept
                                {loading && (
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-3 border-white"></div>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Pagetable