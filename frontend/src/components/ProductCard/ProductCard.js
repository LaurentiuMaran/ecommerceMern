import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../utils/context/cartContext';
import { useToasts } from 'react-toast-notifications';

const ProductCard = ({ product }) => {
  const [state, dispatch] = useContext(CartContext);
  const { addToast } = useToasts();

  const handleAddToCart = () => {
    try {
      dispatch({
        type: 'ADD_ITEM',
        payload: { ...product, quantity: 1 },
      });
      addToast('Product added to cart', { appearance: 'success' });
    } catch (err) {
      addToast('Product could not be added to cart', { appearance: 'error' });
    }
  };

  return (
    <div className="flex flex-col bg-mainGray rounded shadow-md overflow-hidden m-2 md:m-4 w-64 md:w-80 h-auto justify-between">
      <div className="w-full">
        <img
          className="h-24 md:h-32 w-full object-cover"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col items-center p-2 md:p-4">
        <div className="w-full text-center">
          <Link to={`/product/${product.id}`}>
            <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
              {product.name}
            </h2>
          </Link>
          <p className="font-bold mb-1 md:mb-2">${product.price}</p>
        </div>
        <div className="w-full text-center">
          <button
            onClick={handleAddToCart}
            className="bg-black text-white rounded-full px-6 md:px-10 py-2 md:py-3 hover:bg-gray-800 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
