import * as React from "react"; 

function ProcessStep({ imageSrc, borderColor, title, description, }) { 
    return (
    <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full mx-auto "> 
        <div className="flex flex-col justify-center max-md:mt-10"> 
            <div className={`flex flex-col justify-center items-center px-8 rounded-full ${borderColor} aspect-square max-md:px-5 `}> 
                <div className="flex flex-col justify-center items-center px-10 rounded-full aspect-square max-md:px-5 bg-white">
                    <div className="flex justify-center items-center px-10 bg-gray-100 rounded-full h-[195px] w-[195px] max-md:px-5 shadow-xl"> 
                        <img src={imageSrc} className="aspect-square w-[120px] max-lg:w-[60px] max-md:w-[120px]" /> 
                    </div> 
                </div> 
            </div>
        </div> 
        <div className="flex flex-col grow max-md:mt-10 mt-3"> 
            <h3 className=" text-center text-3xl font-bold text-neutral-900">
                {title}
            </h3> 
            <p className="mt-4 text-xl font-medium text-center text-slate-500"> 
            {description}{" "} 
            </p> 
        </div> 
    </div>
    ); } 
    
    const processSteps = [{ 
        imageSrc: "/s4-il-5 2.png", 
        borderColor: "bg-gradient-to-r from-[#65C511] to-[#FFEE32]", 
        title: "1. MARKETING PLAN", 
        description: "Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu ent.", 
    }, 
        { imageSrc: "/s4-il-5 2.png", 
        borderColor: "bg-gradient-to-r from-[#B93F0A] to-[#82FF9E]", 
        title: "2. EXECUTION", 
        description: "Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu ent.", 
    }, 
        { imageSrc: "/s4-il-5 2.png", 
        borderColor: "bg-gradient-to-r from-[#007CEF] to-[#54FF65]", 
        title: "3. GROWTH & SCALE", 
        description: "Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu ent.", 
    },]; 
        
    function Process() { 
        return (
            <section className="flex flex-col items-center pt-2 mt-24"> 
                <h2 className="text-base font-medium bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text"> 
                    → OUR WORK PROCESS 
                </h2> 
                <h1 className="mt-7 text-6xl font-bold text-center text-neutral-900 max-md:max-w-full max-md:text-4xl"> 
                    A Simple, Yet Powerful And <br /> Efficient Process 
                </h1> 
                <div className="px-5 mt-20 w-full max-w-[1100px] max-md:mt-10 max-md:max-w-full"> 
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 "> 
                        {processSteps.map((step, index) => (
                        <ProcessStep 
                        key={index} 
                        imageSrc={step.imageSrc} 
                        borderColor={step.borderColor} 
                        title={step.title} 
                        description={step.description} />))} 
                    </div> 
                </div> 
            </section>
        ); }

export default Process