import axios from 'axios';
import Cookies from 'js-cookie';
import { decodeToken } from './decodeToken';

const BASE_URL = process.env.REACT_APP_API_URL;

export const getUserById = async () => {
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

  try {
    const response = await axios.get(`${BASE_URL}/user/${decoded.user.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      `Error during fetching user with id ${decoded.user.id}:`,
      error
    );
    return null;
  }
};
