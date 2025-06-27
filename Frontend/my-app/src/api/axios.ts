import axios from 'axios';

const baseURL = 'http://localhost:8000/api/';

const api = axios.create({ baseURL });

api.interceptors.request.use(config => {
  const token = localStorage.getItem('access');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  res => res,
  async err => {
    const originalRequest = err.config;
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refresh = localStorage.getItem('refresh');
        const response = await axios.post(`${baseURL}token/refresh/`, { refresh });
        localStorage.setItem('access', response.data.access);
        originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
        return api(originalRequest);
      } catch (e) {
        localStorage.clear();
        window.location.href = '/';
      }
    }
    return Promise.reject(err);
  }
);

export default api;
