import axios from 'axios';

// Create a custom axios instance
const axiosInstance = axios.create({
  baseURL: 'localhost:4000', // Your API base URL
  timeout: 10000, // Request timeout
  // You can add other config options here
});

export default axiosInstance;
