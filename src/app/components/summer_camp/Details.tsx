import Image from 'next/image';

const Details = () => {
        return (
            <section>
                <div id="Details" className='w-full text-white bg-black px-[5%] pb-[5%] pt-[5%]'>
                {/* <h2 className='font-bold text-3xl md:text-5xl mt-5 mb-[30px] text-center'>Details</h2> */}
                <div className='w-full '>
                        <div className='flex  justify-between items-start flex-col lg:flex-row lg:flex-wrap gap-10'>
                            <div className='flex-[1_1_33%]'>
                                <p className='text-xl md:text-5xl font-bold'><span className='border-b-2 text-yellow-500'>Date</span></p>
                                <p className='text-lg'>
                                    ① <span className='text-4xl font-serif'>5</span> August - <span className='text-4xl font-serif'>9</span> August <br />
                                    ② <span className='text-4xl font-serif'>12</span> August - <span className='text-4xl font-serif'>16</span> August <br />
                                    ③ <span className='text-4xl font-serif'>19</span> August - <span className='text-4xl font-serif'>23</span> August <br />
                                    ④ <span className='text-4xl font-serif'>26</span> August - <span className='text-4xl font-serif'>30</span> August <br />
                                </p>
                                    * 4 nights 5 days
                            </div>
                            <div className='flex-[1_1_33%]'>
                                <p className='text-xl md:text-5xl font-bold'><span className='border-b-2 text-yellow-500'>Target Age</span></p>
                                <div className=''>
                                    <p className='text-9xl font-serif'>18-25</p>
                                </div>
                            </div>
                            <div className='flex-[1_1_33%]'>
                                <p className='text-xl md:text-5xl font-bold'><span className='border-b-2 text-yellow-500'>Capacity</span></p>
                                <p className='text-lg '><span className='text-8xl font-serif'>6</span> people for each term</p>
                            </div>
                            <div className='flex-[1_1_33%]'>
                                <p className='text-xl md:text-5xl font-bold'><span className='border-b-2 text-yellow-500'>Actual Cost</span></p>
                                <p className='text-lg'> <span className='text-5xl font-serif'>$</span> <span className='text-8xl font-serif'>500</span> - <span className='text-5xl font-serif'>$</span> <span className='text-8xl font-serif'>900</span>/person</p>
                                <p className='text-lg'>(Not included Transportation to and from island)</p>
                            </div>
                            <div className='flex-[1_1_33%]'>
                                <p className='text-xl md:text-5xl font-bold'><span className='border-b-2 text-yellow-500'>Accommodation</span></p>
                                <p className='text-7xl font-serif'>Kyodai-so</p>
                                <p className='text-lg'>(The participants live under the same roof)</p>
                            </div>
                            <div className='flex-[1_1_33%] '>
                                <p className='text-xl md:text-5xl font-bold'><span className='border-b-2 text-yellow-500'>Deadline of application</span></p>
                                <p className='text-3xl inline-block '>The application will be closed as soon as the number of participants reaches the limit.</p>
                            </div>
                        </div>
                </div>
                </div>
                </section>
                );
            };

export default Details;
