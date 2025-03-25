import { useParams, useSearchParams } from "react-router-dom";
import MainView from "../Partials/MainView";
import TopBar from "../Partials/TopBar";
import { useEffect } from "react";
import {UseSocket} from '../Context/SocketContext'

export const Room = ()=>{
    const socket = UseSocket();
    const { name, roomId } = useParams(); 
    useEffect(()=>{
      socket.emit('room:join',name,roomId);
    },[name,roomId,socket]);

return (
<div className="bg-[#FFFFFF] w-full h-screen">
    <TopBar></TopBar>
    <MainView></MainView>
</div>
)
};


