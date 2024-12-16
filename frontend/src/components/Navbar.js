import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { auth, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {auth.user ? (
        <>
          <Link to="/tasks">Tasks</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
