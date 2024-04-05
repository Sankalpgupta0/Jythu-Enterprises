import * as React from "react";

function TeamMember({ src }) {
    return (
        <div className="mt-32 flex flex-col flex-wrap w-1/3 h-full max-md:ml-0 max-md:w-full TeamBg items-center">
            <img src={src} className="mt-20  "/>
            <h1 className=" text-white text-4xl max-lg:text-2xl">RACHNA SHETH</h1>
            <p className="text-white">FULL STACK DEVELOPER</p>
        </div>
    );
} 

function Team() {
    const teamMembers = [
        {
            src: "/t4-img-1 1.png",
        },
        {
            src: "/t4-img-2 1.png",
        },
        {
            src: "/t4-img-3 1.png",
        },
    ];

    return (
        <div className="flex flex-col ">
            <div className="px-5 w-full max-md:max-w-full">
                <div className="flex gap-x-5 max-md:flex-col max-md:gap-0">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} src={member.src} />
                    ))}
                </div>
            </div>
            <div className="flex  justify-center items-center">
                <div className="flex flex-col justify-center items-center px-7 py-4 font-medium border-2 border-green-400 border-solid rounded-full max-md:px-5">
                    <div className="bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text">
                        VIEW ALL TEAM
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src="/Frame 16.png"/>
                </div>
            </div>
        </div>
    );
}

export default Team;