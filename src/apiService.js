import axios from 'axios';
import { useLoader } from './Context/context';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const { setLoading } = useLoader();
    setLoading(true);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const { setLoading } = useLoader();
    setLoading(false);
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default instance;
