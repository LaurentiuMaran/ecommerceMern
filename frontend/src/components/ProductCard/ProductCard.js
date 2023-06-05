import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../utils/context/cartContext';
import { useToasts } from 'react-toast-notifications';

const ProductCard = ({ product }) => {
  const [state, dispatch] = useContext(CartContext);
  const { addToast } = useToasts();

  const handleAddToCart = () => {
    try {
      const isItemInCart = state.items.some((item) => item.id === product.id);
      if (isItemInCart) {
        addToast('Item already in cart', { appearance: 'warning' });
      } else {
        dispatch({
          type: 'ADD_ITEM',
          payload: {
            id: product.id,
            image: product.image,
            name: product.name,
            description: product.description,
            price: product.price,
          },
        });
        addToast('Product added to cart', { appearance: 'success' });
      }
    } catch (err) {
      addToast('Product could not been added to cart', { appearance: 'error' });
    }
  };

  return (
    <div className="flex flex-col items-center bg-white p-4 rounded shadow-md overflow-hidden m-4 w-80 h-auto justify-between">
      <div>
        <Link to={`/product/${product.id}`}>
          <img
            className="h-64 w-full object-cover mb-4"
            src={product.image}
            alt={product.name}
          />
        </Link>
        <hr className="w-full border-t border-gray-400" />
        <div className="w-full text-center">
          <Link to={`/product/${product.id}`}>
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          </Link>
          <p className="mb-2 flex-grow">{product.description}</p>
        </div>
      </div>
      <div className="w-full text-center">
        <p className="font-bold mb-2">${product.price}</p>
        <button
          onClick={handleAddToCart}
          className="bg-primary text-white rounded-full px-10 py-3 hover:bg-secondary transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
