import React from "react";
import { todoType } from "./apptypes";
type PropsType = {
  task: todoType;
  deleteTask(name: string): void;
};
const TodoItem = ({ task, deleteTask }: PropsType) => {
  return (
    <div className="todo">
      <div>
        <p>{task.taskName}</p>
        <p>{task.workDay}</p>
        <button onClick={() => deleteTask(task.taskName)}>Sil</button>
      </div>
    </div>
  );
};

export default TodoItem;
