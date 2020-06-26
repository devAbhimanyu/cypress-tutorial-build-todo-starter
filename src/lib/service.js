import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3030/",
});

export const saveTodo = (item) => instance.post("/api/todos", item);
export const loadTodo = () => instance.get("/api/todos");
