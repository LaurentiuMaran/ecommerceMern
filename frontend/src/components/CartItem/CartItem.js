import React, { useContext } from 'react';
import { CartContext } from '../../utils/context/cartContext';

const CartItem = ({ item }) => {
  const [, dispatch] = useContext(CartContext);

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    dispatch({
      type: 'UPDATE_ITEM_QUANTITY',
      payload: { id: item.id, quantity: newQuantity },
    });
  };

  const handleRemoveItem = () => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { id: item.id },
    });
  };

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div className="flex items-center" style={{ width: '50%' }}>
        <img src={item.image} alt={item.name} className="w-16 h-16" />
        <div className="ml-4">
          <h2 className="text-lg">{item.name}</h2>
        </div>
      </div>
      <div className="flex items-center justify-end" style={{ width: '25%' }}>
        <label htmlFor={`quantity-${item.id}`} className="mr-2">
          Quantity:
        </label>
        <input
          id={`quantity-${item.id}`}
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          min="1"
          className="w-16 text-center"
        />
      </div>
      <div className="w-24 text-right" style={{ width: '25%' }}>
        <span className="text-lg">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
        <button onClick={handleRemoveItem} className="ml-4 text-red-500">
          <span className="fa fa-trash"></span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
