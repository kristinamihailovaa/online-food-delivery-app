import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export const getAllOrdersForUser = () => {
  return axios.get(`oders`);
}

export const createOrder = () => {
  return axios.post(`oders`);
}