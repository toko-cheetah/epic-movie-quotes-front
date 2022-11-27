import axios from "axios";
import router from "@/router/index.js";
import { useAuthStore } from "@/stores/auth.js";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL + "api/",
  timeout: 15000,
});

axiosInstance.defaults.withCredentials = true;

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status == 401) {
      const authStore = useAuthStore();
      authStore.authenticated = false;
      router.push({ name: "forbidden" });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
