import * as React from "react";

function Projects() {
    return (
        <div className="">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 mx-12 mt-48">
                <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col px-5 pt-2 max-md:mt-10 max-md:max-w-full">
                        <div className=" ml-3 text-base font-medium bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text max-md:ml-2">
                            → OUR BEST PROJECTS
                        </div>
                        <div className="mt-6 text-5xl font-bold text-neutral-900 max-md:max-w-full max-md:text-4xl">
                            Take A Look Our Work
                            <br />
                            Gallery Recent Projects
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col px-5 my-auto max-md:mt-10 max-md:max-w-full">
                        <div className="text-xl font-medium text-slate-500 max-md:max-w-full">
                            <hr className="mb-10" />
                            We Are 100+ Professional Software Engineers With More Than 10
                            Years Of Experience In Delivering Superior
                        </div>
                        <div className="flex mt-6">
                            <div className="flex flex-col justify-center px-7 py-4 font-medium border-2 border-green-400 border-solid rounded-full max-md:px-5">
                                <div className="bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text">
                                    VIEW ALL PROJECT
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <img src="/Frame 16.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects
