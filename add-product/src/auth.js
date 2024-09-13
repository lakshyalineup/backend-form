import axios from 'axios';

export const register = async (userData) => {
  const response = await axios.post('http://localhost:2312/api/register', userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post('http://localhost:2312/api/login', userData);
  return response.data;
};

export const logout = async () => {
  await axios.post('http://localhost:2312/api/logout');
};

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
