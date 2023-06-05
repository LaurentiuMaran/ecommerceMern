import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = process.env.REACT_APP_API_URL;

export const getAllOrders = async () => {
  const token = Cookies.get('token');
  try {
    const response = await axios.get(`${BASE_URL}/orders/admin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error during fetching all orders:', error);
    return null;
  }
};
