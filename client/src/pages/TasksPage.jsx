import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";
import {
  fetchTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../services/api";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

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

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleAddTask = async () => {
    if (newTask.trim()) {
      try {
        const response = await createTask({ title: newTask });
        setTasks([...tasks, response.data]);
        setNewTask("");
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setEditingTitle(task.title);
  };

  const handleUpdateTask = async () => {
    if (editingTitle.trim()) {
      try {
        const response = await updateTask(editingTask.id, {
          title: editingTitle,
        });
        setTasks(
          tasks.map((task) =>
            task.id === editingTask.id ? response.data : task
          )
        );
        setEditingTask(null);
        setEditingTitle("");
      } catch (error) {
        console.error("Error updating task:", error);
      }
    }
  };

  const handleKeyPress = (e, action) => {
    if (e.key === "Enter") {
      action();
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
            onKeyPress={(e) => handleKeyPress(e, handleAddTask)}
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
              {editingTask && editingTask.id === task.id ? (
                <div className="flex items-center w-full">
                  <input
                    type="text"
                    className="flex-grow p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mr-2"
                    value={editingTitle}
                    onChange={(e) => setEditingTitle(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e, handleUpdateTask)}
                  />
                  <button
                    className="text-green-600 hover:text-green-800 mr-2"
                    onClick={handleUpdateTask}
                  >
                    <FaSave />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(task.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              ) : (
                <>
                  <span className="text-lg">{task.title}</span>
                  <div>
                    <button
                      className="text-purple-600 hover:text-purple-800 mr-2"
                      onClick={() => handleEditTask(task)}
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
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TasksPage;
