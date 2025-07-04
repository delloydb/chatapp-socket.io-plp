// components/ChatBox.js

import React, { useState } from 'react';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import socket from '../utils/socket';

const ChatBox = ({ messages, typingUser }) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim() === '') return;
    socket.emit('message', { text: message });
    setMessage('');
  };

  const handleTyping = () => {
    socket.emit('typing');
  };

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg, i) => (
          <Message key={i} {...msg} />
        ))}
      </div>

      <TypingIndicator user={typingUser} />

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

export default ChatBox;
