import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

import authReducer from './reducers/authReducer';
import taskReducer from './reducers/taskReducer';
import notificationReducer from './reducers/notificationReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer,
  notifications: notificationReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Thunk is included by default
});

export default store;
