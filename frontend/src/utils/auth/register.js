import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = process.env.REACT_APP_API_URL;

export const register = async (name, email, password, navigate) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      name,
      email,
      password,
    });
    if (response.data && response.data.token) {
      Cookies.set('token', response.data.token, { expires: 1 });
      navigate('/');
      return response.data;
    } else {
      throw new Error('Token not received');
    }
  } catch (error) {
    throw error;
  }
};
