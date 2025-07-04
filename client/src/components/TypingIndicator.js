// components/TypingIndicator.js

import React from 'react';

const TypingIndicator = ({ user }) => {
  return user ? <p className="typing"><em>{user} is typing...</em></p> : null;
};

export default TypingIndicator;
