import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Navbar />
      <div className="container text-center mx-auto py-10 flex-grow lg:py-20">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
          Welcome to BazaarBasket!
        </p>
        <p className="text-xl lg:text-2xl mb-6">
          Discover what we have in store for you.
        </p>
        <div className="mt-10 sm:mt-20 lg:mt-44 text-left px-4 sm:px-10 flex flex-col">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            About Us
          </p>
          <p className="text-lg sm:text-xl">
            BazaarBasket is your one-stop shop for all your needs. We believe in
            providing high-quality products at reasonable prices.
          </p>
          <p className="text-lg sm:text-xl">
            Shop with us and experience the difference!
          </p>
          <Link
            to="/products"
            className="mt-10 sm:mt-20 text-sm sm:text-l bg-primary text-white rounded-full px-6 sm:px-10 py-2 sm:py-3 hover:bg-secondary transition-colors duration-300 w-48 sm:w-64 mx-auto"
          >
            See Available Products
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
