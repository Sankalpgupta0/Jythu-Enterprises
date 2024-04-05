import * as React from "react";

const Navbar = () =>  {
    return (
        <div className=" flex flex-col justify-center px-2.5 py-5 max-md:pr-5  bg-gradient-to-l from-[#BFF4BE] to-[#D6F6D5]">
            <div className="flex gap-5 justify-between items-center w-full flex-wrap max-md:max-w-full">
                <img
                    src="/logo.png"
                    className=" max-w-full w-[115px]"
                />
                <div className="flex gap-5 justify-between py-2 my-auto font-medium text-neutral-900 max-md:flex-wrap">
                    <div className="flex">
                        <div>Home</div>
                        <select className="bg-transparent"></select>
                    </div>
                    <div className="my-auto">About Us</div>
                    <div className="flex">
                        <div>Pages</div>
                        <select className="bg-transparent"></select>
                    </div>
                    <div className="flex">
                        <div>Service</div>
                        <select className="bg-transparent"></select>
                    </div>
                    <div className="flex">
                        <div>News & Event</div>
                        <select name="" className=" bg-transparent" id=""></select>
                    </div>
                    <div className="my-auto">Contact Us</div>
                </div>
                <div className="flex gap-4  my-auto">
                    <div className="flex gap-2.5 my-auto">
                        <img
                            src="/Group 9.png"
                            className=" w-6"
                        />
                        <img
                            loading="lazy"
                            src="/Outline.png"
                            className="self-start w-6 aspect-square"
                        />
                    </div>
                    <div className="flex flex-col justify-center text-sm font-semibold text-white">
                        <div className="flex flex-col justify-center items-start px-6 py-2.5 w-full bg-[linear-gradient(270deg,#38EF7D_0%,#11998E_100%)] rounded-[162.5px] max-md:pl-5">
                            <div className="flex gap-1">
                                <div className="my-auto">GET QUOTE →</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Navbar;