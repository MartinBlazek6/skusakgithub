// src/plugins/axios.ts
import axios from 'axios';

// Use the AxiosInstance type from axios
const axiosInstance = axios.create({
  baseURL: 'http://api.open-notify.org/', // Set your base URL here
  timeout: 10000, // Optional timeout setting
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
