import { useEffect } from "react";
import { createConnection } from "./Chat";
const serverUrl = 'https:localhost:3000'
const ChatRoom=({roomId}) =>{
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId])
    return <h1>Wellcome to the {roomId} room!</h1>
}
export default ChatRoom;
