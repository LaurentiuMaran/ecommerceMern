import React, { useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import NewsletterSubscribe from '../../components/NewsletterSubscribe/NewsletterSubscribe';
import CartItem from '../../components/CartItem/CartItem';
import { CartContext } from '../../utils/context/cartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [state] = useContext(CartContext);
  const { items } = state;

  const totalPrice = items.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto p-4 mt-10 mb-24">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex-grow">
            {items.length > 0 ? (
              items.map((item) => <CartItem key={item.id} item={item} />)
            ) : (
              <p className="text-lg text-gray-500">No items in cart.</p>
            )}
          </div>
          <div className="md:ml-8 mt-4 md:mt-0 w-96">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="border p-4">
              <div className="flex justify-between mb-2">
                <span>Total Price:</span>
                <span className="font-bold">${totalPrice}</span>
              </div>
              {items.length > 0 && (
                <Link
                  to="/checkout"
                  className="bg-black rounded-2xl text-white w-full py-2 block text-center"
                >
                  Go to Checkout
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <NewsletterSubscribe />
      <Footer />
    </div>
  );
};

export default Cart;
