import api from '../../utils/api';

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: 'LOGIN_REQUEST' });
    const { data } = await api.post('/auth/login', credentials);
    localStorage.setItem('token', data.token);
    dispatch({ type: 'LOGIN_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: 'REGISTER_REQUEST' });
    const { data } = await api.post('/auth/register', userData);
    localStorage.setItem('token', data.token);
    dispatch({ type: 'REGISTER_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAILURE', payload: error.response.data });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: 'LOGOUT' });
};
