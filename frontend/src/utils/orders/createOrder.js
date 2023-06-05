import axios from 'axios';
import Cookies from 'js-cookie';
import { decodeToken } from '../auth/decodeToken';

const BASE_URL = process.env.REACT_APP_API_URL;

export const createOrder = async (orderData, orderItems, totalPrice) => {
  const token = Cookies.get('token');

  if (!token) {
    console.error('No token found');
    return null;
  }

  const decoded = decodeToken();

  if (!decoded || !decoded.user.id) {
    console.error('Invalid JWT token or user ID not found in token');
    return null;
  }

  const userId = decoded.user.id;

  const completeOrderData = {
    user: userId,
    address: { ...orderData },
    orderItems,
    totalPrice,
  };

  try {
    const response = await axios.post(`${BASE_URL}/orders`, completeOrderData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error during order creation:', error);
    return null;
  }
};
