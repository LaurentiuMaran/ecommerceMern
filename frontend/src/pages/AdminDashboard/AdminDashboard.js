import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';
import { getAllOrders } from '../../utils/orders/getAllOrders';
import { useToasts } from 'react-toast-notifications';
import Loader from '../../components/Loader/Loader';

const AdminDashboard = () => {
  const [orders, setOrders] = useState(null);

  const { addToast } = useToasts();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const fetchedOrders = await getAllOrders();

        if (fetchedOrders) {
          setOrders(fetchedOrders.orders);
        }
        console.log(orders);
      } catch (error) {
        addToast('An error occurred while fetching the user or orders', {
          appearance: 'error',
        });
      }
    };

    fetchOrders();
  }, [addToast]);

  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-row">
        <DashboardMenu />
        <div className="flex-grow container mx-auto py-10">
          <h1 className="text-5xl font-bold mb-3">Admin Dashboard</h1>
          {orders ? (
            <>
              <div className="w-full border-b border-black mt-10"></div>
              <div className="mt-12 text-left px-10 flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-3">Orders History</h2>
                {orders.length > 0 ? (
                  orders.map((order, index) => (
                    <div
                      key={order._id}
                      className="w-96 mb-4 p-3 border-b border-black"
                    >
                      <h3 className="font-bold text-xl mb-2">
                        Order ID: {index + 1}
                      </h3>
                      <p className="mb-1">
                        Name:
                        {`${order.address.firstName} ${order.address.lastName}`}
                      </p>
                      <p className="mb-1">
                        Address:
                        {`${order.address.address}, ${order.address.state}, ${order.address.country}`}
                      </p>
                      <p className="mb-1">Status: Delivered</p>
                      <p className="mb-1">
                        Total Price: {order.totalPrice.toFixed(2)}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-xl mt-2">No orders have been made yet.</p>
                )}
              </div>
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
