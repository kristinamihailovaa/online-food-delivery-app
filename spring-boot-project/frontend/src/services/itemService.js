import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export const getItemsByCategory = (categoryId) => {
  // return axios.get(`items`);
  return axios.get(`/category/${categoryId}`);
}

export const deleteItem = (itemId) => {
  return axios.delete(`/delete/${itemId}`);
}

export const getItemById = (itemId) => {
  return axios.get(`items/${itemId}`);
}

export const updateItem = (item) => {
  return axios.put(`item/${item.id}`, item);
}

export const createItem = (item) => {
  return axios.post(`items/add`, item);
}