"use client";
import Label from '@/components/form/Label'
import Alert from '@/components/ui/alert/Alert';
import Button from '@/components/ui/button/Button'
import RichTextEditor from '@/components/ui/EditText/RichTextEdit';
import { Modal } from '@/components/ui/modal'
import { ConfirmModal } from '@/components/ui/modal/confirmAlert';
import { useModal } from '@/hooks/useModal'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

function Pagetable() {
    const { isOpen, openModal, closeModal } = useModal();
    const { isOpen1, openModal1, closeModal1 } = useModal();
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const [loading, setLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const [testimonial, setTestimonials] = useState([]);
    const [testimonialId, settestimonialId] = useState("");
    const [error, setError] = useState("");
    const [image, setImage] = useState("");
    const [testimonialimage, settestimonialImage] = useState("");
    const [title, settitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        loadTestimonials();
    }, []);

    const loadTestimonials = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/getAllTestimonials`);

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

            if (!testimonialimage) {
                setError("Please Upload Image");
                setLoading(false);
                return;
            }

            if (!title) {
                setError("Please Enter Title");
                setLoading(false);
                return;
            }

            if (!description) {
                setError("Please Enter Description");
                setLoading(false);
                return;
            }

            const form = new FormData();
            form.append("file", testimonialimage);

            const res = await axios.post(`${BASE_URL}/api/uploadImage/testimonial`,
                form,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            // console.log(res);

            if (res?.data?.status) {

                const response = await axios.post(`${BASE_URL}/api/addNewTestimonial`, {
                    title: title,
                    description: description,
                    image_path: res?.data?.fileUrl
                });

                // console.log(response);

                if (response?.data?.status) {
                    setLoading(false);
                    toast.success("Testimonial Added Successfully");
                    setTimeout(() => {
                        closeModal();
                        loadTestimonials();
                        clear();
                    }, 1000);
                }

            }

        } catch (error: any) {
            setLoading(false);
            setError(error?.response?.data?.error);
        }

        // closeModal();
    };

    const clear = () => {
        settestimonialId("");
        setImage("");
        settestimonialImage("");
        settitle("");
        setDescription("");
        setIsEdit(false);
        setError("");
    }

    const handleImageChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            settestimonialImage(file);
        }
    };

    const handleEdit = async () => {
        setLoading(true);
        try {

            if (!testimonialId) {
                setError("Somthing went wrong..");
                setLoading(false);
                return;
            }

            if (!image) {
                setError("Please Upload Image");
                setLoading(false);
                return;
            }

            if (!title) {
                setError("Please Enter Title");
                setLoading(false);
                return;
            }

            if (!description) {
                setError("Please Enter Description");
                setLoading(false);
                return;
            }

            if (testimonialimage) {
                const form = new FormData();
                form.append("file", testimonialimage);

                const res = await axios.post(`${BASE_URL}/api/uploadImage/testimonial`,
                    form,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                // console.log(res);

                if (res?.data?.status) {

                    const response = await axios.post(`${BASE_URL}/api/editTestimonial`, {
                        testimonialId: testimonialId,
                        title: title,
                        description: description,
                        image_path: res?.data?.fileUrl
                    });

                    console.log(response);

                    if (response?.data?.status) {
                        setLoading(false);
                        closeModal();
                        // setTimeout(() => {
                        toast.success("Testimonial Updated Successfully");
                        loadTestimonials();
                        clear();
                        // }, 1000);
                    }

                }
            } else {
                const response = await axios.post(`${BASE_URL}/api/editTestimonial`, {
                    testimonialId: testimonialId,
                    title: title,
                    description: description,
                    image_path: image
                });

                console.log(response);

                if (response?.data?.status) {
                    setLoading(false);
                    closeModal();
                    // setTimeout(() => {
                    toast.success("Testimonial Updated Successfully");
                    loadTestimonials();
                    clear();
                    // }, 1000);
                }
            }

        } catch (error: any) {
            setLoading(false);
            setError(error?.response?.data?.error);
        }
    }

    const deleteBlog = async (testimonialId: any) => {
        try {
            const res = await axios.get(`${BASE_URL}/api/deleteTestimonial?testimonialId=${testimonialId}`);
            if (res?.data?.status) {
                toast.success("Testimonial Deleted Successfully");
                loadTestimonials();
                settestimonialId("");
                closeModal1();
            }
        } catch (error: any) {
            toast.error(error?.response?.data?.error);
        }
    }

    return (
        <>
            <div className='w-full h-full flex flex-col'>
                <div className="w-full flex justify-end">
                    <button className="bg-[#3B82F6] text-white py-2 rounded px-4" onClick={openModal}>Add New Testimonial</button>
                </div>
                <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>

                    {testimonial?.length > 0 ? (
                        <>
                            {testimonial?.map((data: any, index) => (

                                <div className='w-full border-2 rounded-lg shadow-md hover:shadow-md hover:shadow-blue-200  p-5 flex flex-col gap-1' key={index}>
                                    <img src={data?.image_path} alt={`${data?.title}_Image`} className='w-full h-[41vh] object-cover rounded' />
                                    <span className='font-bold text-[20px] dark:text-white'>{data?.title}</span>
                                    <hr className='border-[1px] border-gray-300' />
                                    <div className='flex flex-col gap-2 mt-2'>
                                        <div
                                            className="text-[18px] dark:text-white line-clamp-3"
                                            dangerouslySetInnerHTML={{ __html: data?.description }}
                                        />

                                    </div>
                                    <div className='flex flex-row gap-2 items-center mt-2'>
                                        <button className='bg-[#f6a53b] text-white py-1 rounded px-4 w-full' onClick={() => {

                                            settestimonialId(data?.id);
                                            settitle(data?.title);
                                            setDescription(data?.description);
                                            setImage(data?.image_path);
                                            openModal();
                                            setIsEdit(true);

                                        }}>Edit</button>
                                        <button className='bg-[#f63b3b] text-white py-1 rounded px-4 w-full' onClick={() => {
                                            settestimonialId(data?.id);
                                            openModal1();
                                        }}>Delete</button>
                                    </div>
                                </div>

                            ))}
                        </>
                    ) : (
                        <>
                            <div className='col-span-3 border-2 rounded-lg p-5 flex flex-col gap-1'>
                                <span className='font-semibold text-[20px] text-gray-400 dark:text-white'>No Testimonials Found..</span>
                            </div>
                        </>
                    )}

                </div>
            </div>

            <ConfirmModal isOpen={isOpen1} onClose={() => {
                closeModal1();
                settestimonialId("");
            }} className="max-w-[500px] m-4">
                <div className="no-scrollbar relative w-full max-w-[500px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
                    <div className="px-2 border-b">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            Delete Testimonial
                        </h4>
                    </div>
                    <div className="flex flex-col">
                        <div className="custom-scrollbar h-full overflow-y-auto px-2 pb-3">
                            <div className="mt-7">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                                    <div className="col-span-2">
                                        <span className='dark:text-white text-xl text-black font-bold'>Are You Want to Delete This Testimonial</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                            <Button size="sm" variant="outline" disabled={loading} onClick={() => {
                                closeModal1();
                                settestimonialId("");
                            }}>
                                Close
                            </Button>

                            <Button size="sm" onClick={() => {
                                deleteBlog(testimonialId)
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
            }} className="max-w-[900px] m-4">
                <div className="no-scrollbar relative w-full max-w-[900px] max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
                    <div className="px-2">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            {isEdit ? "Edit Testimonial" : "Add New Testimonial"}
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
                                <div className="grid grid-cols-1 lg:grid-cols-8 w-full gap-x-6 gap-y-5">
                                    <div className="w-full col-span-8 lg:col-span-3 h-full flex flex-col">
                                        <Label>Image</Label>
                                        {image ? (
                                            <>
                                                <img
                                                    src={image || "/images/icons/image.svg"}
                                                    alt="testimonial"
                                                    className={`w-full border rounded border-gray-300 object-cover object-center max-h-[41vh]`}
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <div className='w-full h-full border rounded border-gray-300 object-cover flex justify-center items-center'>
                                                    <span className='text-[18px] text-gray-300 cursor-default'>Image Preview</span>
                                                </div>
                                            </>
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            id="imageUpload"
                                            onChange={handleImageChange}
                                        />
                                        <Button size="sm" className="mt-2" onClick={() => document.getElementById("imageUpload")?.click()}>
                                            Upload Image
                                        </Button>
                                    </div>
                                    <div className="lg:col-span-5 grid col-span-8 grid-cols-1 gap-x-6 gap-y-5">
                                        <div className="col-span-1">
                                            <Label>Title</Label>
                                            <input type="text"
                                                className='w-full bg-white border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                                onChange={(e) => settitle(e.target.value)}
                                                value={title}
                                            />
                                        </div>

                                        <div className="col-span-1">
                                            <Label>Description</Label>
                                            <RichTextEditor setHtmlContent={setDescription} htmlContent={description} />
                                        </div>
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
                            {isEdit ? (
                                <>
                                    <Button size="sm" onClick={handleEdit} disabled={loading} className='flex items-center gap-3'>
                                        Update Testimonial
                                        {loading && (
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-3 border-white"></div>
                                        )}
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button size="sm" onClick={handleSave} disabled={loading} className='flex items-center gap-3'>
                                        Add New Testimonial
                                        {loading && (
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-3 border-white"></div>
                                        )}
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Pagetable