import axios from 'axios';

const api = axios.create({
  baseURL: 'https://shining-emily.herokuapp.com/',
});

export default api;
