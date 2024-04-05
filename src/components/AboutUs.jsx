import * as React from "react";

function AboutUs() {
    return (
        <div>
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 mx-12  ">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col px-5 pt-2 my-auto max-md:mt-10 max-md:max-w-full">
                        <div className="ml-3 font-medium bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text max-md:ml-2">
                            → ABOUT US
                        </div>
                        <div className="mt-7 text-5xl font-bold text-neutral-900 max-md:max-w-full max-md:text-4xl">
                            We Want To Give You <br />
                            The Best Service
                        </div>
                        <div className="mt-5 text-xl font-medium text-slate-500 max-md:max-w-full">
                            We are 100+ professional software engineers with more <br />
                            than 10 year of experience in delivering superior products <br />
                            Believe it because you have seen it. Here are real numbers
                        </div>
                        <div className="pt-5 mt-7 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow mt-5 max-md:mt-10">
                                        <div className="text-8xl font-bold bg-gradient-to-l from-[#38EF7D] to-[#11998E] gradient-text max-md:text-4xl">
                                            24
                                        </div>
                                        <div className="mt-9 text-3xl font-bold text-slate-500">
                                            Year
                                            <br />
                                            Experience
                                        </div>
                                        <div className="flex mt-12 max-md:mt-10">
                                            <div className="flex flex-col justify-center px-7 py-4 font-medium border-2 border-green-400 border-solid rounded-[100px] max-md:px-5">
                                                <div className="bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text">
                                                    GET STARTED
                                                </div>
                                            </div>
                                            <img src="/Frame 16.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col text-lg font-semibold text-neutral-900 max-md:mt-10">
                                        <div className="flex gap-4">
                                            <img src="/Group 13.png"/>
                                            <p>Product Engineering</p>
                                        </div>
                                        <div className="flex gap-4 mt-4">
                                            <img src="/Group 13.png"/>
                                            <p>Digital Services</p>
                                        </div>
                                        <div className="flex gap-4 mt-4">
                                            <img src="/Group 13.png"/>
                                            <p>IT Consultancy</p>
                                        </div>
                                        <div className="flex gap-4 mt-4">
                                            <img src="/Group 13.png"/>
                                            <p>Digital Services</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <img src="/Group 17.png"/>
                </div>
            </div>
        </div>
    );
}


export default AboutUs