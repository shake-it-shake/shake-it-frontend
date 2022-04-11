import axios, { AxiosError } from "axios";
// import { refresh, refreshError } from "../refresh";

export const request = axios.create({
  baseURL: "",
  timeout: 100000,
});

const instance = axios.create({
  baseURL: "",
  timeout: 100000,
});

// instance.interceptors.request.use(refresh, refreshError);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

export default instance;
