import React from 'react';

const NewsletterSubscribe = () => {
  return (
    <div className="bg-black w-11/12 md:w-7/10 mx-auto p-8 rounded-md flex flex-col md:flex-row justify-between items-center mb-6">
      <div className="text-white mb-4 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h1>
      </div>
      <div className="flex flex-col items-start">
        <div className="relative text-white mb-2 w-full md:w-64">
          <input
            type="text"
            placeholder="Enter your email address"
            className="bg-white text-black p-2 w-full rounded focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
          />
        </div>
        <button className="text-black bg-white p-2 w-full md:w-64 rounded hover:bg-gray-300 hover:text-black transition ease-in-out duration-200">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
