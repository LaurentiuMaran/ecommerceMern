import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

export const decodeToken = () => {
  const token = Cookies.get('token');

  if (!token) {
    console.error('No token found');
    return null;
  }

  try {
    const decoded = jwt_decode(token);
    return decoded;
  } catch (error) {
    console.error('Invalid JWT token', error);
    return null;
  }
};
