export default function UniProgession() {

    return (
        <div className="w-full pt-30 pb-20 bg-white text-[#2e2e27] px-[10vw] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between lg:gap-32 gap-5">
            {/* Left Side - Text Content */}
            <div className="flex items-start justify-start flex-col gap-3 w-full">
                <img src="/Images/uni_progession.jpg" alt="langford" className="w-full h-full" />
            </div>
            {/* Right Side - List Items */}
            <div className="w-full flex items-start gap-5 flex-col description">
                <div className="w-full flex flex-col text-3xl md:text-[3.5vw]">
                    <span className="font-sans leading-none">University</span>
                    <span className="font-mono leading-[1.1]">Progression</span>
                </div>
                <div className="flex text-[18px]">
                    <span>
                        Upon completing your pathway degree at Langford College, you can seamlessly progress to a prestigious UK university, enhancing your education and career prospects with globally recognized qualifications.
                    </span>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <div className="flex text-[18px] items-center">
                        <li></li>
                        <a href="/business_progression" className="block px-4 text-gray-800  hover:pl-6 transition-all duration-200 capitalize">Business progression courses</a>
                    </div>
                    <div className="flex text-[18px] items-center">
                        <li></li>
                        <a href="/it_progression" className="block px-4 py-1 text-gray-800  hover:pl-6 transition-all duration-200 capitalize">IT & Engineering progression courses</a>
                    </div>
                    <div className="flex text-[18px] items-center">
                        <li></li>
                        <a href="/hospitality_progression" className="block px-4 py-1 text-gray-800  hover:pl-6 transition-all duration-200 capitalize">Hospitality progression courses</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
