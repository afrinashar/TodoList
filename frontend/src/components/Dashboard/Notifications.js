import React from 'react';
import { useSelector } from 'react-redux';

const Notifications = () => {
  const { notifications } = useSelector((state) => state.notification);

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      {notifications.map((notification) => (
        <div key={notification.id} className="notification">
          <p>{notification.message}</p>
          <p>{new Date(notification.timestamp).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
