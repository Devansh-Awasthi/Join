import { createContext, useContext, useMemo } from "react";
import { io } from "socket.io-client";
const CreatedContext = createContext(null);
     export const UseSocket  = ()=>{
        const socket = useContext(CreatedContext);
        return socket;
     }
 
export const CreateProviders = (props) =>{
     const socket = useMemo(()=>io("localhost:3000"),[]);
    return (
         < CreatedContext.Provider value={socket}>
             {props.children}
         </CreatedContext.Provider>
     )
}