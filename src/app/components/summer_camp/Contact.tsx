import React from 'react';

const Contact = () => {
    return (
        <section>
            <div id="Contact/Apply Now" className="px-4 md:px-8 2xl:px-16 pt-[10%] mb-[10%]">
                <div className="mx-auto md:w-full lg:w-3/5 2xl:w-4/6 flex h-full ltr:md:ml-7 rtl:md:mr-7 flex-col ltr:lg:pl-7 rtl:lg:pr-7">
                    <div className="flex items-center justify-center pb-7 md:pb-9 mt-7 md:-mt-1.5">
                        <h4 className="font-bold text-5xl mt-5 tracking-tight">
                            Contact/Apply Now
                        </h4>
                    </div>
                    <form className="w-full mx-auto flex flex-col justify-center" noValidate>
                        <div className="flex flex-col space-y-5">
                            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 gap-4">
                                <div className="w-full md:w-1/2">
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                                    >
                                        Your Name (required)
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                                        autoComplete="off"
                                        spellCheck="false"
                                        aria-invalid="false"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                                    >
                                        Your Email (required)
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                                        autoComplete="off"
                                        spellCheck="false"
                                        aria-invalid="false"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 gap-4">
                                <div className="w-full md:w-1/2">
                                    <label
                                        htmlFor="age"
                                        className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                                    >
                                        Age
                                    </label>
                                    <input
                                        id="age"
                                        name="age"
                                        type="text"
                                        placeholder="Enter Your Age"
                                        className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                                        autoComplete="off"
                                        spellCheck="false"
                                        aria-invalid="false"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
                                    <label
                                        htmlFor="country"
                                        className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                                    >
                                        Country
                                    </label>
                                    <input
                                        id="country"
                                        name="country"
                                        type="text"
                                        placeholder="Enter Your Country"
                                        className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                                        autoComplete="off"
                                        spellCheck="false"
                                        aria-invalid="false"
                                    />
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <label
                                    htmlFor="message"
                                    className="block text-gray-600 font-semibold text-sm leading-none mb-3"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body"
                                    autoComplete="off"
                                    spellCheck="false"
                                    rows={4}
                                    placeholder="Write your message here"
                                ></textarea>
                            </div>
                            <div className="relative justify-center flex">
                                <button
                                    data-variant="flat"
                                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
