import React from 'react';

const News: React.FC = () => {
  return (
    <div className="h-32 flex text-black pb-5">
      <div className="w-1/4 bg-gray-200">
        <h2 className="text-xl font-bold p-4">News</h2>
      </div>
      <div className="w-3/4 bg-gray-300">Content</div>
    </div>
  );
};

export default News;
