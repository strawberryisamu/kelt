import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex justify-center items-center cp_loading17 absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 flex bg-white">
        <div className="cp_item w-2.5 h-2.5 mr-0.5 ml-0.5 animate-loading17 opacity-10 bg-[#2a599e]"></div>
        <div className="cp_item w-2.5 h-2.5 mr-0.5 ml-0.5 animate-loading17 opacity-10 bg-[#2a599e]" style={{ animationDelay: '0.3s' }}></div>
        <div className="cp_item w-2.5 h-2.5 mr-0.5 ml-0.5 animate-loading17 opacity-10 bg-[#2a599e]" style={{ animationDelay: '0.2s' }}></div>
        <div className="cp_item w-2.5 h-2.5 mr-0.5 ml-0.5 animate-loading17 opacity-10 bg-[#2a599e]" style={{ animationDelay: '0.1s' }}></div>
        <div className="cp_item w-2.5 h-2.5 mr-0.5 ml-0.5 animate-loading17 opacity-10 bg-[#2a599e]" style={{ animationDelay: '0.3s' }}></div>
    </div>
  );
};

export default LoadingScreen;
