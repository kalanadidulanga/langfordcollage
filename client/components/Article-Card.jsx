export const ArticleCard = ({ image, title, description, action }) => {
    return (
        <div className="w-full flex flex-col gap-3">
            <img src={image} alt="courses_image" className="w-full h-[304px] object-cover" />
            <span className="text-2xl text-black font-bold">{title}</span>
            <span className="text-[18px] text-black font-light">{description}</span>
            <div className="flex items-start justify-start w-full text-white">
                <button
                    className="btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6]"
                    onClick={() => {
                        window.location.href = "/individual/blog/1"
                    }}
                >
                    {action ? "View Article" : "Find out more"}
                </button>
            </div>
        </div>
    );
};
