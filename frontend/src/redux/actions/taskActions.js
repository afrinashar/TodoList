import api from '../../utils/api'; // Assuming you have an API utility.

export const fetchTasks = () => async (dispatch) => {
  try {
    const { data } = await api.get('/tasks');
    dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_TASKS_ERROR', payload: error.message });
  }
};

export const addTask = (task) => async (dispatch) => {
    try {
      const { data } = await api.post('/tasks', task);
      dispatch({ type: 'ADD_TASK_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'ADD_TASK_ERROR', payload: error.message });
    }
  };
  

export const updateTask = (taskId, updatedTask) => async (dispatch) => {
  try {
    const { data } = await api.put(`/tasks/${taskId}`, updatedTask);
    dispatch({ type: 'UPDATE_TASK_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'UPDATE_TASK_ERROR', payload: error.message });
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    await api.delete(`/tasks/${taskId}`);
    dispatch({ type: 'DELETE_TASK_SUCCESS', payload: taskId });
  } catch (error) {
    dispatch({ type: 'DELETE_TASK_ERROR', payload: error.message });
  }
};
