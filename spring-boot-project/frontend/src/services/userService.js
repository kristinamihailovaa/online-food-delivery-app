import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export const login = (user) => {
  return axios.post("users/login", user);
}

export const logout = () => {
  return axios.post("user/logout");
}

export const getUserProfile = () => {
  return axios.post("/user/profile");
}

export const register = () => {
  return axios.post("register");
}