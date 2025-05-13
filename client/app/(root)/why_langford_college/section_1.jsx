import React from 'react'

function Section1() {
    return (<>
        <div
            className='w-full font-sans lg:pb-20 bg-white text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 '>
            <div className='w-full flex items-start flex-col lg:h-full'>
                <div className="w-full grid grid-cols-2">
                    <div className="w-full flex items-start flex-col lg:h-full capitalize">
                        <span className='text-[6vw] lg:text-[3.4vw] font-sans leading-none'>
                            Why should You Choose
                        </span>
                        <span className='text-[6vw] lg:text-[3.4vw] font-mono leading-[1.5]'>
                            Langford College
                        </span>
                    </div>
                    <div className="w-full h-full p-2">
                        <div className="border-b-2 h-[70%] border-gray-400 relative">
                        </div>
                    </div>
                </div>

                {/* section 1 */}
                <div
                    className='w-full bg-white pt-10 flex flex-col lg:flex-row'>
                    <div className={`w-full lg:w-[60%]`}>
                        <table className="w-full border-collapse border text-center text-[18px] border-gray-300">
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2 border border-gray-300"></th>
                                <th className="p-2 border border-gray-300">Traditional UK Pathway</th>
                                <th className="p-2 border border-gray-300">Langford College Pathway</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* Row 1: 1st Year Tuition Fee */}
                            <tr>
                                <td className="p-2 border border-gray-300">1st Year Tuition Fee</td>
                                <td className="p-2 border border-gray-300 description">£15,000</td>
                                <td className="p-2 border border-gray-300 description">£1,500</td>
                            </tr>
                            {/* Row 2: 2nd Year Tuition Fee */}
                            <tr>
                                <td className="p-2 border border-gray-300">2nd Year Tuition Fee</td>
                                <td className="p-2 border border-gray-300 description">£15,000</td>
                                <td className="p-2 border border-gray-300 description">£1,500</td>
                            </tr>
                            {/* Row 3: Final Year Tuition Fee */}
                            <tr>
                                <td className="p-2 border border-gray-300">Final Year Tuition Fee</td>
                                <td className="p-2 border border-gray-300 description">£15,000</td>
                                <td className="p-2 border border-gray-300 description">£15,000</td>
                            </tr>
                            {/* Row 4: Living Cost */}
                            <tr>
                                <td className="p-2 border border-gray-300">Living Cost</td>
                                <td className="p-2 border border-gray-300 description">£33,000</td>
                                <td className="p-2 border border-gray-300 description">Only Final Year £11,000</td>
                            </tr>
                            {/* Row 5: Total Cost */}
                            <tr>
                                <td className="p-2 border border-gray-300">Total Cost</td>
                                <td className="p-2 border border-gray-300 description">£78,000+</td>
                                <td className="p-2 border border-gray-300 description">£29,000+</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div
                        className={`w-full lg:w-[40%] flex flex-col justify-center items-center text-[7vw] mt-5 lg:mt-0 lg:text-[3vw] text-red-500`}>
                        <span>
                            Save £49,000
                        </span>
                        <span>
                            +
                        </span>
                        <span>
                           2 Years
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Section1;