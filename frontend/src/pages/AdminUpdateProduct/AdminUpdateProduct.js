import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';
import { getMyOrders } from '../../utils/orders/getMyOrders';
import { useToasts } from 'react-toast-notifications';
import Loader from '../../components/Loader/Loader';

const AdminUpdateProduct = () => {
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
      <div className="flex flex-row">
        <DashboardMenu />
        <div className="flex-grow container mx-auto py-10">
          <h1 className="text-5xl font-bold mb-3">Update Product</h1>
          <div className="w-full border-b border-black mt-10"></div>
          {/* TO DO */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminUpdateProduct;
