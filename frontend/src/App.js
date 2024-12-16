import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TaskList from './components/Dashboard/TaskList';
import Header from './components/Layout/Header';
import Notifications from './components/Dashboard/Notifications';
import ActivityLog from './components/Dashboard/ActivityLog';

function App() {
  const { user, token } = useSelector((state) => state.auth); // Check if the user is logged in

  // Protect routes based on user authentication
  const PrivateRoute = ({ children }) => {
    return token ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="App">
        {/* Display Header only if the user is logged in */}
        {token && <Header />}
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <TaskList />
              </PrivateRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <PrivateRoute>
                <Notifications />
              </PrivateRoute>
            }
          />
          <Route
            path="/activity-log"
            element={
              <PrivateRoute>
                <ActivityLog />
              </PrivateRoute>
            }
          />

          {/* Catch-All Route */}
          <Route path="*" element={<Navigate to={token ? "/" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
