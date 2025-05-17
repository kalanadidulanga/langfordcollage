export default function UniProgession() {

    return (
        <div
            className="w-full pt-20 pb-10 lg:pb-30 bg-white text-[#2e2e27] px-[10vw] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between lg:gap-32 gap-5">
            {/* Left Side - Text Content */}
            <div className="flex items-start justify-start flex-col gap-3 w-full">
                <img src="/Images/uni_progession.jpg" alt="langford" className="w-full h-full"/>
            </div>
            {/* Right Side - List Items */}
            <div className="w-full flex items-start gap-5 flex-col description">
                <div className="w-full flex flex-col text-[9vw] md:text-[3.5vw]">
                    <div className="w-full lg:grid lg:grid-cols-3">
                        <div className="w-full col-span-2 flex items-start flex-col lg:h-full">
                            <span className="text-[9vw] lg:text-[3.5vw] font-sans font-bold leading-none">
                                University
                            </span>
                            <span className="text-[9vw] lg:text-[3.5vw] font-mono leading-[1.1]">
                                Progression
                            </span>
                        </div>
                        <div className="w-full h-full p-2">
                            <div className="border-b-2 h-[85%] border-gray-400 relative">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex description2 text-[14px] lg:text-[18px] lg:description">
                    <span>
                        Upon completing your pathway degree at Langford College, you can seamlessly progress to a prestigious UK university, enhancing your education and career prospects with globally recognized qualifications.
                    </span>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <div className="flex description2 text-[14px] lg:text-[18px] lg:description items-center">
                        <li></li>
                        <a href="/business_progression"
                           className="block text-gray-800  hover:ml-6 transition-all duration-200 capitalize border-b-[3px] border-[#E2231A] leading-[1] cursor-pointer hover:text-[#E2231A]">Business
                            progression courses</a>
                    </div>
                    <div className="flex description2 text-[14px] lg:text-[18px] lg:description items-center">
                        <li></li>
                        <a href="/it_progression"
                           className="block text-gray-800  hover:ml-6 transition-all duration-200 capitalize border-b-[3px] border-[#E2231A] leading-[1] cursor-pointer hover:text-[#E2231A]">IT
                            & Engineering progression courses</a>
                    </div>
                    <div className="flex description2 text-[14px] lg:text-[18px] lg:description items-center">
                        <li></li>
                        <a href="/hospitality_progression"
                           className="block text-gray-800  hover:ml-6 transition-all duration-200 capitalize border-b-[3px] border-[#E2231A] leading-[1] cursor-pointer hover:text-[#E2231A]">Hospitality
                            Hospitality & Social Care Progression courses</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
