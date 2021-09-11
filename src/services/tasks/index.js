import axios from "axios";

export const createTask = ({ title, body, userId }) => {
  return axios
    .post("https://jsonplaceholder.typicode.com/todos", { title, body, userId })
    .then((response) => {
      const { data } = response;
      return data;
    });
};

export const getAllTasks = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      const { data } = response;
      return data;
    });
};
