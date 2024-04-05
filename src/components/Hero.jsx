import React from 'react'
import HeroBox from './HeroBox'

const Hero = () => {
    return (
        <>
            <div className='bgHero '>
                <div className='flex items-center'>
                    <div className='w-1/2 max-md:hidden'>
                        <img src="/gto-hero-4-img-1.png" className='mx-16' />
                        <div className='mx-20'>
                            <HeroBox />
                        </div>
                    </div>
                    <div className='w-1/2 max-md:w-full'>
                        <div className="flex flex-col px-5 max-w-screen">
                            <div className="ml-3.5 font-medium bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text max-md:ml-2.5">

                                → WELCOME TO JYTHU
                            </div>
                            <div className="mt-6 w-full text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl">
                                A Marketing <br />
                                <span className='gradient-underline '><span className=" bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text">Agency</span></span> To Grow <br />
                                Your Business
                            </div>
                            <div className="mt-9 w-full font-medium text-white text-opacity-80 max-md:max-w-full">
                                We are 100+ professional software engineers with more than 10 year of{" "}
                                <br />
                                experience in delivering superior products Believe it because you have{" "}
                                <br />
                                seen it. Here are real numbers
                            </div>
                            <div className="flex gap-5 mt-10 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-px">
                                    <div className="flex flex-col justify-center px-7 py-4 font-medium border-2 border-green-400 border-solid rounded-full max-md:px-5">
                                        <div className="bg-gradient-to-r from-[#38EF7D] to-[#11998E] gradient-text">
                                            GET STARTED
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-start">
                                        <img
                                            src='/Frame 16.png'
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-start gap-3 text-lg font-semibold text-white">
                                    <img
                                        src='Frame 17.png'
                                        className="w-16"
                                    />
                                    <p className="my-auto">WATCH VIDEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default Hero