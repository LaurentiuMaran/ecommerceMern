import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-mainGray text-black px-4 md:px-6 py-4 md:py-6 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <section>
          <h1 className="font-bold text-2xl mb-3">BazaarBasket</h1>
          <p className="opacity-60 mb-3">
            Your one-stop online shop for everything. Bringing convenience to
            your doorstep.
          </p>
          <div className="flex space-x-4">
            <i className="fab fa-twitter hover:text-opacity-80"></i>
            <i className="fab fa-facebook hover:text-opacity-80"></i>
            <i className="fab fa-instagram hover:text-opacity-80"></i>
          </div>
        </section>

        <nav>
          <h2 className="font-semibold text-lg mb-3">Account</h2>
          <ul className="space-y-2 text-opacity-60 hover:text-opacity-80">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Shop</li>
          </ul>
        </nav>

        <section>
          <h2 className="font-semibold text-lg mb-3">Help</h2>
          <ul className="space-y-2 text-opacity-60 hover:text-opacity-80">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-3">FAQ</h2>
          <ul className="space-y-2 text-opacity-60 hover:text-opacity-80">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </section>
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
