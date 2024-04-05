import React from 'react'

function SubscribeNewsletter() {
    return (
        <section className="flex flex-col pt-20 absolute top-[-50%] max-lg:hidden">
            <div className="pr-14 pl-6 mt-28 w-4/5 bg-gradient-to-l from-[#38EF7D] to-[#11998E] rounded-2xl mx-auto max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                        <img src="/n4-img-1 1.png"/>
                    </div>
                    <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col my-auto text-lg max-md:mt-10 max-md:max-w-full">
                            <h2 className="text-4xl font-bold text-white  max-md:max-w-full">
                                Subscribe To Our <span className="underline">Newsletter!</span>
                            </h2>
                            <p className="mt-8 font-medium text-white max-md:max-w-full">
                                We are 100+ professional software engineers with more than 10 years in delivering super products it because you've seen it.
                            </p>
                            <form className="flex gap-5 justify-between py-1 pr-1 pl-7 mt-16 bg-white rounded-xl shadow-sm max-md:flex-wrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                                <label htmlFor="email" className="my-auto font-medium text-neutral-900 text-opacity-80">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    aria-label="Your Email"
                                    className="sr-only"
                                />
                                <button
                                    type="submit"
                                    className="justify-center px-9 py-3 font-semibold text-white rounded-lg bg-gradient-to-l from-[#38EF7D] to-[#11998E] max-md:px-5"
                                >
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SubscribeNewsletter;