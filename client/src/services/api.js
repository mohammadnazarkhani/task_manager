import axios from "axios";

// Create an Axios instance with base URL
const API = axios.create({
  baseURL: "http://localhost:5000", // Replace with your backend URL
});

// API methods
export const fetchTasks = () => API.get("/tasks"); // Fetch all tasks
export const fetchTaskById = (id) => API.get(`/tasks/${id}`); // Fetch a task by ID
export const createTask = (task) => API.post("/tasks", task); // Create a new task
export const updateTask = (id, updatedTask) =>
  API.put(`/tasks/${id}`, updatedTask); // Update an existing task
export const deleteTask = (id) => API.delete(`/tasks/${id}`); // Delete a task

// Interceptor to handle API response errors
API.interceptors.response.use(
  (response) => response, // Return response if successful
  (error) => {
    console.error(
      "API Error:",
      error.response ? error.response.data : error.message
    ); // Log error message
    return Promise.reject(error); // Reject promise with error
  }
);
