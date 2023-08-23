import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-16 h-16" />
        <div className="ml-4">
          <h2 className="text-lg">{item.name}</h2>
          <p className="text-sm text-gray-500">{item.description}</p>
        </div>
      </div>
      <div>
        <span className="text-lg">${item.price}</span>
      </div>
    </div>
  );
};

export default CartItem;
