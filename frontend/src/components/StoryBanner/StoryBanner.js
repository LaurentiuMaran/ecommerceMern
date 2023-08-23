import React from 'react';
import { Link } from 'react-router-dom';
import storyImage from '../../assets/story-banner.jpg';

const StoryBanner = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-mainGray">
      <div className="flex flex-col w-full md:w-1/2 pr-4 p-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
        <p className="text-lg md:text-xl mb-4 w-full md:w-2/3">
          Founded by ambitious people, our all-purpose online shop started with
          a simple mission: to provide quality products at unbeatable prices.
          We're not just another online store; we're your friendly neighborhood
          shop, but digital! From home essentials to innovative gadgets, we've
          dedicated ourselves to sourcing the best products to make your life
          better.
        </p>
        <Link
          to="/shop"
          className="bg-black text-white px-2 py-1 rounded-full mb-4 w-40 text-center hover:bg-gray-800"
        >
          Learn More
        </Link>
      </div>
      <div className="w-full md:w-1/2 mt-2 md:mt-2">
        <img
          src={storyImage}
          alt="Our Story"
          className="w-full h-full object-cover md:object-top"
        />
      </div>
    </div>
  );
};

export default StoryBanner;
