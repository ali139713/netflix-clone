import axios from 'axios';
import spinnerSvc from './spinnerSvc';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    spinnerSvc.start();
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
    spinnerSvc.stop();
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default instance;
