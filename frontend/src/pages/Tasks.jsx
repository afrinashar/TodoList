import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTasks, updateTask } from '../store/taskSlice.js';
import axios from 'axios';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get('/tasks');
      dispatch(setTasks(res.data));
    };

    fetchTasks();
  }, [dispatch]);

  const handleComplete = async (taskId) => {
    const res = await axios.put(`/tasks/${taskId}`, { status: 'Done' });
    dispatch(updateTask(res.data));
  };

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => handleComplete(task._id)}>Mark as Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
