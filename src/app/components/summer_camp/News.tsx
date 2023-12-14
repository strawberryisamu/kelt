import React from 'react';

const News: React.FC = () => {
  return (
    <div className="flex flex-col text-black ">
      <div className="w-full pl-[5%] m-auto bg-black pl-[1rem] pt-10 pb-10">
        <h2 className="font-bold text-5xl text-white text-yellow-500">News</h2>
      </div>
      <div className='pl-[10%] pt-5 pb-5 '>
        <div className='flex flex-col md:flex-row items-center pb-1'>
          <p className="mr-[1rem] font-light">2023-12-03</p>
          <p className="text-xl">The catching up party was held in Kyoto.</p>
        </div>
        <div className='flex flex-col md:flex-row items-center'>
          <p className="mr-[1rem] font-light">2023-08-29</p>
          <p className="text-xl">Rishiri Island Summer Camp 2023 finished successfully.</p>
        </div>
      </div>
    </div>
  );
};

export default News;
