const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

// Enable CORS for client dev port (default: 3000)
app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // React client URL
    methods: ["GET", "POST"]
  }
});

// Handle socket connection
io.on('connection', (socket) => {
  console.log(`🟢 New client connected: ${socket.id}`);

  // Example message handler
  socket.on('message', (data) => {
    console.log(`Message from ${socket.id}:`, data);
    io.emit('message', data); // Broadcast to all clients
  });

  socket.on('disconnect', () => {
    console.log(`🔴 Client disconnected: ${socket.id}`);
  });
});

// Root route
app.get('/', (req, res) => {
  res.send('Socket.io Chat Server is running');
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

const { PORT, CLIENT_URL } = require('./config');
const socketHandler = require('./socket');

...

const io = new Server(server, {
  cors: {
    origin: CLIENT_URL,
    methods: ['GET', 'POST'],
  },
});

socketHandler(io); // Register all socket events
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
app.use(express.json()); // For parsing JSON bodies

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
