import axios from "axios";

// Axios instance with base configurations
export const axiosClient = axios.create({
  baseUrl: import.meta.env.VITE_NOTEFYRE_API_BASE_URL,
  timeout: 5000,
});

//  Requests interceptors here
//  Response interceptors here
