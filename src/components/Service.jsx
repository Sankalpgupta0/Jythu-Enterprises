import * as React from "react";

const services = [
    {
        image: "/s4-il-1 1.png",
        title: "Strategy & Planning",
        description:
            "Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.",
    },
    {
        image: "/s4-il-2 1.png",
        title: "Planning & Strategy",
        description:
            "Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.",
    },
    {
        image: "/s4-il-3 1.png",
        title: "Content Marketing",
        description:
            "Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.",
    },
    {
        image: "/s4-il-4 1.png",
        title: "Seo Audits & Strategy",
        description:
            "Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.",
    },
    {
        image: "/s4-il-5 1.png",
        title: "Design & Development",
        description:
            "Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.",
    },
    {
        image: "/s4-il-6 1.png",
        title: "Seo Audits & Strategy",
        description:
            "Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.",
    },
];
const ServiceCard = ({ image, title, description }) => (
    <div className="flex flex-col relative h-[500px] justify-center item-center w-full max-md:ml-0 max-md:w-full serviceBg">
        <img src={image} className="w-32 my-10 aspect-auto   mx-auto "/>
        <h3 className="my-3 text-2xl font-bold text-center text-neutral-900">{title}</h3>
        <p className="mt-2 mb-24 font-medium text-center text-slate-500 px-16">
            {description}
        </p>
        <img src="/Group 19.png" className="w-16 left-1/2 -translate-x-1/2 absolute bottom-7"/>

    </div>
);

function Service() {
    return (
        <div className="flex flex-col items-center pt-2 mt-24">
            <div className="font-medium bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text">
                → OUR BEST SERVICES
            </div>
            <h2 className="mt-7 text-6xl font-bold text-neutral-900 max-md:max-w-full max-md:text-4xl">
                We Provide Best Services
            </h2>
            
            <section className=" w-screen mt-12">
                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1    ">
                {
                    services.map((service) => (
                        <ServiceCard 
                        image={service.image} 
                        title={service.title} 
                        description={service.description}/>
                        ))
                }
                </div>
            </section>
            <div className="flex gap-px mt-16 max-md:mt-10 h-1/2">
                <div className="flex flex-col justify-center px-7 py-4 font-medium border-2 border-green-400 border-solid rounded-[100px] max-md:px-5">
                    <div className="bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text">
                        VIEW ALL SERVICES
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src="/Frame 16.png"/>
                </div>
            </div>
        </div>
    );
}

export default Service;