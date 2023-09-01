import { useEffect, useState, createContext } from "react";

import axios from "axios";
const TaskContext = createContext();
export function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title, taskDesc) => {
    const res = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });
    const createdTasks = [...tasks, res.data];
    setTasks(createdTasks);
  };

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:3000/tasks");
    setTasks(res.data);
  };
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeleteTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeleteTask);
  };
  const editTaskById = async (id, updatedTitle, updatedDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedDesc,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id == id)
        return { id, title: updatedTitle, taskDesc: updatedDesc };
      return task;
    });
    setTasks(updatedTasks);
  };
  const sharedvaluesandMethods = {
    tasks,
    createTask,
    fetchTasks,
    editTaskById,
    deleteTaskById,
  };

  return (
    <TaskContext.Provider value={sharedvaluesandMethods}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
