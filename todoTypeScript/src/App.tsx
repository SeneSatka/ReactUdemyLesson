import { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { todoType } from "./apptypes";
import TodoItem from "./TodoItem";
const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name == "task") {
      setTask(event.target.value);
    }
    if (event.target.name == "workDay") {
      setWorkDay(Number(event.target.value));
    }
  };
  const addNewTask = () => {
    const newTask: todoType = {
      taskName: task,
      workDay: workDay,
    };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
  };
  const deleteTask = (name: string): void => {
    setTodoList(todoList.filter((t) => t.taskName !== name));
  };
  return (
    <div className="App">
      <div className="maincard">
        <input
          className="maincardinput"
          type="text"
          name="task"
          value={task}
          onChange={handleChange}
          placeholder="Taskınızı giriniz..."
        />
        <input
          className="maincardinput"
          type="number"
          name="workDay"
          value={workDay}
          onChange={handleChange}
          placeholder="Kaç günde tamamlayacaksınız"
        />
        <button className="maincardbutton" onClick={addNewTask}>
          Yeni task ekle
        </button>
      </div>
      <div className="todos">
        {todoList.map((todo: todoType, i: number) => {
          return <TodoItem key={i} task={todo} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
