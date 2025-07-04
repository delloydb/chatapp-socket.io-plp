// pages/ChatRoomPage.js

import React, { useEffect, useState } from 'react';
import socket from '../utils/socket';

const ChatRoomPage = ({ username }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [typingUser, setTypingUser] = useState(null);

  useEffect(() => {
    socket.on('message', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on('typing', (user) => {
      setTypingUser(user);
      setTimeout(() => setTypingUser(null), 2000);
    });

    socket.on('userStatus', (status) => {
      setMessages((prev) => [...prev, {
        system: true,
        text: `${status.user} ${status.type === 'join' ? 'joined' : 'left'} the chat.`,
        timestamp: new Date().toISOString(),
      }]);
    });

    return () => {
      socket.off('message');
      socket.off('typing');
      socket.off('userStatus');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() === '') return;

    socket.emit('message', { text: message });
    setMessage('');
  };

  const handleTyping = () => {
    socket.emit('typing');
  };

  return (
    <div className="chat-room">
      <h3>Global Chat Room</h3>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={msg.system ? 'system-msg' : 'chat-msg'}>
            {msg.system ? (
              <em>{msg.text}</em>
            ) : (
              <p><strong>{msg.sender}:</strong> {msg.text}</p>
            )}
          </div>
        ))}
      </div>

      {typingUser && <p><em>{typingUser} is typing...</em></p>}

      <div className="input-area">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoomPage;
