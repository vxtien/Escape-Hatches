import { useState } from "react";
import ChatRoom from "./ChatRoom";

const serverUrl = 'https:localhost:3000'

const ChatApp=()=>{
    const [roomId, setRoomId] = useState('general');
    const [isDark, setIsDark] = useState(false);
    const handleChangleRoom=(e)=>{
        setRoomId(e.target.value);
    }
    return(
        <>
            <label>
                Choose the chat room:{' '}
                <select
                    value={roomId}
                    onChange={handleChangleRoom}
                >
                    <option>general</option>
                    <option>travel</option>
                    <option>music</option>
                </select>
            </label>
            <label>
                <input
                    type="checkbox"
                    
                />
                Use dark theme
            </label>
            <hr/>
            <ChatRoom
                roomId={roomId}
                theme={isDark ? 'dark' : 'light'}
            />
        </>
    )
}
export default ChatApp;
