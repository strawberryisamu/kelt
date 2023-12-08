import Image from 'next/image';

const Details = () => {
    return (
        <section>
            <div id="Details" className='w-full px-4 md:px-8 mb-[5%] pt-[10%]'>
                <h2 className='font-bold text-5xl mt-5 mb-[30px] text-center'>Details</h2>
                <div className='flex flex-col md:flex-row gap-5 mx-auto w-full lg:w-3/5 2xl:w-4/6 h-full ltr:md:ml-7 rtl:md:mr-7 ltr:lg:pl-7 rtl:lg:pr-7'>
                    <div className='flex-1'>
                        <div className='relative w-full md:h-full h-[200px]'>
                            <Image 
                                src='/images/shimarisu.png'
                                alt="cycling "
                                fill
                                style={{aspectRatio: "1/1", objectFit: 'cover'}}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className='rounded-md '
                            />
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='m-auto'>
                                <p>
                                Date XX/XX-XX/XX
                                </p><p>
                                <br />Target Age 18-25
                                </p><p>
                                <br />Capacity XX people
                                </p><p>
                                <br />Actual Cost XXX
                                </p><p>
                                (Not included Transportation to and from island)
                                </p><p>
                                <br />Accommodation XXX
                                </p><p>
                                ( The participants live under the same roof)
                                </p><p>
                                <br />Deadline of application XX/XX
                            </p>
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
