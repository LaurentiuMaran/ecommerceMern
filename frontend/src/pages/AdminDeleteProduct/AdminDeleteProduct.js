import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';
import { getMyOrders } from '../../utils/orders/getMyOrders';
import { useToasts } from 'react-toast-notifications';
import Loader from '../../components/Loader/Loader';

const AdminDeleteProduct = () => {
  const [orders, setOrders] = useState(null);

  const { addToast } = useToasts();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const fetchedOrders = await getMyOrders();

        if (fetchedOrders) {
          setOrders(fetchedOrders.orders);
        }
      } catch (error) {
        addToast('An error occurred while fetching the user or orders', {
          appearance: 'error',
        });
      }
    };

    fetchOrders();
  });

  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <DashboardMenu />
        <div className="flex-grow container mx-auto py-6 md:py-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-3">
            Delete Product
          </h1>
          <div className="w-full border-b border-black mt-4 md:mt-10"></div>
          <div className="mt-6 md:mt-12 text-left px-4 md:px-10 flex flex-col items-center">
            {/* TO DO */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDeleteProduct;
