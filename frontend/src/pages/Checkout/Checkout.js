import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';

const Checkout = () => {
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Navbar />
      <div className="container text-center mx-auto py-10 flex-grow">
        <p className="text-5xl font-bold mb-3">Checkout</p>
        <p className="text-2xl mb-6">Complete your purchase</p>
        <div className="mt-10 text-left px-10 flex flex-col">
          <CheckoutForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
