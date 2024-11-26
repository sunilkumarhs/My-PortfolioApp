import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8080/",
  baseURL: "https://portfolio-data-server.vercel.app/",
  // baseURL: "https://portfolio-data-server.onrender.com",
});
