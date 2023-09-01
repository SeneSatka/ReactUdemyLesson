import { useContext, useState } from "react";
import TaskCreate from "./taskCreate";
import TaskContext from "../Context/task";

function TaskShow({ task }) {
  const { tasks, deleteTaskById, editTaskById } = useContext(TaskContext);
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    deleteTaskById(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedDesc) => {
    setShowEdit(false);
    editTaskById(id, updatedTitle, updatedDesc);
  };
  return (
    <div className="task-show">
      {showEdit ? (
        <div>
          <TaskCreate
            task={task}
            taskformUpdate={true}
            onUpdate={handleSubmit}
          />
        </div>
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
