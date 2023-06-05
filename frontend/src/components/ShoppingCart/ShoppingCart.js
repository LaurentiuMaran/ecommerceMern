import React, { useContext } from 'react';
import { CartContext } from '../../utils/context/cartContext';
import { useToasts } from 'react-toast-notifications';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const [state, dispatch] = useContext(CartContext);
  const cart = state.items;

  const { addToast } = useToasts();

  const handleRemove = (item) => {
    try {
      dispatch({ type: 'REMOVE_ITEM', payload: item });
      addToast('Item removed from cart', { appearance: 'success' });
    } catch (err) {
      addToast('Item could not been removed from cart', {
        appearance: 'error',
      });
    }
  };

  if (cart.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow px-5 py-6 mb-5">
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow px-5 py-6 mb-5">
      {cart.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-200 py-2 flex justify-between items-center"
        >
          <div>
            <p className="text-xl font-semibold">{item.name}</p>
            <p className="text-lg text-gray-600">{item.price}</p>
          </div>
          <button onClick={() => handleRemove(item)}>
            <i className="fas fa-trash text-red-600 hover:text-red-400 text-3xl"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

const Summary = () => {
  const [state, dispatch] = useContext(CartContext);
  const cart = state.items;

  const { addToast } = useToasts();
  const navigation = useNavigate();

  const totalPrice = cart.reduce(
    (total, product) => total + parseFloat(product.price),
    0
  );

  const handleOnClick = () => {
    if (cart.length === 0) {
      addToast('Your cart is empty');
    } else {
      navigation('/checkout');
    }
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Cart Summary</h2>
      <p className="text-xl">Total items: {cart.length}</p>
      <p className="text-xl">Total price: ${totalPrice.toFixed(2)}</p>
      <div className="mt-12">
        <button
          onClick={handleOnClick}
          className="text-2xl bg-primary text-white rounded-full px-10 py-3 hover:bg-secondary transition-colors duration-300 w-64 mx-auto md:mx-0"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

ShoppingCart.Summary = Summary;

export default ShoppingCart;
