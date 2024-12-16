import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, deleteTask } from '../../redux/actions/taskActions';
import TaskForm from './TaskForm';

const TaskList = () => {
  const { tasks } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleEdit = (task) => {
    setSelectedTask(task);
    setShowForm(true);
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleAdd = () => {
    setSelectedTask(null);
    setShowForm(true);
  };

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <button onClick={handleAdd}>Add Task</button>
      {tasks.map((task) => (
        <div key={task._id} className="task">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => handleEdit(task)}>Edit</button>
          <button onClick={() => handleDelete(task._id)}>Delete</button>
        </div>
      ))}
      {showForm && (
        <TaskForm task={selectedTask} onClose={() => setShowForm(false)} />
      )}
    </div>
  );
};

export default TaskList;
