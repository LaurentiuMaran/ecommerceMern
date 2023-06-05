import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';

const Cart = () => {
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto py-10 flex-grow flex flex-col md:flex-row md:space-x-10 px-5">
        <div className="text-center md:text-left flex-grow">
          <p className="text-5xl font-bold mb-3">Your Shopping Cart</p>
          <p className="text-2xl mb-6">Here are the items you've added:</p>
          <div className="max-w-4xl">
            <ShoppingCart />
          </div>
        </div>
        <div className="mt-20 md:mt-0 text-left px-10 flex flex-col">
          <ShoppingCart.Summary />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
