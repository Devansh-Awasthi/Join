"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_1 = require("socket.io");
var io = new socket_io_1.Server(3000, {
    cors: {
        origin: "http://localhost:5173", // Change this to your frontend URL
        methods: ["GET", "POST"],
        // credentials: true,  
    },
});
io.on("connection", function (socket) {
    console.log('Hello from server');
    socket.on('room:join', function (name, roomId) {
        socket.join(roomId);
        console.log("".concat(name, " joined room ").concat(roomId));
    });
});
