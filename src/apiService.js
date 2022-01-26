import axios from 'axios';
import notificationSvc from './components/notificationService';
import spinnerSvc from './spinnerSvc';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    spinnerSvc.start();
    return config;
  },
  function (error) {
    notificationSvc.error('Error fetching movie, Please contact administrator');
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    spinnerSvc.stop();
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    notificationSvc.error('Error fetching movie, Please contact administrator');
    return Promise.reject(error);
  }
);
export default instance;
