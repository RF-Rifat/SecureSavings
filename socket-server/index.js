const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("http");
const port = 3000;
const cors = require("cors");
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("server is running");
});

io.on("connection", (socket) => {
  console.log("User Id", socket.id);
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
