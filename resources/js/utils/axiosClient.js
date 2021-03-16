import axios from 'axios';
import urlBackend from './const';

console.log(urlBackend);

const axiosClient = axios.create({
    baseURL: '/api',
});

export default axiosClient;
