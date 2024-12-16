import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Tasks</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
          <li><Link to="/activity-log">Activity Log</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
