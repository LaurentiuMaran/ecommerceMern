import React from 'react';
import loadingTruck from '../../assets/loading-truck.png';
import headset from '../../assets/headset.png';
import money from '../../assets/money.png';

const Promises = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around p-4 md:p-8 bg-white mt-6 md:mt-10 mb-6 md:mb-10">
      <div className="flex flex-col items-center mb-3 md:mb-0">
        <img
          src={loadingTruck}
          alt="Free and Fast Delivery"
          className="w-16 md:w-20 h-16 md:h-20 mb-1 md:mb-2"
        />
        <h2 className="text-xl md:text-2xl font-bold">
          FREE AND FAST DELIVERY
        </h2>
        <p className="text-sm md:text-base">
          Free delivery for all orders over $150
        </p>
      </div>
      <div className="flex flex-col items-center mb-3 md:mb-0">
        <img
          src={headset}
          alt="24/7 Customer Service"
          className="w-16 md:w-20 h-16 md:h-20 mb-1 md:mb-2"
        />
        <h2 className="text-xl md:text-2xl font-bold">24/7 CUSTOMER SERVICE</h2>
        <p className="text-sm md:text-base">Friendly 24/7 customer support</p>
      </div>
      <div className="flex flex-col items-center mb-3 md:mb-0">
        <img
          src={money}
          alt="Money Back Guarantee"
          className="w-16 md:w-20 h-16 md:h-20 mb-1 md:mb-2"
        />
        <h2 className="text-xl md:text-2xl font-bold">MONEY BACK GUARANTEE</h2>
        <p className="text-sm md:text-base">We return money within 30 days</p>
      </div>
    </div>
  );
};

export default Promises;
