const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // You can restrict this to your frontend URL
    methods: ["GET", "POST"],
  },
});

const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

let socketInstance = null; // To store the connected socket

// ✅ Setup Socket.IO
io.on("connection", (socket) => {
  console.log("⚡ New client connected");
  socketInstance = socket;

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected");
    socketInstance = null;
  });
});

// ✅ Webhook endpoint (for Dialogflow chatbot)
app.post("/webhook", (req, res) => {
  const parameters = req.body.queryResult.parameters;

  console.log("🔍 Full Request Parameters:", parameters);

  let source = parameters.source;
  let destination = parameters.destination;

  if (Array.isArray(source)) source = source[0];
  if (Array.isArray(destination)) destination = destination[0];

  console.log(`🚀 Source: ${source}, Destination: ${destination}`);

  // ✅ Emit to frontend if socket is connected
  if (socketInstance) {
    socketInstance.emit("pathData", { source, destination });
    console.log("📡 Emitted to frontend:", { source, destination });
  }

  // Send response back to Dialogflow
  res.json({
    fulfillmentText: `Navigating from ${source} to ${destination}`,
  });
});

// ✅ Start both Express and Socket.IO servers
server.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});


const { parseQuery } = require('./utils/parser');

io.on("connection", (socket) => {
  socket.on("chatMessage", (message) => {
    console.log("📥 User said:", message);

    const { source, destination } = parseQuery(message);
    if (destination) {
      socket.emit("pathData", { source, destination });
    } else {
      socket.emit("botReply", "Sorry, I couldn't understand that. Try saying 'Go from Miniso to KFC'");
    }
  });
});


