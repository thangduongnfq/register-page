import axios from "axios";
const instance = axios.create({
  baseURL: "https://629836b0f2decf5bb73d67d4.mockapi.io/animals",
  timeout: 3000,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;
