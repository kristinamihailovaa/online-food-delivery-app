import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export const getAllCategories = () => {
  return axios.get('/categories');
}