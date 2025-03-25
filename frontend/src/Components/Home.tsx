import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = () => { 
    if (name && room) {
      navigate(`/room/manage/${name}/${room}`);
    } else {
      alert("Please enter both Name and Room ID!");
    }
  };

  return (
    <div className="bg-[#F3F4F8] h-screen w-full flex flex-col items-center justify-center">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        placeholder="Enter Room ID"
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleJoinRoom}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Join Room
      </button>
    </div>
  );
}

export default Home;
