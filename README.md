# chatapp-socket.io-plp
# 📡 Real-Time Chat Application

A real-time chat app built using **MERN Stack** (MongoDB, Express.js, React, Node.js) and **Socket.io**, supporting live global messaging, user presence, and typing indicators.

---

## 🚀 Features

- ✅ Real-time global messaging using Socket.io
- ✅ Simple username-based login
- ✅ Typing indicator when someone is composing
- ✅ User join/leave notifications
- ✅ Modular and scalable backend/frontend architecture
- ✅ Responsive design (desktop & mobile)

---

## 🗂️ Project Structure
.
├── server/ # Backend (Node.js + Express + Socket.io)
│ ├── controllers/ # Auth and chat logic
│ ├── models/ # Mongoose schemas (User, Message)
│ ├── routes/ # REST API endpoints
│ ├── socket/ # All socket events
│ ├── config.js # App config (port, CORS)
│ ├── server.js # Main server file
│ ├── .env # Environment variables
│ └── package.json
│
└── client/ # Frontend (React + Socket.io-client)
├── src/
│ ├── pages/ # LoginPage, ChatRoomPage
│ ├── components/ # ChatBox, Message, TypingIndicator
│ ├── utils/ # Socket connection logic
│ ├── App.js
│ ├── index.js
│ └── index.css
├── .env
├── package.json


---

## 🧪 How It Works

1. Users enter a username and join the global chat room.
2. Messages are sent and received in real-time.
3. When a user starts typing, a typing indicator is shown.
4. When users join or leave, notifications are broadcast.
5. All Socket.io events are handled in real time across clients.

---
## 🌐 Deployment
You can deploy the:

Frontend to Vercel or Netlify

Backend to Render, Railway, or Heroku

After deployment, update the .env files with your production URLs.

## 📦 Tech Stack
Frontend: React, Socket.io-client

Backend: Node.js, Express, Socket.io

Database: MongoDB (via Mongoose)

Real-time Engine: WebSocket via Socket.io

## 📌 Future Enhancements
🔒 JWT-based user authentication

💬 Private chat (DMs)

📁 File/image upload

🔔 Real-time sound + browser notifications

📚 Chat history + pagination


## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/realtime-chat-app.git
cd realtime-chat-app
cd server
npm install
PORT=5000
CLIENT_URL=http://localhost:3000
MONGO_URI=mongodb://localhost:27017/chatdb

