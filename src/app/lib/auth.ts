import axios from 'axios';

export const login = async (email: string, password: string) => {
  const response = await axios.post('/auth/login', { email, password });
  localStorage.setItem('token', response.data.token); // Save JWT token
};
