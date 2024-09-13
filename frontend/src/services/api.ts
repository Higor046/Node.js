import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Usa a variável de ambiente
});

export const registerUser = async (data: { name: string; email: string; password: string }) => {
  return await api.post('/register', data);
};

export const checkEmailExists = async (email: string) => {
  return await api.get(`/check-email`, {
    params: { email },
  });
};

export default api;
