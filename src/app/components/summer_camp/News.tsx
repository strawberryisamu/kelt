import React from 'react';

const News: React.FC = () => {
  return (
    <div className="h-32 flex text-black  bg-gray-100">
      <div className="w-1/4">
        <h2 className="text-xl font-bold p-4">News</h2>
      </div>
      <div className="w-3/4 bg-gray-300">Content</div>
    </div>
  );
};

export default News;
