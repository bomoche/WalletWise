import axios from 'axios';

// Central axios instance pointing to the Spring Boot backend
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
});

// TODO: request interceptor to attach JWT token
// TODO: response interceptor to handle 401s (logout / redirect)

export default api;
