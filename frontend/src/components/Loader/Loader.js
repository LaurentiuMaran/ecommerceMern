import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-8 md:w-16 h-8 md:h-16 border-t-2 md:border-t-4 border-black rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
