import React from 'react';
import { Link } from 'react-router-dom';

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
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter hover:text-opacity-80"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook hover:text-opacity-80"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram hover:text-opacity-80"></i>
            </a>
          </div>
        </section>

        <nav>
          <h2 className="font-semibold text-lg mb-3">Account</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/profile" className="text-opacity-60 hover:text-opacity-80">
                My Account
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-opacity-60 hover:text-opacity-80">
                Login / Register
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-opacity-60 hover:text-opacity-80">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/shop" className="text-opacity-60 hover:text-opacity-80">
                Shop
              </Link>
            </li>
          </ul>
        </nav>

        <section>
          <h2 className="font-semibold text-lg mb-3">Help</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-opacity-60 hover:text-opacity-80">
                Customer Support
              </Link>
            </li>
            <li>
              <Link to="/" className="text-opacity-60 hover:text-opacity-80">
                Delivery Details
              </Link>
            </li>
            <li>
              <Link to="/" className="text-opacity-60 hover:text-opacity-80">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/" className="text-opacity-60 hover:text-opacity-80">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-3">FAQ</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/profile" className="text-opacity-60 hover:text-opacity-80">
                Account
              </Link>
            </li>
            <li>
              <Link to="/" className="text-opacity-60 hover:text-opacity-80">
                Manage Deliveries
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-opacity-60 hover:text-opacity-80">
                Orders
              </Link>
            </li>
            <li>
              <Link to="/" className="text-opacity-60 hover:text-opacity-80">
                Payments
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <div className="container mx-auto mt-10 border-t border-opacity-10">
        <p className="text-center text-opacity-60 py-4">
          © 2024, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
