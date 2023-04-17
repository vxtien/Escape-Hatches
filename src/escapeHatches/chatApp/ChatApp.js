import { useState } from "react";
import ChatRoom from "./ChatRoom";
const ChatApp=()=>{
    const [roomId, setRoomId] = useState('general');
    const [show, setShow] = useState(false);
    const handleChangleRoom=(e)=>{
        setRoomId(e.target.value);
    }
    const handleShow=()=>{
        setShow(!show)
    } 
    return(
        <>
            <label>
                Choose the chat room:
                <select
                    value={roomId}
                    onChange={handleChangleRoom}
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <button onClick={handleShow}>
                {show ? 'Close chat' : 'Open chat'}
            </button>
            {show && <hr />}
            {show && <ChatRoom roomId={roomId}/>}
        </>
    )
}
export default ChatApp;
