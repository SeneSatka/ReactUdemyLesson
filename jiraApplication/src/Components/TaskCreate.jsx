import { useContext, useState } from "react";

import TaskContext from "../Context/task";
function TaskCreate({ task, taskformUpdate, onUpdate }) {
  const { editTaskById, createTask } = useContext(TaskContext);
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskDescChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskformUpdate) onUpdate(task.id, title, taskDesc);
    else createTask(title, taskDesc);
    setTaskDesc("");
    setTitle("");
  };
  return (
    <>
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı düzenleyin</h3>
          <form className="task-form" onSubmit={handleSubmit}>
            <label className="task-label">Başlığı düzenleyiniz</label>
            <input
              className="task-input"
              onChange={handleTitleChange}
              value={title}
              required
            />
            <label className="task-label">Taskı düzenleyiniz</label>
            <textarea
              className="task-input"
              rows={5}
              value={taskDesc}
              onChange={handleTaskDescChange}
              required
            ></textarea>
            <button type="submit" className="task-button update-button">
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen task ekleyiniz</h3>
          <form className="task-form" onSubmit={handleSubmit}>
            <label className="task-label">Başlık</label>
            <input
              className="task-input"
              onChange={handleTitleChange}
              value={title}
              required
            />
            <label className="task-label">Task giriniz</label>
            <textarea
              className="task-input"
              rows={5}
              value={taskDesc}
              onChange={handleTaskDescChange}
              required
            ></textarea>
            <button type="submit" className="task-button">
              Oluştur
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default TaskCreate;
