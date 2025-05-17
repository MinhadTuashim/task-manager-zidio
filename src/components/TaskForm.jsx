import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    if (taskName.trim()) {
      addTask({ id: Date.now(), name: taskName, priority: "Normal" });
      setTaskName("");
    }
  };

  return (
    <div className="container">
      <h2>Add New Task</h2>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
