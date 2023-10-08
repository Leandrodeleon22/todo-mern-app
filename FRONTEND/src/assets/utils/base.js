import axios from "axios";

const customFetch = axios.create({
  // baseURL: "http://localhost:6000/api/v1/tasks",
  baseURL: "/api/v1/tasks",
});

export default customFetch;
