import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Navbar />
      <div className="container text-center mx-auto py-10 flex-grow">
        <p className="text-5xl font-bold mb-3">Welcome to BazaarBasket!</p>
        <p className="text-2xl mb-6">Discover what we have in store for you.</p>
        <div className="mt-44 text-left px-10 flex flex-col">
          <p className="text-4xl font-bold mb-4">About Us</p>
          <p className="text-xl">
            BazaarBasket is your one-stop shop for all your needs. We believe in
            providing high-quality products at reasonable prices.
          </p>
          <p className="text-xl">Shop with us and experience the difference!</p>
          <Link
            to="/products"
            className="mt-20 text-l bg-primary text-white rounded-full px-10 py-3 hover:bg-secondary transition-colors duration-300 w-64 mx-auto"
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
