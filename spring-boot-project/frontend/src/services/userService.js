import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.withCredentials = true;

export const login = (user) => {
  return axios.post("/login", user);
}

export const logout = () => {
  return axios.post("user/logout");
}

export const getUserProfile = () => {
  return axios.get("/profile");
}

export const register = (user) => {
  return axios.post("/register", user);
}