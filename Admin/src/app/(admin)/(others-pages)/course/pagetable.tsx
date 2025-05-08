"use client";
import Label from '@/components/form/Label'
import Button from '@/components/ui/button/Button'
import RichTextEditor from '@/components/ui/EditText/RichTextEdit';
import { Modal } from '@/components/ui/modal'
import { useModal } from '@/hooks/useModal'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios';
import toast from 'react-hot-toast';
import Alert from '@/components/ui/alert/Alert';
import { ConfirmModal } from '@/components/ui/modal/confirmAlert';

function Pagetable() {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const { isOpen, openModal, closeModal } = useModal();
    const { isOpen1, openModal1, closeModal1 } = useModal();

    const [isdateModalOpen, setIsdateModalOpen] = useState(false);

    const [loading, setLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [error, setError] = useState("");

    const [courses, setCourses] = useState([]);

    const [courseId, setCourseId] = useState("");

    const [courseName, setCourseName] = useState("");
    const [courseStartDate, setCourseStartDate] = useState("");
    const [courseStartDate1, setCourseStartDate1] = useState("");
    const [courseLocation, setCourseLocation] = useState("");
    // const [studyPace, setStudyPace] = useState("");
    // const [qualification, setQualification] = useState("");
    // const [assessment, setAssessment] = useState("");
    // const [includes, setIncludes] = useState("");
    const [courseLevel, setCourseLevel] = useState("");
    const [annualPayment, setAnnualPayment] = useState("");
    const [monthlyPayment, setMonthlyPayment] = useState("");
    const [howItWorks, setHowItWorks] = useState("");
    const [courseModule, setCourseModule] = useState("");
    const [entryRequirements, setEntryRequirements] = useState("");
    const [costandPayment, setCostandPayment] = useState("");
    const [careerProgression, setCareerProgression] = useState("");
    const [univercityOptions, setUnivercityOptions] = useState("");
    const [image, setImage] = useState("");
    const [courseImage, setCourseImage] = useState("");
    const [ucsa_code, setUcsaCode] = useState("");
    const [ucsa_point, setUcsaPoint] = useState("");
    const [duration, setDuration] = useState("");
    const [ukFee, setUkFee] = useState("");
    const [internationalFee, setInternationalFee] = useState("");
    const [courseLeader, setCourseLeader] = useState("");
    const [listingPriority, setListingPriority] = useState("None");

    const options = [
        { value: 'Anytime', label: 'Anytime' },
        { value: 'Select Date', label: 'Select Date' },
    ]

    const options1 = [
        { value: 'Online', label: 'Online' },
        { value: 'In-House', label: 'In-House' },
    ];

    const options2 = [
        { value: 'IGCSE and short courses', label: 'IGCSE and short courses' },
        { value: 'Level 3 (A level) - University entry courses', label: 'Level 3 (A level) - University entry courses' },
        { value: 'Level 4 & 5 - University first and second year courses', label: 'Level 4 & 5 - University first and second year courses' },
        { value: 'Level 6 Undergraduate / Final year', label: 'Level 6 Undergraduate / Final year' },
        { value: 'Level 7 Diploma, Masters / MBA Advance Entry', label: 'Level 7 Diploma, Masters / MBA Advance Entry' },
    ];

    const options3 = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: 'None', label: 'None' },
    ];

    // Handle file selection
    const handleImageChange1 = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            setCourseImage(file);
        }
    };
    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/getAllCources`);
            if (response?.data?.status) {
                setCourses(response?.data?.data);
            } else {
                setCourses([]);
            }
        } catch (error: any) {
            toast.error(error?.response?.data?.error);
        }
    }

    const handleSave = async () => {
        setLoading(true);
        try {

            if (!courseName) {
                setError("Please Enter Course Name");
                setLoading(false);
                return;
            }

            if (!courseStartDate) {
                setError("Please Enter Course Start Month");
                setLoading(false);
                return;
            }
            if (!courseStartDate1) {
                setError("Please Enter Course Start Year");
                setLoading(false);
                return;
            }

            if (!courseLocation) {
                setError("Please Select Course Location");
                setLoading(false);
                return;
            }

            // if (!studyPace) {
            //     setError("Please Enter Study Pace");
            //     setLoading(false);
            //     return;
            // }

            // if (!qualification) {
            //     setError("Please Enter Qualification");
            //     setLoading(false);
            //     return;
            // }

            // if (!assessment) {
            //     setError("Please Enter Assessment");
            //     setLoading(false);
            //     return;
            // }

            // if (!includes) {
            //     setError("Please Enter Includes");
            //     setLoading(false);
            //     return;
            // }

            if (!courseLevel) {
                setError("Please Enter Course Level");
                setLoading(false);
                return;
            }

            if (!annualPayment) {
                setError("Please Enter Annual Payment");
                setLoading(false);
                return;
            }

            if (annualPayment == "0") {
                setError("Please Enter Annual Payment");
                setLoading(false);
                return;
            }

            if (!monthlyPayment) {
                setError("Please Enter Monthly Payment");
                setLoading(false);
                return;
            }

            if (monthlyPayment == "0") {
                setError("Please Enter Monthly Payment");
                setLoading(false);
                return;
            }

            if (!ucsa_code) {
                setError("Please Enter UCAS Code");
                setLoading(false);
                return;
            }
            if (!ucsa_point) {
                setError("Please Enter UCAS Points");
                setLoading(false);
                return;
            }
            if (!ukFee) {
                setError("Please Enter UK Fee");
                setLoading(false);
                return;
            }
            if (!internationalFee) {
                setError("Please Enter International Fee");
                setLoading(false);
                return;
            }

            if (!duration) {
                setError("Please Enter Duration");
                setLoading(false);
                return;
            }
            if (!courseLeader) {
                setError("Please Enter Course Leader");
                setLoading(false);
                return;
            }

            if (!howItWorks) {
                setError("Please Enter How It Works");
                setLoading(false);
                return;
            }

            if (!courseModule) {
                setError("Please Enter Course Module");
                setLoading(false);
                return;
            }

            if (!entryRequirements) {
                setError("Please Enter Entry Requirements");
                setLoading(false);
                return;
            }

            if (!costandPayment) {
                setError("Please Enter Cost and Payment");
                setLoading(false);
                return;
            }

            if (!careerProgression) {
                setError("Please Enter Career Progression");
                setLoading(false);
                return;
            }

            if (!univercityOptions) {
                setError("Please Enter Univercity Options");
                setLoading(false);
                return;
            }

            if (!courseImage) {
                setError("Please Upload Course Image");
                setLoading(false);
                return;
            }

            const form = new FormData();
            form.append("file", courseImage);

            const res = await axios.post(`${BASE_URL}/api/uploadImage/course`,
                form,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (res?.data?.status) {

                const response = await axios.post(`${BASE_URL}/api/addNewCourse`, {
                    course_name: courseName,
                    course_start_date: courseStartDate + "/" + courseStartDate1,
                    course_location: courseLocation,
                    course_level: courseLevel,
                    annual_payment: annualPayment,
                    monthly_payment: monthlyPayment,
                    how_it_works: howItWorks,
                    course_module: courseModule,
                    entry_requirements: entryRequirements,
                    cost_and_payment: costandPayment,
                    career_progression: careerProgression,
                    university_options: univercityOptions,
                    image_path: res?.data?.fileUrl,
                    ucas_code: ucsa_code,
                    ucas_points: ucsa_point,
                    duration: duration,
                    uk_fee: ukFee,
                    international_fee: internationalFee,
                    course_leader: courseLeader,
                });

                if (response.data.status) {

                    if (listingPriority == "None") {
                        setLoading(false);
                        toast.success("Course Added Successfully");
                        loadCourses();
                        closeModal();
                        clear();
                    } else {
                        const res2 = await axios.post(`${BASE_URL}/api/updateListingPriority`, {
                            id: response?.data?.courseId,
                            listingPriority: listingPriority
                        });

                        if (res2?.data?.status) {
                            setLoading(false);
                            toast.success("Course Added Successfully");
                            loadCourses();
                            closeModal();
                            clear();
                        }

                    }
                }

            }

        } catch (error: any) {
            setLoading(false);
            setError(error?.response?.data?.error);
        }
    }

    const handleedit = async () => {
        setLoading(true);
        try {

            if (!courseName) {
                setError("Please Enter Course Name");
                setLoading(false);
                return;
            }

            if (!courseStartDate) {
                setError("Please Select Course Start Date");
                setLoading(false);
                return;
            }

            if (!courseStartDate1) {
                setError("Please Enter Course Start Year");
                setLoading(false);
                return;
            }

            if (!courseLocation) {
                setError("Please Select Course Location");
                setLoading(false);
                return;
            }

            // if (!studyPace) {
            //     setError("Please Enter Study Pace");
            //     setLoading(false);
            //     return;
            // }

            // if (!qualification) {
            //     setError("Please Enter Qualification");
            //     setLoading(false);
            //     return;
            // }

            // if (!assessment) {
            //     setError("Please Enter Assessment");
            //     setLoading(false);
            //     return;
            // }

            // if (!includes) {
            //     setError("Please Enter Includes");
            //     setLoading(false);
            //     return;
            // }

            if (!courseLevel) {
                setError("Please Enter Course Level");
                setLoading(false);
                return;
            }

            if (!ucsa_code) {
                setError("Please Enter UCAS Code");
                setLoading(false);
                return;
            }
            if (!ucsa_point) {
                setError("Please Enter UCAS Points");
                setLoading(false);
                return;
            }
            if (!ukFee) {
                setError("Please Enter UK Fee");
                setLoading(false);
                return;
            }
            if (!internationalFee) {
                setError("Please Enter International Fee");
                setLoading(false);
                return;
            }

            if (!duration) {
                setError("Please Enter Duration");
                setLoading(false);
                return;
            }
            if (!courseLeader) {
                setError("Please Enter Course Leader");
                setLoading(false);
                return;
            }

            if (!howItWorks) {
                setError("Please Enter How It Works");
                setLoading(false);
                return;
            }

            if (!courseModule) {
                setError("Please Enter Course Module");
                setLoading(false);
                return;
            }

            if (!entryRequirements) {
                setError("Please Enter Entry Requirements");
                setLoading(false);
                return;
            }

            if (!costandPayment) {
                setError("Please Enter Cost and Payment");
                setLoading(false);
                return;
            }

            if (!careerProgression) {
                setError("Please Enter Career Progression");
                setLoading(false);
                return;
            }

            if (!univercityOptions) {
                setError("Please Enter Univercity Options");
                setLoading(false);
                return;
            }

            if (courseImage) {

                const form = new FormData();
                form.append("file", courseImage);

                const res = await axios.post(`${BASE_URL}/api/uploadImage/course`,
                    form,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                if (res?.data?.status) {
                    const response = await axios.post(`${BASE_URL}/api/editCourse`, {
                        course_name: courseName,
                        course_start_date: courseStartDate + "/" + courseStartDate1,
                        course_location: courseLocation,
                        course_level: courseLevel,
                        annual_payment: annualPayment,
                        monthly_payment: monthlyPayment,
                        how_it_works: howItWorks,
                        course_module: courseModule,
                        entry_requirements: entryRequirements,
                        cost_and_payment: costandPayment,
                        career_progression: careerProgression,
                        university_options: univercityOptions,
                        image_path: res?.data?.fileUrl,
                        ucas_code: ucsa_code,
                        ucas_points: ucsa_point,
                        duration: duration,
                        uk_fee: ukFee,
                        international_fee: internationalFee,
                        course_leader: courseLeader,
                        courseId: courseId
                    });

                    if (response.data.status) {
                        if (listingPriority == "None") {
                            setLoading(false);
                            toast.success("Course Updated Successfully");
                            loadCourses();
                            closeModal();
                            clear();
                        } else {
                            const res2 = await axios.post(`${BASE_URL}/api/updateListingPriority`, {
                                id: response?.data?.courseId,
                                listingPriority: listingPriority
                            });

                            if (res2?.data?.status) {
                                setLoading(false);
                                toast.success("Course Updated Successfully");
                                loadCourses();
                                closeModal();
                                clear();
                            }
                        }
                    }
                }

            } else {

                const response = await axios.post(`${BASE_URL}/api/editCourse`, {
                    course_name: courseName,
                    course_start_date: courseStartDate + "/" + courseStartDate1,
                    course_location: courseLocation,
                    course_level: courseLevel,
                    annual_payment: annualPayment,
                    monthly_payment: monthlyPayment,
                    how_it_works: howItWorks,
                    course_module: courseModule,
                    entry_requirements: entryRequirements,
                    cost_and_payment: costandPayment,
                    career_progression: careerProgression,
                    university_options: univercityOptions,
                    image_path: image,
                    ucas_code: ucsa_code,
                    ucas_points: ucsa_point,
                    duration: duration,
                    uk_fee: ukFee,
                    international_fee: internationalFee,
                    course_leader: courseLeader,
                    courseId: courseId
                });

                if (response.data.status) {
                    if (listingPriority == "None") {
                        setLoading(false);
                        toast.success("Course Updated Successfully");
                        loadCourses();
                        closeModal();
                        clear();
                    } else {
                        const res2 = await axios.post(`${BASE_URL}/api/updateListingPriority`, {
                            id: response?.data?.courseId,
                            listingPriority: listingPriority
                        });

                        if (res2?.data?.status) {
                            setLoading(false);
                            toast.success("Course Updated Successfully");
                            loadCourses();
                            closeModal();
                            clear();
                        }
                    }
                }

            }


        } catch (error: any) {
            setLoading(false);
            setError(error?.response?.data?.error);
        }
    }

    const deleteCourse = async (id: any) => {
        setLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/api/deleteCourse?courseId=${id}`);
            if (response.data.status) {
                setLoading(false);
                toast.success("Course Deleted Successfully");
                loadCourses();
                setCourseId("");
                closeModal1();
            }
        } catch (error: any) {
            toast.error(error?.response?.data?.error);
            setLoading(false);
        }
    }

    const clear = () => {
        setCourseName("");
        setCourseStartDate("");
        setCourseLocation("");
        // setStudyPace("");
        // setQualification("");
        // setAssessment("");
        // setIncludes("");
        setCourseLevel("");
        setAnnualPayment("");
        setMonthlyPayment("");
        setHowItWorks("");
        setCourseModule("");
        setEntryRequirements("");
        setCostandPayment("");
        setCareerProgression("");
        setUnivercityOptions("");
        setCourseImage("");
        setError("");
        setImage("");
        setCourseStartDate("");
        setListingPriority("None");
        setUcsaCode("");
        setUcsaPoint("");
        setDuration("");
        setUkFee("");
        setInternationalFee("");
        setCourseLeader("");
        setCourseStartDate1("");
        setIsdateModalOpen(false);
        setIsEdit(false);
    }

    return (
        <>
            <div className='w-full h-full flex flex-col'>
                <div className="w-full flex justify-end">
                    <button className="bg-[#3B82F6] text-white py-2 rounded px-4" onClick={openModal}>Add New Course</button>
                </div>
                <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>
                    {courses?.length > 0 ? (
                        <>
                            {courses?.map((item: any, index: number) => (
                                <div className='w-full border-2 rounded-lg shadow-md hover:shadow-md hover:shadow-blue-200 p-5 flex flex-col gap-1' key={index}>
                                    <img src={item?.image_path} alt={`${item?.title}_Image`} className='w-full h-[41vh] object-cover rounded' />
                                    <span className='font-bold text-[20px] dark:text-white'>{item?.course_name}</span>
                                    <div className='flex flex-row gap-2 items-center mt-2'>
                                        <span className='text-[18px] dark:text-white'>Start Date:</span>
                                        <span className='text-[18px] dark:text-white'>{item?.course_start_date}</span>
                                    </div>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <span className='text-[18px] dark:text-white'>Location:</span>
                                        <span className='text-[18px] dark:text-white'>{item?.course_location}</span>
                                    </div>
                                    <div className='flex flex-row gap-2 items-center mt-2'>
                                        <button className='bg-[#f6a53b] text-white py-1 rounded px-4 w-full' onClick={() => {
                                            openModal();
                                            setCourseName(item?.course_name);

                                            // if (item?.course_start_date == "Anytime") {
                                            //     setCourseStartDate("Anytime");
                                            //     setIsdateModalOpen(false);
                                            // } else {
                                                setCourseStartDate(item?.course_start_date?.split("/")?.[0]);
                                                setCourseStartDate1(item?.course_start_date?.split("/")?.[1]);
                                                // setIsdateModalOpen(true);
                                            // }

                                            setCourseLocation(item?.course_location);
                                            // setStudyPace(item?.study_pace);
                                            // setQualification(item?.qualification);
                                            // setAssessment(item?.assessment);
                                            // setIncludes(item?.includesData);
                                            setCourseLevel(item?.course_level);
                                            setAnnualPayment(item?.annual_payment);
                                            setMonthlyPayment(item?.monthly_payment);
                                            setHowItWorks(item?.how_it_works);
                                            setCourseModule(item?.course_module);
                                            setEntryRequirements(item?.entry_requirements);
                                            setCostandPayment(item?.cost_and_payment);
                                            setCareerProgression(item?.career_progression);
                                            setUnivercityOptions(item?.university_options);
                                            setImage(item?.image_path);
                                            setUkFee(item?.uk_fee);
                                            setUcsaCode(item?.ucas_code);
                                            setUcsaPoint(item?.ucas_points);
                                            setDuration(item?.duration);
                                            setInternationalFee(item?.international_fee);
                                            setCourseLeader(item?.course_leader);
                                            setListingPriority(item?.listingPriority);
                                            setCourseId(item?.id);
                                            setIsEdit(true);
                                        }}>Edit</button>
                                        <button className='bg-[#f63b3b] text-white py-1 rounded px-4 w-full' onClick={() => {
                                            setCourseId(item?.id);
                                            openModal1();
                                        }}>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            <div className='col-span-3 border-2 rounded-lg p-5 flex flex-col gap-1'>
                                <span className='font-semibold text-[20px] text-gray-400 dark:text-white'>No Courses Found..</span>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <ConfirmModal isOpen={isOpen1} onClose={() => {
                closeModal1();
                setCourseId("");
            }} className="max-w-[500px] m-4">
                <div className="no-scrollbar relative w-full max-w-[500px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
                    <div className="px-2 border-b">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            Delete Course
                        </h4>
                    </div>
                    <div className="flex flex-col">
                        <div className="custom-scrollbar h-full overflow-y-auto px-2 pb-3">
                            <div className="mt-7">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                                    <div className="col-span-2">
                                        <span className='dark:text-white text-xl text-black font-bold'>Are You Want to Delete This Course</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                            <Button size="sm" variant="outline" disabled={loading} onClick={() => {
                                closeModal1();
                                setCourseId("");
                            }}>
                                Close
                            </Button>

                            <Button size="sm" onClick={() => {
                                deleteCourse(courseId);
                            }} disabled={loading} className='flex items-center gap-3 bg-red-500 hover:bg-red-600'>
                                Delete
                                {loading && (
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-3 border-white"></div>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </ConfirmModal>

            <Modal isOpen={isOpen} onClose={() => {
                if (!loading) {
                    closeModal();
                    clear();
                }
            }} className="max-w-[800px] m-4">
                <div className="no-scrollbar relative w-full max-w-[800px] h-[90vh] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
                    <div className="px-2">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            {isEdit ? "Edit Course" : "Add New Course"}
                        </h4>
                    </div>
                    <div className="flex flex-col">
                        <div className="custom-scrollbar h-full overflow-y-auto px-2 pb-3">
                            <div className="mt-7">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Course Name</Label>
                                        <input type="text"
                                            className='w-full bg-white border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                            onChange={(e) => setCourseName(e.target.value)}
                                            value={courseName}
                                        />
                                    </div>

                                    <div className="col-span-2 lg:col-span-1">
                                        <div className={`w-full grid ${isdateModalOpen ? 'grid-cols-2' : 'grid-cols-1'} gap-3`}>
                                            {/* <div className='w-full'>
                                                <Label>Start Date</Label>
                                                <Select
                                                    options={options}
                                                    value={{ value: courseStartDate, label: courseStartDate }}
                                                    onChange={(e: any) => {
                                                        if (e.value === 'Select Date') {
                                                            setIsdateModalOpen(true);
                                                        } else {
                                                            setIsdateModalOpen(false);
                                                            setCourseStartDate(e.value);
                                                        }

                                                    }}
                                                />
                                            </div> */}
                                            {/* {isdateModalOpen && (
                                                <> */}
                                            <div className='w-full'>
                                                <Label>Enter Date</Label>
                                                <div className='flex gap-5'>
                                                    <input type="text"
                                                        placeholder='MM'
                                                        value={courseStartDate ? courseStartDate : ""}
                                                        className='w-full bg-white border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                                        onChange={(e) => setCourseStartDate(e.target.value)}
                                                    />
                                                    <input type="text"
                                                        placeholder='YYYY'
                                                        value={courseStartDate1 ? courseStartDate1 : ""}
                                                        className='w-full bg-white border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                                        onChange={(e) => setCourseStartDate1(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            {/* </>
                                            )} */}
                                        </div>
                                    </div>

                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Location</Label>
                                        <Select options={options1} value={{ value: courseLocation, label: courseLocation }} onChange={(e: any) => setCourseLocation(e.value)} />
                                    </div>

                                    {/* <div className="col-span-2 lg:col-span-1">
                                        <Label>Study Pace</Label>
                                        <input type="text"
                                            value={studyPace}
                                            onChange={(e) => setStudyPace(e.target.value)}
                                            className='w-full border bg-white p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                        />
                                    </div>

                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Qualifications</Label>
                                        <input type="text"
                                            value={qualification}
                                            onChange={(e) => setQualification(e.target.value)}
                                            className='w-full border bg-white p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                        />
                                    </div>

                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Assessment</Label>
                                        <input type="text"
                                            value={assessment}
                                            onChange={(e) => setAssessment(e.target.value)}
                                            className='w-full border bg-white p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                        />
                                    </div>

                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Includes</Label>
                                        <input type="text"
                                            value={includes}
                                            onChange={(e) => setIncludes(e.target.value)}
                                            className='w-full border bg-white p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                        />
                                    </div> */}
                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Course Level</Label>
                                        <Select
                                            options={options2}
                                            value={{ value: courseLevel, label: courseLevel }}
                                            onChange={(e: any) => {
                                                setCourseLevel(e.value);
                                            }}
                                        />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Anual Payment</Label>
                                        <div className='flex gap-2 bg-white p-2 h-[40px] rounded border border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'>
                                            <input
                                                type="number"
                                                value={annualPayment}
                                                onChange={(e) => setAnnualPayment(e.target.value)}
                                                className='w-full border outline-none border-none h-full'
                                                min={0}
                                            />
                                            <span>£</span>
                                        </div>
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Monthly Payment</Label>
                                        <div className='flex gap-2 bg-white p-2 h-[40px] rounded border border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'>
                                            <input
                                                type="number"
                                                value={monthlyPayment}
                                                onChange={(e) => setMonthlyPayment(e.target.value)}
                                                className='w-full border outline-none border-none h-full'
                                                min={0}
                                            />
                                            <span>£</span>
                                        </div>
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>UCAS Code</Label>
                                        <div className='flex gap-2 bg-white p-2 h-[40px] rounded border border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'>
                                            <input
                                                type="text"
                                                value={ucsa_code}
                                                onChange={(e) => setUcsaCode(e.target.value)}
                                                className='w-full border outline-none border-none h-full'
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>UCSA Points</Label>
                                        <div className='flex gap-2 bg-white p-2 h-[40px] rounded border border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'>
                                            <input
                                                type="number"
                                                value={ucsa_point}
                                                onChange={(e) => setUcsaPoint(e.target.value)}
                                                className='w-full border outline-none border-none h-full'
                                                min={0}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>UK Fee</Label>
                                        <div className='flex gap-2 bg-white p-2 h-[40px] rounded border border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'>
                                            <input
                                                type="number"
                                                value={ukFee}
                                                min={0}
                                                onChange={(e) => setUkFee(e.target.value)}
                                                className='w-full border outline-none border-none h-full'
                                            />
                                            <span>£</span>
                                        </div>
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>International Fee</Label>
                                        <div className='flex gap-2 bg-white p-2 h-[40px] rounded border border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'>
                                            <input
                                                type="number"
                                                value={internationalFee}
                                                min={0}
                                                onChange={(e) => setInternationalFee(e.target.value)}
                                                className='w-full border outline-none border-none h-full'
                                            />
                                            <span>£</span>
                                        </div>
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Duration</Label>
                                        <div className='flex gap-2 bg-white p-2 h-[40px] rounded border border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'>
                                            <input
                                                type="text"
                                                value={duration}
                                                onChange={(e) => setDuration(e.target.value)}
                                                className='w-full border outline-none border-none h-full'
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Course Leader</Label>
                                        <div className='flex gap-2 bg-white p-2 h-[40px] rounded border border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'>
                                            <input
                                                type="text"
                                                value={courseLeader}
                                                onChange={(e) => setCourseLeader(e.target.value)}
                                                className='w-full border outline-none border-none h-full'
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <Label>How it works</Label>
                                        <RichTextEditor htmlContent={howItWorks} setHtmlContent={setHowItWorks} />
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Course Modules</Label>
                                        <RichTextEditor htmlContent={courseModule} setHtmlContent={setCourseModule} />
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Entry Requirements</Label>
                                        <RichTextEditor htmlContent={entryRequirements} setHtmlContent={setEntryRequirements} />
                                    </div>
                                    <div className="col-span-2">
                                        <Label>Cost & Payment</Label>
                                        <RichTextEditor htmlContent={costandPayment} setHtmlContent={setCostandPayment} />
                                    </div>
                                    <div className="col-span-2">
                                        <Label>Career Progression</Label>
                                        <RichTextEditor htmlContent={careerProgression} setHtmlContent={setCareerProgression} />
                                    </div>
                                    <div className="col-span-2">
                                        <Label>University Options</Label>
                                        <RichTextEditor htmlContent={univercityOptions} setHtmlContent={setUnivercityOptions} />
                                    </div>

                                    <div className="w-full col-span-2 lg:col-span-1 h-full flex flex-col">
                                        <Label>Image</Label>
                                        {image ? (
                                            <>
                                                <img
                                                    src={image}
                                                    alt="testimonial"
                                                    className={`w-full border rounded border-gray-300 object-cover object-center max-h-[35vh]`}
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <div className='w-full h-[35vh] border rounded border-gray-300 object-cover flex justify-center items-center dark:bg-white'>
                                                    <span className='text-[18px] text-gray-300 cursor-default'>Image Preview</span>
                                                </div>
                                            </>
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            id="imageUpload1"
                                            onChange={handleImageChange1}
                                        />
                                        <div className="flex gap-2 mt-2">
                                            <button
                                                className="px-4 py-2 bg-blue-500 text-white rounded"
                                                onClick={() => document.getElementById("imageUpload1")?.click()}
                                            >
                                                Upload Image
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Listing Priority</Label>
                                        <Select
                                            options={options3}
                                            value={{ value: listingPriority, label: listingPriority }}
                                            onChange={(e: any) => {
                                                setListingPriority(e.value);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {error && (
                            <>
                                <div className='w-full'>
                                    <Alert variant={'error'} title={'Oops'} message={error} />
                                </div>
                            </>
                        )}
                        <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                            <Button size="sm" variant="outline" disabled={loading} onClick={() => {
                                closeModal();
                                clear();
                            }}>
                                Close
                            </Button>
                            {isEdit ? (
                                <Button size="sm" onClick={handleedit} disabled={loading} className='flex items-center gap-3'>
                                    Update Course
                                    {loading && (
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-3 border-white"></div>
                                    )}
                                </Button>
                            ) : (
                                <Button size="sm" onClick={handleSave} disabled={loading} className='flex items-center gap-3'>
                                    Add New Course
                                    {loading && (
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-3 border-white"></div>
                                    )}
                                </Button>
                            )}

                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Pagetable