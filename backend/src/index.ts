import { Server } from "socket.io";
const io = new Server(3000,{
    cors: {
        origin: "http://localhost:5173", // Change this to your frontend URL
        methods: ["GET", "POST"],
        // credentials: true,  
    },
});

io.on("connection", (socket) => {
 console.log('Hello from server');
 socket.on('room:join',(name,roomId)=>{
    socket.join(roomId);
    console.log(`${name} joined room ${roomId}`);
 })
})