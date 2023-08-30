import React from 'react';

const NewsletterSubscribe = () => {
  return (
    <div className="bg-black w-full md:w-7/10 mx-auto p-4 md:p-8 rounded-md flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6">
      <div className="text-white mb-2 md:mb-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h1>
      </div>
      <div className="flex flex-col items-start w-full md:w-auto">
        <div className="relative text-white mb-2 w-full md:w-64">
          <input
            type="text"
            placeholder="Enter your email address"
            className="bg-white text-black p-1 md:p-2 w-full rounded focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
          />
        </div>
        <button className="text-black bg-white p-1 md:p-2 w-full md:w-64 rounded hover:bg-gray-300 hover:text-black transition ease-in-out duration-200">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
