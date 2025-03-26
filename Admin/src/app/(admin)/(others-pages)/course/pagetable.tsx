"use client";
import Label from '@/components/form/Label'
import Button from '@/components/ui/button/Button'
import RichTextEditor from '@/components/ui/EditText/RichTextEdit';
import { Modal } from '@/components/ui/modal'
import { useModal } from '@/hooks/useModal'
import React from 'react'
import Select from 'react-select'

function Pagetable() {
    const { isOpen, openModal, closeModal } = useModal();

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
                    <button className="bg-[#3B82F6] text-white py-2 rounded px-4" onClick={openModal}>Add New Course</button>
                </div>
                <table className="w-full mt-8">
                    <thead>
                        <tr>
                            <th className="px-1 py-2">ID</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Start Date</th>
                            <th className="px-4 py-2">Location</th>
                            <th className="px-4 py-2 w-[100px]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-1 text-center py-2">1</td>
                            <td className="border px-4 py-2">Course 1</td>
                            <td className="border px-4 py-2">Description 1</td>
                            <td className="border px-4 py-2">Description 1</td>
                            <td className="border px-4 py-2 flex gap-3 justify-center">
                                <button className="bg-[#f6bb3b] text-white py-2 rounded px-4">Edit</button>
                                <button className="bg-[#f63b3b] text-white py-2 rounded px-4">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
                                            className='w-full border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                        />
                                    </div>

                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Start Date</Label>
                                        <Select options={options} />
                                    </div>

                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Location</Label>
                                        <Select options={options1} />
                                    </div>

                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Study Pace</Label>
                                        <input type="text"
                                            className='w-full border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                        />
                                    </div>

                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Qualifications</Label>
                                        <input type="text"
                                            className='w-full border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                        />
                                    </div>

                                    <div className="col-span-2 lg:col-span-1">
                                        <Label>Assessment</Label>
                                        <input type="text"
                                            className='w-full border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Includes</Label>
                                        <input type="text"
                                            className='w-full border p-2 h-[40px] rounded border-gray-300 font-normal outline-none focus:border-2 focus:border-blue-500 focus:shadow-lg'
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
                                Save Changes
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Pagetable