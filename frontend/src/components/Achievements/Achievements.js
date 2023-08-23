import React from 'react';
import ShopSVG from '../../assets/shop.svg';
import DollarSVG from '../../assets/dollar.svg';
import ShoppingBagSVG from '../../assets/shopping-bag.svg';
import PiggyBankSVG from '../../assets/piggy-bank.svg';

const Achievements = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white py-12 mt-16 mb-16">
      <h1 className="text-4xl font-bold mb-8">Our Achievements</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-screen-xl px-4 md:px-0">
        {/* Column 1 */}
        <div className="border rounded border-mainGray p-4 text-center">
          <img src={ShopSVG} alt="Shop" className="mb-4 w-48 h-48 mx-auto" />
          <h2 className="text-2xl font-bold">10.5k</h2>
          <p>Sellers active on our site</p>
        </div>

        {/* Column 2 */}
        <div className="border rounded border-mainGray p-4 text-center">
          <img
            src={DollarSVG}
            alt="Dollar"
            className="mb-4 w-48 h-48 mx-auto"
          />
          <h2 className="text-2xl font-bold">33k</h2>
          <p>Monthly Product Sale</p>
        </div>

        {/* Column 3 */}
        <div className="border rounded border-mainGray p-4 text-center">
          <img
            src={ShoppingBagSVG}
            alt="Shopping Bag"
            className="mb-4 w-48 h-48 mx-auto"
          />
          <h2 className="text-2xl font-bold">45.5k</h2>
          <p>Customers active on our site</p>
        </div>

        {/* Column 4 */}
        <div className="border rounded border-mainGray p-4 text-center">
          <img
            src={PiggyBankSVG}
            alt="Piggy Bank"
            className="mb-4 w-48 h-48 mx-auto"
          />
          <h2 className="text-2xl font-bold">25k</h2>
          <p>Annual gross sale on our site</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
