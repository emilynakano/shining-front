import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

const token = localStorage.getItem('@shining:token');

api.defaults.headers.common.Authorization = `Bearer ${token}`;

export default api;
