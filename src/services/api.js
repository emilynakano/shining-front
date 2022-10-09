import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-54-147-212-27.compute-1.amazonaws.com/',
});

export default api;
