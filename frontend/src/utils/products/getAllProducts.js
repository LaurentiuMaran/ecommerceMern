import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = process.env.REACT_APP_API_URL;

export const getAllProducts = async () => {
  const token = Cookies.get('token');
  try {
    const response = await axios.get(`${BASE_URL}/products`, {
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
