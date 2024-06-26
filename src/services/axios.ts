import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:3000/",
});
Axios.defaults.headers.common["Content-Type"] = "application/json";

export default Axios;
