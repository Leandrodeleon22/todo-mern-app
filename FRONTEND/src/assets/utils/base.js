import axios from "axios";

const customFetch = axios.create({
  // baseURL: "http://localhost:6000/api/v1/tasks",
  baseURL: "https://temp-todo-aoo.onrender.com/api/v1/tasks",
});

export default customFetch;
