import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./Components/taskCreate";
import TaskList from "./Components/TaskList";
import axios from "axios";

function App() {
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
  useEffect(() => {
    fetchTasks();
  }, []);
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
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
