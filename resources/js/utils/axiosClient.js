import axios from 'axios';

const urlBackend = process.env.MIX_URL_API;

const axiosClient = axios.create({
    baseURL: urlBackend + '/api',
});

export default axiosClient;
