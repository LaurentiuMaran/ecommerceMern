import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';

const Cart = () => {
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto py-6 md:py-10 flex-grow flex flex-col md:flex-row md:space-x-6 lg:space-x-10 px-4 md:px-5">
        <div className="text-center md:text-left flex-grow">
          <p className="text-3xl md:text-5xl font-bold mb-2 md:mb-3">
            Your Shopping Cart
          </p>
          <p className="text-xl md:text-2xl mb-4 md:mb-6">
            Here are the items you've added:
          </p>
          <div className="max-w-full md:max-w-4xl mx-auto">
            <ShoppingCart />
          </div>
        </div>
        <div className="mt-12 md:mt-0 text-left px-4 md:px-10 flex flex-col">
          <ShoppingCart.Summary />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
