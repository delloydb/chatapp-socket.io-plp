// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ChatRoomPage from './pages/ChatRoomPage';

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LoginPage setUsername={setUsername} />}
        />
        <Route
          path="/chat"
          element={
            username
              ? <ChatRoomPage username={username} />
              : <Navigate to="/" replace />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
