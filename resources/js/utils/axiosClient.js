import axios from 'axios';
import urlBackend from './const';

console.log(urlBackend);

const axiosClient = axios.create({
    baseURL: urlBackend + '/api',
});

export default axiosClient;
