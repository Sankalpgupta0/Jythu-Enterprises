import * as React from "react";

function Companys() {
    return (
        <div className="flex flex-col mx-12 my-20 ">
            <div className="w-full text-5xl font-bold bg-clip-text bg-[linear-gradient(270deg,#38EF7D_0%,#11998E_100%)] text-neutral-900 max-md:max-w-full">
                200+ Trusted Partners
            </div>
            <div className="flex gap-5 justify-between px-5 mt-24 w-full flex-wrap max-md:mt-10 max-md:max-w-full">
                <img src="/google.png"/>
                <img src="/amazon.png"/>
                <img src="/spotify.png"/>
                <img src="/slack.png"/>
                <img src="/linkedin.png"/>
                <img src="/walmart.png"/>
            </div>
            <hr className="bg-gradient-to-r from-[#BFF4BE] to-[#D6F6D5] mt-10" />
        </div>
    );
}



export default Companys