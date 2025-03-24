import { ArticleCard } from '@/components/Article-Card'
import React from 'react'

function Body() {
    return (
        <>
            <div className='w-full px-[10vw] flex flex-col gap-10 pt-10 pb-20 bg-white text-black'>
                <span className='font-bold text-[3.5vw]'>Latest articles</span>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start gap-8 space-y-5'>
                    <ArticleCard
                        image="/Images/article.png"
                        title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                        description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                        action={true}
                    />
                    <ArticleCard
                        image="/Images/article.png"
                        title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                        description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                        action={true}
                    />
                    <ArticleCard
                        image="/Images/article.png"
                        title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                        description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                        action={true}
                    />
                    <ArticleCard
                        image="/Images/article.png"
                        title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                        description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                        action={true}
                    />
                    <ArticleCard
                        image="/Images/article.png"
                        title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                        description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                        action={true}
                    />
                    <ArticleCard
                        image="/Images/article.png"
                        title={"Celebrating Excellence: John Holden Awarded Honorary Doctorate of Business Administration"}
                        description={"We are thrilled to announce that our Company Director, John Holden, has been awarded an Honorary Doctorate of Business..."}
                        action={true}
                    />
                </div>
            </div>
        </>
    )
}

export default Body