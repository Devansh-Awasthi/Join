"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_1 = require("socket.io");
var io = new socket_io_1.Server(3000);
io.on("connection", function (socket) {
    console.log('Hello from server');
});
