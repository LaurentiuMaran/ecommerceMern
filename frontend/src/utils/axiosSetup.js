import axios from 'axios';
import Cookies from 'js-cookie';
import { decodeToken } from './auth/decodeToken';

export const setupAxios = () => {
  const token = Cookies.get('token');
  if (token) {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    console.error('No token found');
    throw new Error('No token found');
  }
};

export const fetchUserId = () => {
  const decoded = decodeToken();
  if (!decoded || !decoded.user.id) {
    console.error('Invalid JWT token or user ID not found in token');
    throw new Error('Invalid JWT token or user ID not found in token');
  }
  return decoded.user.id;
};
