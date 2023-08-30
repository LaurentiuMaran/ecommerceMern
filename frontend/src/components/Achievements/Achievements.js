import React from 'react';
import ShopSVG from '../../assets/shop.svg';
import DollarSVG from '../../assets/dollar.svg';
import ShoppingBagSVG from '../../assets/shopping-bag.svg';
import PiggyBankSVG from '../../assets/piggy-bank.svg';

const Achievements = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white py-8 md:py-12 mt-16 mb-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
        Our Achievements
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-screen-xl px-4 md:px-0">
        <div className="border rounded border-mainGray p-4 md:p-6 text-center">
          <img
            src={ShopSVG}
            alt="Number of active sellers on our site"
            className="mb-4 w-32 md:w-40 h-32 md:h-40 mx-auto"
          />
          <h2 className="text-xl md:text-2xl font-bold">10.5k</h2>
          <p>Sellers active on our site</p>
        </div>
        <div className="border rounded border-mainGray p-4 md:p-6 text-center">
          <img
            src={DollarSVG}
            alt="Monthly product sales in dollars"
            className="mb-4 w-32 md:w-40 h-32 md:h-40 mx-auto"
          />
          <h2 className="text-xl md:text-2xl font-bold">33k</h2>
          <p>Monthly Product Sale</p>
        </div>
        <div className="border rounded border-mainGray p-4 md:p-6 text-center">
          <img
            src={ShoppingBagSVG}
            alt="Number of active customers on our site"
            className="mb-4 w-32 md:w-40 h-32 md:h-40 mx-auto"
          />
          <h2 className="text-xl md:text-2xl font-bold">45.5k</h2>
          <p>Customers active on our site</p>
        </div>
        <div className="border rounded border-mainGray p-4 md:p-6 text-center">
          <img
            src={PiggyBankSVG}
            alt="Annual gross sales in dollars on our site"
            className="mb-4 w-32 md:w-40 h-32 md:h-40 mx-auto"
          />
          <h2 className="text-xl md:text-2xl font-bold">25k</h2>
          <p>Annual gross sale on our site</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
