import * as React from "react";

function HeroBox() {
    return (
        
        <div className="flex gap-4 bg-white rounded-xl shadow-2xl w-fit py-7 px-7 max-lg:px-1">
            <img src="/Group 12.png"/>
            <div className="">
                <p className="text-4xl font-bold bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text" >5.4K</p>
                <div className="">Clients Satisfaction</div>
            </div>
        </div>
    );
}

export default HeroBox;


