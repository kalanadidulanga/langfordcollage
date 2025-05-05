export const ArticleCard = ({ image, title, description, slug, action }) => {

    const truncateHTML = (html, limit) => {
        const div = document.createElement("div");
        div.innerHTML = html;
        const text = div.innerText || div.textContent;
        return text.length > limit ? text.substring(0, limit) + "..." : text;
      };

    return (
        <div className="w-full font-sans flex flex-col gap-3">
            <img src={image} alt="article_image" className="w-full h-[304px] object-cover" />
            <span className="text-2xl text-black font-bold font-sans">{title}</span>
            <div
                className="text-[16px] text-black font-light line-clamp-2 lg:line-clamp-5 h-full"
                dangerouslySetInnerHTML={{ __html: truncateHTML(description, 250) }}
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
