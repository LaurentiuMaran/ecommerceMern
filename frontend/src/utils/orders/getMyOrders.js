import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = process.env.REACT_APP_API_URL;

export const getMyOrders = async () => {
  const token = Cookies.get('token');
  try {
    const response = await axios.get(`${BASE_URL}/orders/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error during fetching all products:', error);
    return null;
  }
};
