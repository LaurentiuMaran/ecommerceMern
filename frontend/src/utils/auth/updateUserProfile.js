import axios from 'axios';
import { setupAxios, fetchUserId } from '../axiosSetup';

export const updateUserProfile = async (formData) => {
  try {
    setupAxios();
    const userId = fetchUserId();

    const response = await axios.put(`/user/${userId}`, {
      name: formData.name,
      email: formData.email,
      password: formData.currentPassword,
      newPassword: formData.newPassword,
    });

    return response.data;
  } catch (error) {
    console.error('Error during profile update:', error);
    throw error;
  }
};
