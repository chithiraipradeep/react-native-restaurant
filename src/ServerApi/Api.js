import axios from 'axios';
const URL = 'https://www.themealdb.com/api/json/v1/1/';
export const BASE_URL = URL;

const Api = async config => {
  axios.interceptors.response.use(
    response => {
      return response;
    },
    function (error) {
      if (!error.response) {
        error.response = {
          data: 'net work error',
          status: 500,
        };
      }
      if (error.response.status === 401) {
        console.log('Unauthorised');
      }
      return Promise.reject(error);
    },
  );
  config.baseURL = URL;
  return axios(config);
};
export default Api;
