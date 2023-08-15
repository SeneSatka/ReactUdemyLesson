import { useContext, useEffect } from "react";
import "./App.css";
import TaskCreate from "./Components/taskCreate";
import TaskList from "./Components/TaskList";
import TaskContext from "./Context/task";

function App() {
  const { fetchTasks } = useContext(TaskContext);
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  );
}

export default App;
