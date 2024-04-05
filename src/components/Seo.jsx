import * as React from "react";

function ProgressBar({ label, value }) {
    return (
        <>
            <div className="flex gap-5 justify-between mt-7 text-xl font-medium max-md:flex-wrap max-md:max-w-full">
                <div className="text-neutral-900">{label}</div>
                <div className={`bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text`}>{value}%</div>
            </div>
            <div className="flex flex-col justify-center items-start py-1.5 mt-2 border-2 border-green-400 border-solid rounded-full max-md:pr-5 max-md:max-w-full">
                <div
                    className={`max-w-full h-1.5 bg-gradient-to-r from-[#38EF7D] to-[#11998E] rounded-full w-[400px]`}
                />
            </div>
        </>
    );
}

function Seo() {
    const progressData = [
        {
            label: "Finance Consulting",
            value: 80,
        },
        {
            label: "Finance Consulting",
            value: 80,
        },
        {
            label: "Finance Consulting",
            value: 80,
        },
    ];

    return (
        <div className="">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 mx-12 mt-48">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="grow mt-2 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:hidden">
                            <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col max-md:mt-9">
                                    <img
                                        src="/Rectangle 15.png"
                                        alt="Marketing and Creative Solutions"

                                    />
                                    <img
                                        src="Rectangle 16.png"
                                        alt=""

                                    />
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                <img
                                    src="/Rectangle 14.png"
                                    alt="Marketing and Creative Solutions"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-5 pt-2 max-md:mt-10 max-md:max-w-full">
                        <div className="self-start ml-3.5 text-base font-medium bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text max-md:ml-2.5">
                            → WITH SEO OPTIMIZATION
                        </div>
                        <h1 className="mt-7 text-6xl font-bold text-neutral-900 max-md:max-w-full max-md:text-4xl">
                            Marketing And Creative <br /> Solutions Seo
                        </h1>
                        <p className="mt-5 text-xl font-medium text-slate-500 max-md:max-w-full">
                            We are 100+ professional software engineers with more <br /> than
                            10 year of experience in delivering superior products.
                        </p>
                        {progressData.map((item, index) => (
                            <ProgressBar
                                key={index}
                                label={item.label}
                                value={item.value}
                                color={item.color}
                            />
                        ))}
                        <div className="flex justify-between mt-14 max-md:flex-wrap max-md:mt-10">
                            <div className="flex">
                                <div className="flex flex-col justify-center px-7 py-4 font-medium border-2 border-green-400 border-solid rounded-full max-md:px-5">
                                    <div className="bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text ">
                                        VIEW ALL SERVICES
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <img src="/Frame 16.png" />
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex justify-center items-center">
                                    <img src="/Frame 49.png"/>
                                </div>
                                <div className="flex flex-col">
                                    <div className="bg-gradient-to-l from-[#38EF7D] to-[#11998E] gradient-text">
                                        Call Us Anytime
                                    </div>
                                    <div className="text-3xl font-bold text-neutral-900">
                                        0215 6856 9875
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Seo;