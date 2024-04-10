import axios from "axios";

const instance = axios.create({
  baseURL: "https://fit-force-backend.vercel.app/",
});

export default instance;
