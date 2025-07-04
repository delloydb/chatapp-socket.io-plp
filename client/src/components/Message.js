// components/Message.js

import React from 'react';

const Message = ({ sender, text, system }) => {
  return (
    <div className={system ? 'system-msg' : 'chat-msg'}>
      {system ? (
        <em>{text}</em>
      ) : (
        <p><strong>{sender}:</strong> {text}</p>
      )}
    </div>
  );
};

export default Message;
