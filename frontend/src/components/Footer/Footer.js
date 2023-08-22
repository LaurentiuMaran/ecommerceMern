import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-mainGray text-black px-4 md:px-6 py-4 md:py-6 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h1 className="font-bold text-2xl mb-3">BazaarBasket</h1>
          <p className="opacity-60 mb-3">
            Your one-stop online shop for everything. Bringing convenience to
            your doorstep.
          </p>
          <div className="flex space-x-4">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">Account</h2>
          <ul className="space-y-2 text-opacity-60">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Shop</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">Help</h2>
          <ul className="space-y-2 text-opacity-60">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">FAQ</h2>
          <ul className="space-y-2 text-opacity-60">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-10 border-t border-opacity-10">
        <p className="text-center text-opacity-60 py-4">
          © 2023, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
