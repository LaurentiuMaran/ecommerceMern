import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import { updateUserProfile } from '../../utils/auth/updateUserProfile';
import { getUserById } from '../../utils/auth/getUserById';
import { getMyOrders } from '../../utils/orders/getMyOrders';
import { useToasts } from 'react-toast-notifications';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(0);
  const [activeTab, setActiveTab] = useState('profile');
  const { addToast } = useToasts();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const fetchUserAndOrders = async () => {
      try {
        const fetchedUser = await getUserById();
        const fetchedOrders = await getMyOrders();

        if (fetchedUser) {
          setUser(fetchedUser);
          setFormData({
            ...formData,
            name: fetchedUser.name,
            email: fetchedUser.email,
          });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await updateUserProfile(formData);
      setUser(updatedUser);
      setForceUpdate(forceUpdate + 1);
      addToast('Profile updated successfully', {
        appearance: 'success',
      });
    } catch (error) {
      console.log(error);
      addToast(
        error.response.data.msg ||
          'An error occurred while updating the profile',
        {
          appearance: 'error',
        }
      );
    }
  };

  if (!user) return <Loader />;

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto flex flex-col md:flex-row flex-grow">
        <div className="w-full md:w-1/4 mt-10 text-center md:text-left">
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
        <div className="w-3/4 md:w-3/4 mx-auto md:ml-4">
          <h1 className="text-center md:text-right text-2xl mt-10">
            Welcome, {user.name}
          </h1>
          {activeTab === 'profile' && (
            <section className="mt-16 mb-48">
              <h2 className="text-2xl mb-4">Edit Your Profile</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    className="w-full p-2 rounded border bg-gray-200"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    className="w-full p-2 rounded border bg-gray-200"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Password Change</label>
                  <input
                    className="w-full p-2 rounded border bg-gray-200"
                    type="password"
                    name="currentPassword"
                    placeholder="Current Password"
                    value={formData.currentPassword}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full p-2 rounded border bg-gray-200"
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full p-2 rounded border bg-gray-200"
                    type="password"
                    name="confirmPassword" // Add the name attribute
                    placeholder="Confirm New Password"
                    value={formData.confirmPassword} // Use value to make it a controlled component
                    onChange={handleInputChange} // Add onChange handler
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white hover:bg-gray-600 rounded"
                >
                  Save Changes
                </button>
              </form>
            </section>
          )}
          {activeTab === 'orders' && (
            <div className="mb-48">
              <h2 className="text-2xl mb-4 mt-16 ">My Orders</h2>
              {orders
                .slice()
                .reverse()
                .map((order, index) => (
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
