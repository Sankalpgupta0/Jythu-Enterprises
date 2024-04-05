import * as React from "react"; 

function StarRating({ rating }) { 
    const fullStars = Math.floor(rating); 
    const hasHalfStar = rating - fullStars >= 0.5; 
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); 
    return ( 
        <div className="flex gap-1.5"> 
            {[...Array(fullStars)].map((_, i) => ( <img key={`full-${i}`} 
            src="/Star.png" 
        /> 
        ))} 
        </div> 
    ); } 
    
    function TestimonialCard({ imageSrc, rating, quote, name, title }) { 
        return ( 
            <div className="flex flex-col justify-center max-md:max-w-full "> 
                <div className="flex flex-col py-5 bg-white rounded-3xl max-md:max-w-full"> 
                    <div className="max-md:max-w-full"> 
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0"> 
                            <div className="flex flex-col w-1/3 max-md:ml-0 max-md:w-full"> 
                                <img src={imageSrc} className="max-w-full grow shrink-0 max-md:mt-3.5" /> 
                            </div> 
                            <div className="flex flex-col ml-5 w-2/3 max-md:ml-0 max-md:w-full"> 
                                <div className="flex flex-col my-auto max-md:mt-8"> 
                                    <StarRating rating={rating} /> 
                                    <blockquote className="mt-5 text-lg font-medium text-neutral-900 text-opacity-80"> 
                                        {quote} 
                                    </blockquote> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                    <hr className="border-0 border-solid bg-slate-500 border-slate-500 max-md:max-w-full" /> 
                    <div className="flex gap-5 mt-4 font-medium max-md:flex-wrap max-md:max-w-full"> 
                        <div className="flex-auto text-lg text-neutral-900 text-opacity-80">
                            {name}
                        </div> 
                        <div className="flex-auto my-auto text-sm bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text"> 
                            {title} 
                        </div> 
                    </div> 
                </div> 
            </div> 
        ); } 
        
        const testimonials = [  
            { 
                imageSrc: "/gto-t5-img-1 1.png", 
                rating: 5, 
                quote: "With Over A Decade Of Experie, We've Established Ourselves As One Of The Pioneering Agencies In The Region. Our Small, Flexible, Agile And Design-Led Structures & Processes", 
                name: "ESTHER HOWARD", 
                title: "FINANCE SPECIALIST", 
            }, 
            { 
                imageSrc: "/gto-t5-img-2 1.png", 
                rating: 5, 
                quote: "With Over A Decade Of Experie, We've Established Ourselves As One Of The Pioneering Agencies In The Region. Our Small, Flexible, Agile And Design-Led Structures & Processes", 
                name: "ESTHER HOWARD", 
                title: "FINANCE SPECIALIST", 
            }, 
            { 
                imageSrc: "/gto-t5-img-3 1.png", 
                rating: 5, 
                quote: "With Over A Decade Of Experie, We've Established Ourselves As One Of The Pioneering Agencies In The Region. Our Small, Flexible, Agile And Design-Led Structures & Processes", 
                name: "ESTHER HOWARD", 
                title: "FINANCE SPECIALIST", 
            },
        ]; 
        
        function Testimonies() { 
            return ( 
                <section className="flex flex-col px-5 pt-2 mt-48 mx-12 "> 
                    <h2 className=" mt-2 font-medium text-center bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text"> 
                        → OUR TESTIMONIAL 
                    </h2> 
                    <h1 className=" mt-7 text-6xl font-bold text-center text-neutral-900 max-md:max-w-full max-md:text-4xl"> 
                        What Our Clients Say <br /> About Us 
                    </h1> 
                    <div className="flex gap-5 justify-between mt-14 max-md:flex-wrap max-md:mt-10"> 
                        {testimonials.map((testimonial, index) => ( 
                            <TestimonialCard key={index} {...testimonial} /> 
                        ))} 
                    </div> 
                    <div className="flex gap-5 mt-14 w-4/5 max-md:flex-wrap max-md:mt-10 max-md:max-w-full"> 
                        <div className="flex flex-col  justify-center items-start my-auto bg-teal-500 bg-opacity-20 rounded-[100px] w-fit max-md:max-w-full"> 
                            <div className=" max-w-full h-1.5 bg-[linear-gradient(270deg,#38EF7D_0%,#11998E_100%)] w-[600px]" /> 
                        </div> 
                        <img src="Frame 67.png" alt="" />
                    </div> 
                </section> 
            ); } 
                
        export default Testimonies;