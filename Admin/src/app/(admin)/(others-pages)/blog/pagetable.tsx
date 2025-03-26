"use client";
import Label from '@/components/form/Label'
import Button from '@/components/ui/button/Button'
import RichTextEditor from '@/components/ui/EditText/RichTextEdit';
import { Modal } from '@/components/ui/modal'
import { useModal } from '@/hooks/useModal'
import React, { useState } from 'react'
import Select from 'react-select'

function Pagetable() {
    const { isOpen, openModal, closeModal } = useModal();

    const [isdateModalOpen, setIsdateModalOpen] = useState(false);

    const options = [
        { value: 'Anytime', label: 'Any Time' },
        { value: 'SelectDate', label: 'Select Date' },
    ]
    const options1 = [
        { value: 'online', label: 'Online' },
        { value: 'inhouse', label: 'In-House' },
    ]

    const handleSave = () => {
        console.log("Saving changes...");
        closeModal();
    };

    return (
        <>
            <div className='w-full h-full flex flex-col'>
                <div className="w-full flex justify-end">
                    <button className="bg-[#3B82F6] text-white py-2 rounded px-4" onClick={openModal}>Add New Blog</button>
                </div>
                <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>
                    <div className='w-full border-2 rounded-lg shadow-md hover:shadow-md hover:shadow-blue-200 p-5 flex flex-col gap-1'>
                        <span className='font-bold text-[20px] dark:text-white'>COURSE_NAME</span>
                        <div className='flex flex-row gap-2 items-center mt-2'>
                            <span className='text-[18px] dark:text-white'>Start Date:</span>
                            <span className='text-[18px] dark:text-white'>Anytime</span>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <span className='text-[18px] dark:text-white'>Location:</span>
                            <span className='text-[18px] dark:text-white'>Online</span>
                        </div>
                        <div className='flex flex-row gap-2 items-center mt-2'>
                            <button className='bg-[#f6a53b] text-white py-1 rounded px-4 w-full'>Edit</button>
                            <button className='bg-[#f63b3b] text-white py-1 rounded px-4 w-full'>Delete</button>
                        </div>
                    </div>
                    <div className='w-full border-2 rounded-lg shadow-md hover:shadow-md hover:shadow-blue-200 p-5 flex flex-col gap-1'>
                        <span className='font-bold text-[20px] dark:text-white'>COURSE_NAME</span>
                        <div className='flex flex-row gap-2 items-center mt-2'>
                            <span className='text-[18px] dark:text-white'>Start Date:</span>
                            <span className='text-[18px] dark:text-white'>Anytime</span>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <span className='text-[18px] dark:text-white'>Location:</span>
                            <span className='text-[18px] dark:text-white'>Online</span>
                        </div>
                        <div className='flex flex-row gap-2 items-center mt-2'>
                            <button className='bg-[#f6a53b] text-white py-1 rounded px-4 w-full'>Edit</button>
                            <button className='bg-[#f63b3b] text-white py-1 rounded px-4 w-full'>Delete</button>
                        </div>
                    </div>
                    <div className='w-full border-2 rounded-lg shadow-md hover:shadow-md hover:shadow-blue-200 p-5 flex flex-col gap-1'>
                        <span className='font-bold text-[20px] dark:text-white'>COURSE_NAME</span>
                        <div className='flex flex-row gap-2 items-center mt-2'>
                            <span className='text-[18px] dark:text-white'>Start Date:</span>
                            <span className='text-[18px] dark:text-white'>Anytime</span>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <span className='text-[18px] dark:text-white'>Location:</span>
                            <span className='text-[18px] dark:text-white'>Online</span>
                        </div>
                        <div className='flex flex-row gap-2 items-center mt-2'>
                            <button className='bg-[#f6a53b] text-white py-1 rounded px-4 w-full'>Edit</button>
                            <button className='bg-[#f63b3b] text-white py-1 rounded px-4 w-full'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[800px] m-4">
                <div className="no-scrollbar relative w-full max-w-[800px] h-[90vh] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
                    <div className="px-2">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            Add New Course
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
                                        />
                                    </div>

                                    <div className="col-span-2 lg:col-span-1">
                                        <div className={`w-full grid ${isdateModalOpen ? 'grid-cols-2' : 'grid-cols-1'} gap-3`}>
                                            <div className='w-full'>
                                                <Label>Start Date</Label>
                                                <Select
                                                    options={options}
                                                    onChange={(e: any) => {
                                                        if (e.value === 'SelectDate') {
                                                            setIsdateModalOpen(true);
                                                        } else {
                                                            setIsdateModalOpen(false);
                                                        }

                                                    }}
                                                />
                                            </div>
                                            {isdateModalOpen && (
                                                <>
                                                    <div className='w-full'>
                                                        <Label>Enter Date</Label>
                                                        <input type="date"
                                                            className='w-full bg-white border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Location</Label>
                                        <Select options={options1} />
                                    </div>

                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Study Pace</Label>
                                        <input type="text"
                                            className='w-full border bg-white p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                        />
                                    </div>

                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Qualifications</Label>
                                        <input type="text"
                                            className='w-full border bg-white p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                        />
                                    </div>

                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Assessment</Label>
                                        <input type="text"
                                            className='w-full border bg-white p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Includes</Label>
                                        <input type="text"
                                            className='w-full border bg-white p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <Label>How it works</Label>
                                        <RichTextEditor />
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Course Modules</Label>
                                        <RichTextEditor />
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Entry Requirements</Label>
                                        <RichTextEditor />
                                    </div>
                                    <div className="col-span-2">
                                        <Label>Cost & Payment</Label>
                                        <RichTextEditor />
                                    </div>
                                    <div className="col-span-2">
                                        <Label>Career Progression</Label>
                                        <RichTextEditor />
                                    </div>
                                    <div className="col-span-2">
                                        <Label>University Options</Label>
                                        <RichTextEditor />
                                    </div>
                                    <div className="col-span-2">
                                        <Label>Sample Certificate</Label>
                                        <RichTextEditor />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                            <Button size="sm" variant="outline" onClick={closeModal}>
                                Close
                            </Button>
                            <Button size="sm" onClick={handleSave}>
                                Add New Course
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Pagetable