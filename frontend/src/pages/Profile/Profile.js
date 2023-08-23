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
  const [activeTab, setActiveTab] = useState('profile');
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

  if (!user) return <Loader />;

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto flex flex-grow">
        <div className="w-1/4 mt-10 ">
          <ul className="text-xl pl-4">
            <li
              className={`${
                activeTab === 'profile' ? 'font-bold' : ''
              } cursor-pointer`}
              onClick={() => setActiveTab('profile')}
            >
              Edit Profile
            </li>
            <li
              className={`${
                activeTab === 'orders' ? 'font-bold' : ''
              } cursor-pointer`}
              onClick={() => setActiveTab('orders')}
            >
              My Orders
            </li>
          </ul>
        </div>
        <div className="w-3/4 ml-4">
          <h1 className="text-right text-2xl mt-10">Welcome, {user.name}</h1>
          {activeTab === 'profile' && (
            <section className="mt-16 mb-48">
              <h2 className="text-2xl mb-4">Edit Your Profile</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    className="w-full p-2 rounded border bg-gray-200"
                    type="text"
                    defaultValue={user.name}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    className="w-full p-2 rounded border bg-gray-200"
                    type="email"
                    defaultValue={user.email}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Password Change</label>
                  <input
                    className="w-full p-2 rounded border bg-gray-200"
                    type="password"
                    placeholder="Current Password"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full p-2 rounded border bg-gray-200"
                    type="password"
                    placeholder="New Password"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full p-2 rounded border bg-gray-200"
                    type="password"
                    placeholder="Confirm New Password"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white hover:bg-gray-600 rounded"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </section>
          )}
          {activeTab === 'orders' && (
            <div className="mb-48">
              <h2 className="text-2xl mb-4 mt-16 ">My Orders</h2>
              {orders.map((order, index) => (
                <div key={index} className="border p-4 mb-4">
                  <h3 className="text-lg font-bold">Order #{index + 1}</h3>
                  <p>Status: {order.status}</p>
                  <p>Total Price: ${order.totalPrice}</p>
                  <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
                  <p>Address: {order.address.address}</p>
                  <p>State: {order.address.state}</p>
                  <p>Country: {order.address.country}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
