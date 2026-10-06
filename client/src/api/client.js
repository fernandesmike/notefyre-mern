import axios from "axios";

// import.meta.env.VITE_NOTEFYRE_API_BASE_URL

// Axios instance with base configurations
export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
});

//  Requests interceptors here
//  Response interceptors here
