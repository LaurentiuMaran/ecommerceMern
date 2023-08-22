import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Testimonials from '../../components/Testimonials/Testimonials';
import Promises from '../../components/Promises/Promises';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroBanner />
      <Testimonials />
      <Promises />
      <Footer />
    </div>
  );
};

export default Home;
