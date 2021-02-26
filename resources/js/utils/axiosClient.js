import axios from 'axios';

const urlBackend = 'http://127.0.0.1:8088'; // process.env.MIX_URL_API_AFI;
console.log( urlBackend );
const axiosClient = axios.create({
    baseURL: urlBackend + '/api',
});

export default axiosClient;
