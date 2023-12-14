import React from 'react';

const News: React.FC = () => {
  return (
      <div className='pl-[5%] bg-white flex flex-col md:flex-row pt-10 pb-10'>
        <h2 className="font-bold text-5xl text-white text-yellow-500 ">News</h2>
        <div className='pl-[5%]'>
          <div className='flex flex-col md:flex-row items-start pb-1'>
            <p className="mr-[1rem] font-light">2023-12-03</p>
            <p className="text-xl">The catching up party was held in Kyoto.</p>
          </div>
          <div className='flex flex-col md:flex-row items-start'>
            <p className="mr-[1rem] font-light">2023-08-29</p>
            <p className="text-xl">Rishiri Island Summer Camp 2023 finished successfully.</p>
          </div>
        </div>
      </div>
  );
};

export default News;
