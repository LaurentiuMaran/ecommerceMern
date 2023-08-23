import React from 'react';
import loadingTruck from '../../assets/loading-truck.png';
import headset from '../../assets/headset.png';
import money from '../../assets/money.png';

const Promises = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around p-8 bg-white mt-10 mb-10">
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <img
          src={loadingTruck}
          alt="Free and Fast Delivery"
          className="w-20 h-20 mb-2"
        />
        <h2 className="text-2xl font-bold">FREE AND FAST DELIVERY</h2>
        <p>Free delivery for all orders over $150</p>
      </div>
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <img
          src={headset}
          alt="24/7 Customer Service"
          className="w-20 h-20 mb-2"
        />
        <h2 className="text-2xl font-bold">24/7 CUSTOMER SERVICE</h2>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <img
          src={money}
          alt="Money Back Guarantee"
          className="w-20 h-20 mb-2"
        />
        <h2 className="text-2xl font-bold">MONEY BACK GUARANTEE</h2>
        <p>We return money within 30 days</p>
      </div>
    </div>
  );
};

export default Promises;
