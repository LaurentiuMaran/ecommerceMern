import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = process.env.REACT_APP_API_URL;

export const updateProduct = async (id, productData) => {
  const token = Cookies.get('token');
  try {
    const response = await axios.put(
      `${BASE_URL}/products/${id}`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error during product update:', error);
    return null;
  }
};
