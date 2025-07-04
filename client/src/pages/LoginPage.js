// pages/LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import socket from '../utils/socket';

const LoginPage = ({ setUsername }) => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    socket.connect(); // establish socket connection
    socket.emit('join', name); // notify server
    setUsername(name); // store in app state
    navigate('/chat'); // go to chat room
  };

  return (
    <div className="login-page">
      <h2>Welcome to Socket.io Chat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Join Chat</button>
      </form>
    </div>
  );
};

export default LoginPage;
