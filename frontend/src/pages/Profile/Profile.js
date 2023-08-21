import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import { getUserById } from '../../utils/auth/getUserById';
import { getMyOrders } from '../../utils/orders/getMyOrders';
import { useToasts } from 'react-toast-notifications';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  const { addToast } = useToasts();

  useEffect(() => {
    const fetchUserAndOrders = async () => {
      try {
        const fetchedUser = await getUserById();
        const fetchedOrders = await getMyOrders();

        if (fetchedUser) {
          setUser(fetchedUser);
        }

        if (fetchedOrders) {
          setOrders(fetchedOrders.orders);
        }
      } catch (error) {
        addToast('An error occurred while fetching the user or orders', {
          appearance: 'error',
        });
      }
    };

    fetchUserAndOrders();
  }, [addToast]);

  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Navbar />
      <div className="container text-center mx-auto py-10 flex-grow">
        <p className="text-5xl font-bold mb-3">Profile</p>
        {user && orders ? (
          <>
            <div className="mt-10 text-left px-10 flex flex-col items-center">
              <i className="fas fa-user text-9xl mb-10"></i>
              <p className="text-2xl font-bold mb-2">Name: {user.name}</p>
              <p className="text-2xl mb-2">Email: {user.email}</p>
              <p className="text-2xl">Role: {user.role}</p>
            </div>
            <div className="w-full border-b border-black mt-10"></div>
            <div className="mt-12 text-center px-10 flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-3">Orders History</h2>
              {orders.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {orders.map((order, index) => (
                    <div
                      key={order._id}
                      className="w-full mb-4 p-3 border-b border-black"
                    >
                      <h3 className="font-bold text-xl mb-2">
                        Order ID: {index + 1}
                      </h3>
                      <p className="mb-1">Status: {order.orderStatus}</p>
                      <p className="mb-1">
                        Total Price: {order.totalPrice.toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xl mt-2">No orders have been made yet.</p>
              )}
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
