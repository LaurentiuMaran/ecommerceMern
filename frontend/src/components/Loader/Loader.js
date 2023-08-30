import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-6 sm:w-8 md:w-12 lg:w-16 h-6 sm:h-8 md:h-12 lg:h-16 border-t-2 sm:border-t-3 md:border-t-4 lg:border-t-5 border-black rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
