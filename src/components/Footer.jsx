import React from 'react'
import SubscribeNewsletter from "./SubscribeNewsletter"

const Footer = () => {
    return (
        <>
            <div className='mt-56  relative '>
                <img src="/Rectangle33.png" alt="" className='max-md:h-screen'/>
                <SubscribeNewsletter />

                <div className=' absolute bottom-10 max-lg:bottom-5 '>
                    <div className='w-screen flex px-24 max-md:px-12'>
                        <div className='w-1/3 max-md:hidden'>
                            <img src="/logo.png" className='h-10' />
                            <p className='my-12 text-white '>Improve Efficiency, Provide A Better Customer Experience With Modern Technolo Services Available</p>
                            <img src="/gto-footer-2-payment 1.png" alt="" />
                        </div>
                            <div className="flex w-2/3 max-md:w-full gap-5 max-md:gap-0 justify-center items-center">
                                <div className="flex flex-col w-1/3 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col px-5 text-lg font-bold text-white max-md:mt-10">
                                        <div className="text-2xl max-md:text-lg font-semibold">Resources</div>
                                        <div className=" max-md:text-sm mt-8">Carrer</div>
                                        <div className=" max-md:text-sm mt-5">About Us</div>
                                        <div className=" max-md:text-sm mt-5">Features</div>
                                        <div className=" max-md:text-sm mt-5">Services</div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 1/3 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col  px-5 text-lg font-bold text-white max-md:mt-10">
                                        <div className="text-2xl max-md:text-lg font-semibold">Company </div>
                                        <div className="max-md:text-sm mt-8 ">Blog</div>
                                        <div className="max-md:text-sm mt-5">Developers</div>
                                        <div className="max-md:text-sm mt-5">Our Story</div>
                                        <div className="max-md:text-sm mt-5">About Us</div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-1/3 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col px-5 text-lg font-bold text-white max-md:mt-10">
                                        <div className="text-2xl max-md:text-lg font-semibold">Help Pages</div>
                                        <div className="max-md:text-sm mt-8">Customer</div>
                                        <div className="max-md:text-sm mt-5">Developers</div>
                                        <div className="max-md:text-sm mt-5">Our Story</div>
                                        <div className="max-md:text-sm mt-5">About Us</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr className='w-screen mt-10 '/>
                        <p className='text-center mt-10 text-white'>Copyright © 2024, All Rights Reserved.</p>
                        <img src="/Frame 97.png" className=' absolute right-5 bottom-1'/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer