import React from 'react';

const News: React.FC = () => {
  return (
    <div className=" flex flex-col md:flex-row text-black  bg-gray-100">
      <div className="w-full md:w-1/4">
        <h2 className="text-xl font-bold p-4">News</h2>
      </div>
      <div className="w-full md:w-3/4 bg-gray-300 flex flex-col gap-2 juctify-center items-start pl-[1rem] pt-[1rem] pb-[1rem]">
        <div className='flex flex-col md:flex-row flex-1'>
          <p className="mr-[1rem]">2023-12-03</p>
          <p className="news-description flex-1">The catching up party was held in Kyoto.</p>
        </div>
        <div className='flex flex-col md:flex-row flex-1'>
          <p className="mr-[1rem]">2023-08-29</p>
          <p className="news-description flex-1">Rishiri Island Summer Camp 2023 finished successfully.</p>
        </div>
      </div>
    </div>
  );
};

export default News;
