import Image from 'next/image';

const Details = () => {
        return (
            <section>
                <div id="Details" className='w-full px-4 md:px-8 mb-[5%] pt-[5%]'>
                {/* <h2 className='font-bold text-3xl md:text-5xl mt-5 mb-[30px] text-center'>Details</h2> */}
                <div className='flex flex-col md:flex-row gap-5 mx-auto w-full lg:w-3/5 2xl:w-4/6 h-full ltr:md:ml-7 rtl:md:mr-7 ltr:lg:pl-7 rtl:lg:pr-7'>
                    <div className='flex-1'>
                        <div className='text-center'>
                                <p className='text-xl md:text-3xl font-bold'>Date</p>
                                <p className='text-lg'>① 5 August - 9 August <br />
                                    ② 12 August - 16 August <br />
                                    ③ 19 August - 23 August <br />
                                    ④ 26 August - 30 August <br />
                                    * 4 nights</p>
                                <br />
                                <p className='text-xl md:text-3xl font-bold'>Target Age</p>
                                <p className='text-lg'>18-25</p>
                                <br />
                                <p className='text-xl md:text-3xl font-bold'>Capacity</p>
                                <p className='text-lg'>6 people for each term</p>
                                <br />
                                <p className='text-xl md:text-3xl font-bold'>Actual Cost</p>
                                <p className='text-lg'>$500 - $900/person</p>
                                <p className='text-lg'>(Not included Transportation to and from island)</p>
                                <br />
                                <p className='text-xl md:text-3xl font-bold'>Accommodation</p>
                                <p className='text-lg'>Kyodai-so</p>
                                <p className='text-lg'>(The participants live under the same roof)</p>
                                <br />
                                <p className='text-xl md:text-3xl font-bold'>Deadline of application</p>
                                <p className='text-lg'>The application will be closed as soon as the number of participants reaches the limit.</p>
                        </div>
                    </div>
                    {/* <div className='flex-1'>
                        <Image 
                            src='/images/shimarisu.png' 
                            alt='who_should_participate' 
                            fill
                            className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                            style={{ aspectRatio: "3 / 2", objectFit: "contain", objectPosition: 'left' }}  
                        />
                    </div> */}
                </div>
                </div>
                </section>
                );
            };

export default Details;
