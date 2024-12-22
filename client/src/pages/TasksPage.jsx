import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Using React Icons
import { fetchTasks, deleteTask } from "../services/api"; // Assuming API methods are in this folder

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Fetch tasks when the component mounts
  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await fetchTasks();
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    getTasks();
  }, []);

  // Handle task deletion
  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Handle adding a new task
  const handleAddTask = () => {
    if (newTask.trim()) {
      // Call your API to add the task here, then update the state
      // This example assumes a task has an 'id' and 'title'
      const addedTask = { id: Date.now(), title: newTask }; // Mock new task
      setTasks([...tasks, addedTask]);
      setNewTask("");
    }
  };

  return (
    <div className="bg-purple-100 min-h-screen flex flex-col items-center justify-center py-8">
      <h1 className="text-3xl font-bold text-purple-600 mb-8">Task Manager</h1>

      <div className="w-full max-w-xl p-4 bg-white rounded-lg shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <button
          className="w-full p-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          onClick={handleAddTask}
        >
          Add Task
        </button>

        <ul className="mt-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center p-2 border-b border-purple-200"
            >
              <span className="text-lg">{task.title}</span>
              <div>
                <button
                  className="text-purple-600 hover:text-purple-800 mr-2"
                  onClick={() => alert(`Edit task ${task.id}`)} // Implement the edit functionality
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleDelete(task.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TasksPage;
