// socket/index.js

module.exports = (io) => {
  const users = {};

  io.on('connection', (socket) => {
    console.log(`🟢 [Socket] Connected: ${socket.id}`);

    // Handle user joining with a username
    socket.on('join', (username) => {
      users[socket.id] = username;
      console.log(`${username} joined the chat`);

      io.emit('userStatus', {
        type: 'join',
        user: username,
        time: new Date().toISOString(),
      });
    });

    // Broadcast messages
    socket.on('message', (data) => {
      const messageData = {
        text: data.text,
        sender: users[socket.id],
        timestamp: new Date().toISOString(),
      };
      io.emit('message', messageData);
    });

    // Typing indicator
    socket.on('typing', () => {
      socket.broadcast.emit('typing', users[socket.id]);
    });

    // Handle disconnect
    socket.on('disconnect', () => {
      const username = users[socket.id];
      delete users[socket.id];

      if (username) {
        io.emit('userStatus', {
          type: 'leave',
          user: username,
          time: new Date().toISOString(),
        });
        console.log(`🔴 [Socket] ${username} disconnected`);
      }
    });
  });
};
