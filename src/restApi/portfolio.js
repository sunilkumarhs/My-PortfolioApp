import axios from "axios";

export default axios.create({
  baseURL: "https://portfolio-data-server.vercel.app/",
  // baseURL: "https://portfolio-data-server.onrender.com",
});
