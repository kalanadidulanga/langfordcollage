"use client";
import Label from '@/components/form/Label'
import Alert from '@/components/ui/alert/Alert';
import Button from '@/components/ui/button/Button'
import RichTextEditor from '@/components/ui/EditText/RichTextEdit';
import {Modal} from '@/components/ui/modal'
import {ConfirmModal} from '@/components/ui/modal/confirmAlert';
import {useModal} from '@/hooks/useModal'
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import toast from 'react-hot-toast';

function Pagetable() {
    const {isOpen, openModal, closeModal} = useModal();
    const {isOpen1, openModal1, closeModal1} = useModal();
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const [loading, setLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const [Universitys, setUniversitys] = useState([]);
    const [UniversityId, setUniversityId] = useState("");
    const [error, setError] = useState("");
    const [image, setImage] = useState("");
    const [image2, setImage2] = useState("");
    const [Universityimage, setUniversityImage] = useState("");
    const [Universityimage2, setUniversityImage2] = useState("");
    const [title, settitle] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");

    useEffect(() => {
        loadUniversitys();
    }, []);

    const loadUniversitys = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/getAllUnis`);

            if (response?.data?.status) {
                setUniversitys(response?.data?.data);
            } else {
                setUniversitys([]);
            }
        } catch (error: any) {
            toast.error(error?.response?.data?.error);
        }
    };

    const handleSave = async () => {
        setLoading(true);

        try {

            if (!Universityimage) {
                setError("Please Upload University Image");
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
            form.append("file", Universityimage);

            const res = await axios.post(`${BASE_URL}/api/uploadImage/university`,
                form,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            const form1 = new FormData();
            form1.append("file", Universityimage2);

            const res1 = await axios.post(`${BASE_URL}/api/uploadImage/university`,
                form1,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            // console.log(res);

            if (res?.data?.status) {

                if (res1?.data?.status) {
                    const response = await axios.post(`${BASE_URL}/api/addNewUni`, {
                        title: title,
                        description: description,
                        image_path: res1?.data?.fileUrl,
                        banner_path: res.data?.fileUrl,
                        link: link,
                    });

                    // console.log(response);

                    if (response?.data?.status) {
                        setLoading(false);
                        toast.success("University Added Successfully");
                        setTimeout(() => {
                            closeModal();
                            loadUniversitys();
                            clear();
                        }, 1000);
                    }
                }

            }

        } catch (error: any) {
            setLoading(false);
            setError(error?.response?.data?.error);
        }

        // closeModal();
    };

    const clear = () => {
        setUniversityId("");
        setImage("");
        setImage2("");
        setUniversityImage("");
        setUniversityImage2("");
        settitle("");
        setDescription("");
        setLink("");
        setIsEdit(false);
        setError("");
    }

    const handleImageChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            setUniversityImage(file);
        }
    };
    const handleImageChange1 = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage2(imageUrl);
            setUniversityImage2(file);
        }
    };

    const handleEdit = async () => {
        setLoading(true);
        try {

            if (!UniversityId) {
                setError("Somthing went wrong..");
                setLoading(false);
                return;
            }

            if (!image) {
                setError("Please Upload University Image");
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

            if (Universityimage) {
                if (Universityimage2) {
                    const form = new FormData();
                    form.append("file", Universityimage);

                    const res = await axios.post(`${BASE_URL}/api/uploadImage/university`,
                        form,
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        }
                    );

                    const form1 = new FormData();
                    form1.append("file", Universityimage2);

                    const res1 = await axios.post(`${BASE_URL}/api/uploadImage/university`,
                        form1,
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        }
                    );

                    // console.log(res);

                    if (res?.data?.status) {

                        const response = await axios.post(`${BASE_URL}/api/editUni`, {
                            uniId: UniversityId,
                            title: title,
                            description: description,
                            image_path: res1?.data?.fileUrl,
                            banner_path: res.data?.fileUrl,
                            link: link,
                        });

                        console.log(response);

                        if (response?.data?.status) {
                            setLoading(false);
                            closeModal();
                            // setTimeout(() => {
                            toast.success("University Updated Successfully");
                            loadUniversitys();
                            clear();
                            // }, 1000);
                        }

                    }
                } else {
                    const form = new FormData();
                    form.append("file", Universityimage);

                    const res = await axios.post(`${BASE_URL}/api/uploadImage/university`,
                        form,
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        }
                    );

                    // console.log(res);

                    if (res?.data?.status) {

                        const response = await axios.post(`${BASE_URL}/api/editUni`, {
                            uniId: UniversityId,
                            title: title,
                            description: description,
                            image_path: image2,
                            banner_path: res?.data?.fileUrl,
                            link: link,
                        });

                        console.log(response);

                        if (response?.data?.status) {
                            setLoading(false);
                            closeModal();
                            // setTimeout(() => {
                            toast.success("University Updated Successfully");
                            loadUniversitys();
                            clear();
                            // }, 1000);
                        }

                    }
                }
            } else {
                if (Universityimage2) {
                    const form1 = new FormData();
                    form1.append("file", Universityimage2);

                    const res1 = await axios.post(`${BASE_URL}/api/uploadImage/university`,
                        form1,
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        }
                    );

                    // console.log(res);

                    if (res1?.data?.status) {

                        const response = await axios.post(`${BASE_URL}/api/editUni`, {
                            uniId: UniversityId,
                            title: title,
                            description: description,
                            image_path: res1.data?.fileUrl,
                            banner_path: image,
                            link: link,
                        });

                        console.log(response);

                        if (response?.data?.status) {
                            setLoading(false);
                            closeModal();
                            // setTimeout(() => {
                            toast.success("University Updated Successfully");
                            loadUniversitys();
                            clear();
                            // }, 1000);
                        }

                    }
                } else {
                    const response = await axios.post(`${BASE_URL}/api/editUni`, {
                        uniId: UniversityId,
                        title: title,
                        description: description,
                        image_path: image2,
                        banner_path: image,
                        link: link,
                    });

                    console.log(response);

                    if (response?.data?.status) {
                        setLoading(false);
                        closeModal();
                        // setTimeout(() => {
                        toast.success("University Updated Successfully");
                        loadUniversitys();
                        clear();
                        // }, 1000);
                    }
                }
            }

        } catch (error: any) {
            setLoading(false);
            setError(error?.response?.data?.error);
        }
    }

    const deleteUniversity = async (UniversityId: any) => {
        try {
            const res = await axios.get(`${BASE_URL}/api/deleteUni?uniId=${UniversityId}`);
            if (res?.data?.status) {
                setLoading(false);
                closeModal1();
                setUniversityId("");
                loadUniversitys();
                toast.success("University Deleted Successfully");
            }
        } catch (error: any) {
            toast.error(error?.response?.data?.error);
        }
    }

    return (
        <>
            <div className='w-full h-full flex flex-col'>
                <div className="w-full flex justify-end">
                    <button className="bg-[#3B82F6] text-white py-2 rounded px-4" onClick={openModal}>Add New
                        University
                    </button>
                </div>
                <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>

                    {Universitys?.length > 0 ? (
                        <>
                            {Universitys?.map((data: any, index) => (

                                <div
                                    className='w-full border-2 rounded-lg shadow-md hover:shadow-md hover:shadow-blue-200  p-5 flex flex-col gap-1'
                                    key={index}>
                                    <img src={data?.image_path} alt={`${data?.title}_Image`}
                                         className='w-full h-[20vh] object-contain rounded'/>
                                    <span className='font-bold text-[20px] dark:text-white'>{data?.title}</span>
                                    <hr className='border-[1px] border-gray-300'/>
                                    <div className='flex flex-row gap-2 items-center mt-2'>
                                        <button className='bg-[#f6a53b] text-white py-1 rounded px-4 w-full'
                                                onClick={() => {

                                                    setUniversityId(data?.id);
                                                    settitle(data?.title);
                                                    setDescription(data?.description);
                                                    setImage(data?.banner_path);
                                                    setImage2(data?.image_path)
                                                    openModal();
                                                    setLink(data?.link);
                                                    setIsEdit(true);

                                                }}>Edit
                                        </button>
                                        <button className='bg-[#f63b3b] text-white py-1 rounded px-4 w-full'
                                                onClick={() => {
                                                    setUniversityId(data?.id);
                                                    openModal1();
                                                }}>Delete
                                        </button>
                                    </div>
                                </div>

                            ))}
                        </>
                    ) : (
                        <>
                            <div className='col-span-3 border-2 rounded-lg p-5 flex flex-col gap-1'>
                                <span className='font-semibold text-[20px] text-gray-400 dark:text-white'>No University Found..</span>
                            </div>
                        </>
                    )}

                </div>
            </div>

            <ConfirmModal isOpen={isOpen1} onClose={() => {
                closeModal1();
                setUniversityId("");
            }} className="max-w-[500px] m-4">
                <div
                    className="no-scrollbar relative w-full max-w-[500px] overflow-y-auto rounded-3xl border-2 border-gray-600 bg-white p-4 dark:bg-gray-900 lg:p-11">
                    <div className="px-2 border-b">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            Delete University
                        </h4>
                    </div>
                    <div className="flex flex-col">
                        <div className="custom-scrollbar h-full overflow-y-auto px-2 pb-3">
                            <div className="mt-7">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                                    <div className="col-span-2">
                                        <span className='dark:text-white text-xl text-black font-bold'>Are You Want to Delete This University</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                            <Button size="sm" variant="outline" disabled={loading} onClick={() => {
                                closeModal1();
                                setUniversityId("");
                            }}>
                                Close
                            </Button>

                            <Button size="sm" onClick={() => {
                                deleteUniversity(UniversityId);
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
                <div
                    className="no-scrollbar relative w-full max-w-[900px] max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
                    <div className="px-2">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            {isEdit ? "Edit University" : "Add New University"}
                        </h4>
                    </div>
                    <div className="flex flex-col">
                        {error && (
                            <>
                                <div className='w-full'>
                                    <Alert variant={'error'} title={'Oops'} message={error}/>
                                </div>
                            </>
                        )}
                        <div className="custom-scrollbar h-full overflow-y-auto px-2 pb-3">
                            <div className="mt-7">
                                <div className="grid grid-cols-1 lg:grid-cols-8 w-full gap-x-6 gap-y-5">
                                    <div className="w-full col-span-8 h-full flex flex-col">
                                        <Label>University Banner</Label>
                                        {image ? (
                                            <>
                                                <img
                                                    src={image || "/images/icons/image.svg"}
                                                    alt="University"
                                                    className={`w-full border rounded border-gray-300 object-cover object-center max-h-[41vh]`}
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <div
                                                    className='w-full h-[30vh] border rounded border-gray-300 object-cover flex justify-center items-center'>
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
                                        <Button size="sm" className="mt-2"
                                                onClick={() => document.getElementById("imageUpload")?.click()}>
                                            Upload Banner
                                        </Button>
                                    </div>
                                    <div className="w-full col-span-8 lg:col-span-3 h-full flex flex-col">
                                        <Label>University Logo</Label>
                                        {image2 ? (
                                            <>
                                                <img
                                                    src={image2 || "/images/icons/image.svg"}
                                                    alt="University"
                                                    className={`w-full border rounded border-gray-300 object-cover object-center max-h-[41vh]`}
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <div
                                                    className='w-full h-full border rounded border-gray-300 object-cover flex justify-center items-center'>
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
                                        <Button size="sm" className="mt-2"
                                                onClick={() => document.getElementById("imageUpload1")?.click()}>
                                            Upload LOGO
                                        </Button>
                                    </div>
                                    <div className="lg:col-span-5 grid col-span-8 grid-cols-1 gap-x-6 gap-y-5">
                                        <div className="col-span-1">
                                            <Label>Name</Label>
                                            <input type="text"
                                                   className='w-full bg-white border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                                   onChange={(e) => settitle(e.target.value)}
                                                   value={title}
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <Label>Description</Label>
                                            <RichTextEditor setHtmlContent={setDescription} htmlContent={description}/>
                                        </div>
                                    </div>
                                    <div className="grid col-span-8 grid-cols-1 gap-x-6 gap-y-5">
                                        <div className="col-span-1">
                                            <Label>University Link</Label>
                                            <input type="text"
                                                   className='w-full bg-white border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                                   onChange={(e) => setLink(e.target.value)}
                                                   value={link}
                                            />
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
                                    <Button size="sm" onClick={handleEdit} disabled={loading}
                                            className='flex items-center gap-3'>
                                        Update University
                                        {loading && (
                                            <div
                                                className="animate-spin rounded-full h-4 w-4 border-b-3 border-white"></div>
                                        )}
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button size="sm" onClick={handleSave} disabled={loading}
                                            className='flex items-center gap-3'>
                                        Add New University
                                        {loading && (
                                            <div
                                                className="animate-spin rounded-full h-4 w-4 border-b-3 border-white"></div>
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