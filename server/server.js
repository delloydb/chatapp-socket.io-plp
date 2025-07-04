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
