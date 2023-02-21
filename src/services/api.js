import axios from "axios";
axios.defaults.baseURL = "https://63f1e4bfaab7d09125fd7531.mockapi.io";
const fetchTasks = () => async dispatch => {
  try {
    const response = await axios.get("/tasks");
  } catch (e) {}
};