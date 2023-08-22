import React from 'react';
import { Link } from 'react-router-dom';
import heroBannerImage from '../../assets/hero-banner-image.jpg';

const HeroBanner = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-mainGray ">
      <div className="flex flex-col w-full md:w-1/2 pr-4 p-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to BazaarBasket
        </h1>
        <p className="text-lg md:text-xl mb-4 w-full md:w-2/3">
          Your one-stop shop for high-quality products across a variety of
          categories. From fashion to electronics, we've got you covered.
        </p>
        <Link
          to="/shop"
          className="bg-black text-white px-2 py-1 rounded-full mb-4 w-40 text-center hover:bg-gray-800"
        >
          Shop Now
        </Link>
        <div className="grid grid-cols-3 gap-4 w-full md:w-2/3">
          <div>
            <h3 className="text-xl font-bold">200+</h3>
            <p>International Brands</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">2000+</h3>
            <p>High-Quality Products</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">30,000+</h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-2 md:mt-2 ">
        <img
          src={heroBannerImage}
          alt="Your all-purpose shop"
          className="w-full h-full object-cover md:object-top"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
