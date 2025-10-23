// src/api/auth.js
import axios from "axios";

const API = process.env.REACT_APP_API;

export const login = async (data) => {
  return axios.post(`${API}/login`, data);
};

export const logout = async () => {
  return axios.post(`${API}/logout`);
};

export const registerRequest = async (user) =>
  await axios.post(`${API}/register`, user, {
    withCredentials: true, 
  });