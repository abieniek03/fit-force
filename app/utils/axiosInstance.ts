import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fit-force-backend.vercel.app/api",
});

export default axiosInstance;
