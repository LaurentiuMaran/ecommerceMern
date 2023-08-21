import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';

const Checkout = () => {
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto py-6 md:py-10 flex-grow flex flex-col items-center">
        <p className="text-3xl md:text-5xl font-bold mb-2 md:mb-3 text-center">
          Checkout
        </p>
        <p className="text-xl md:text-2xl mb-4 md:mb-6 text-center">
          Complete your purchase
        </p>
        <div className="mt-6 md:mt-10 w-full max-w-xl text-left px-4 md:px-10 flex flex-col">
          <CheckoutForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
