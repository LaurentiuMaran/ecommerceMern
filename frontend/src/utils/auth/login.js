import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = process.env.REACT_APP_API_URL;

export const login = async (email, password, navigate) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });
    Cookies.set('token', response.data.token, { expires: 1 });
    navigate('/');
    return response.data;
  } catch (error) {
    return error;
  }
};
