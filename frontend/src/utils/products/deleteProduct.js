import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = process.env.REACT_APP_API_URL;

export const deleteProduct = async (id) => {
  const token = Cookies.get('token');
  try {
    const response = await axios.delete(`${BASE_URL}/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error during deleting product with id ${id}:`, error);
    return null;
  }
};
