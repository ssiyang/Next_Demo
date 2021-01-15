import axios from 'axios';

const setInterceptors = (instance) => {
    instance.interceptors.request.use(
      (config) => {
        // config.headers['Authorization'] = BASIC_TOKEN;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        showErrorLog(error);
        return Promise.reject(error);
      }
    );
  };

  export const DDGInstance = (() => {
    const config = {
      baseURL: `http://10.21.253.100:8080/api/ddb/mvpcust`,
    };
    const instance = axios.create(config);
    setInterceptors(instance);
  
    return instance;
  })();
  