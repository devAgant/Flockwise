// Written by Evan

import React, { useState, useEffect } from 'react';

const Notification = ({ message, isError, onClose }) => {
  const [visible, setVisible] = useState(true);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000); // Set the duration for how long the notification should be visible

    return () => clearTimeout(timeout);
  }, [onClose]);

  return visible ? (
    <div className="notification" style={{ padding: '10px', background: isError ? '#ff8c8c' : '#8cff8c' }}>
      {message}
    </div>
  ) : null;
};

export default Notification;