import React from 'react'

const Blog = () => {
    const ArticleCard = ({ category, date, title, description, imageSrc }) => (
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-1/4 max-md:ml-0 max-md:w-full">
                <img src={imageSrc} alt={title} className="w-full grow  max-md:mt-7" />
            </div>
            <div className="flex flex-col ml-5 w-2/3 max-md:ml-0 max-md:w-full">
                <article className="flex flex-col px-5 py-8 w-full text-sm font-medium bg-white rounded-3xl border-2 border-solid border-zinc-200 max-md:mt-7 max-md:max-w-full">
                    <div className="flex gap-5 justify-between self-start max-md:flex-wrap">
                        <div className="flex flex-col justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-[#38EF7D]/[25%] to-[#11998E]/[25%]">
                            <div className="bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text">{category}</div>
                        </div>
                        <div className="my-auto text-neutral-900 text-opacity-80">{date}</div>
                    </div>
                    <h2 className="mt-7 text-2xl font-semibold text-neutral-900 max-md:mr-1.5 max-md:max-w-full">{title}</h2>
                    <p className="mt-8 text-neutral-900 text-opacity-80 max-md:max-w-full">{description}</p>
                </article>
            </div>
        </div>
    );

    const articles = [
        {
            category: "Design",
            date: "March 7, 2024",
            title: "Agency Needs To Embrace Social Media..",
            description: "Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla",
            imageSrc: "/Rectangle 30.png",
        },
        {
            category: "Business",
            date: "March 7, 2024",
            title: "Lead Designer's UI/UX Core Checklist.",
            description: "Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla",
            imageSrc: "/Rectangle 30 (1).png",
        },
        {
            category: "Development",
            date: "March 7, 2024",
            title: "Lead Designer's UI/UX Core Checklist.",
            description: "Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla",
            imageSrc: "/Rectangle 30 (2).png",
        },
        {
            category: "Marketing",
            date: "March 7, 2024",
            title: "We Are Building Everything You Needed",
            description: "Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla",
            imageSrc: "/Rectangle 30 (3).png",
        },
    ];

    return (
        <div className='flex w-screen px-12 mt-36 max-md:block'>
            <section className="flex flex-col pt-2 w-1/3 max-md:w-full">
                <p className='bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text'> → OUR BLOGS & NEWS</p>
                <h1 className='mt-5 w-full text-5xl font-bold text-neutral-900 max-md:max-w-full max-md:text-4xl'>
                    Get More Update <br /> For News
                </h1>
                <p className='mt-10 w-full text-xl font-medium text-slate-500 max-md:max-w-full'>
                    We are 100+ professional software engineers with more than 10 years of
                    experience in delivering super products it because you've seen it.
                </p>
                <div className="flex gap-px mt-10">
                    <div className="flex flex-col justify-center px-7 py-4 font-medium border-2 border-green-400 border-solid rounded-[100px] max-md:px-5">
                        <div className="bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text">
                            VIEW ALL Blogs
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/Frame 16.png" />
                    </div>
                </div>
            </section>
            <section className="flex flex-col w-2/3 max-md:w-full">
                {articles.map((article, index) => (
                    <div key={index} className="mt-10 w-full max-md:max-w-full">
                        <ArticleCard {...article} />
                    </div>
                ))}
            </section>

        </div>
    )
}

export default Blog