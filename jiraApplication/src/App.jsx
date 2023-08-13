import { useState } from "react";
import "./App.css";
import TaskCreate from "./Components/taskCreate";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * Date.now()),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTasks);
  };
  const deleteTaskById = (id) => {
    const afterDeleteTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeleteTask);
  };
  const editTaskById = (id, updatedTitle, updatedDesc) => {
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
