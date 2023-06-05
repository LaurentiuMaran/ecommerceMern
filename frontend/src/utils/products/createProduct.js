import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = process.env.REACT_APP_API_URL;

export const createProduct = async (productData) => {
  const token = Cookies.get('token');
  try {
    const response = await axios.post(`${BASE_URL}/products`, productData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error during product creation:', error);
    return null;
  }
};
