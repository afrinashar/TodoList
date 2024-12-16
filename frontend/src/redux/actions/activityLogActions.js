import api from '../../utils/api'; // Assuming you have a utility for API calls.

export const fetchActivityLog = () => async (dispatch) => {
  try {
    const { data } = await api.get('/activity-log');
    dispatch({ type: 'FETCH_ACTIVITY_LOG_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_ACTIVITY_LOG_ERROR', payload: error.message });
  }
};
