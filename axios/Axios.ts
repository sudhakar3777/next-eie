import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let refreshingToken: Promise<string | null> | null = null;
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log("API TIMEOUT:")
      if (!refreshingToken) {
        refreshingToken = (async () => {
          try {
            const refreshToken = Cookies.get('refreshToken');
            const response = await axiosInstance.post('/auth/refresh-token', {
              refresh_token: refreshToken,
            });

            const { access_token } = response?.data?.data;
            console.log("in resp int  444444::", access_token);
            Cookies.set('accessToken', access_token);
            axiosInstance.defaults.headers.Authorization = `Bearer ${access_token}`;
            return access_token;
          } catch (err) {
            // Handle refresh token failure (e.g., logout user)
            Cookies.remove('accessToken');
            Cookies.remove('refreshToken');
            window.location.href = '/';
            return null;
          } finally {
            refreshingToken = null; // Reset flag
          }
        })();
      }

      const newToken = await refreshingToken;
      if (newToken) {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
