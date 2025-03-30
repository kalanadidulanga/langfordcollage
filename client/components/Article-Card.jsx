export const ArticleCard = ({ image, title, description, slug, action }) => {
    return (
        <div className="w-full font-sans flex flex-col gap-3">
            <img src={image} alt="courses_image" className="w-full h-[304px] object-cover" />
            <span className="text-2xl text-black font-bold font-sans">{title}</span>
            <div
                className="text-[18px] text-black font-light line-clamp-2 lg:line-clamp-5 h-full"
                dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="flex items-start justify-start w-full text-white">
                <button
                    className="btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md font-sans font-normal shadow-[#e2241aa6] transition-all duration-200 hover:scale-105"
                    onClick={() => {
                        window.location.href = `/individual/blog/${slug}`
                    }}
                >
                    {action ? "View Article" : "Find out more"}
                </button>
            </div>
        </div>
    );
};
