import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchActivityLog } from '../../redux/actions/activityLogActions';

const ActivityLog = () => {
  const { logs } = useSelector((state) => state.activityLog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivityLog());
  }, [dispatch]);

  return (
    <div className="activity-log">
      <h2>Activity Log</h2>
      <ul>
        {logs.map((log) => (
          <li key={log._id}>
            {log.message} - {new Date(log.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
