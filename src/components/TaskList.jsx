import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, removeTask } = useContext(TaskContext);

  return (
    <div className="container">
      <h2>Task List</h2>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id} style={{ listStyle: "none", marginBottom: "10px" }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                background: "rgba(255, 255, 255, 0.2)",
                padding: "10px",
                borderRadius: "5px",
                
              }}>
                <span>{task.name} - {task.priority}</span>
                <button onClick={() => removeTask(task.id)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>No tasks added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
