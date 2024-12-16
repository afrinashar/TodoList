import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Tasks</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/activity-log">Activity Log</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
