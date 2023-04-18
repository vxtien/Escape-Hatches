import { useEffect, useState } from "react";
import { createConnection } from "./Chat";
const ChatRoom=({roomId}) =>{
    const [serverUrl, setServerUrl] = useState('https:localhost:3000');
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId, serverUrl])
    return <h1>Wellcome to the {roomId} room!</h1>
}
export default ChatRoom;
