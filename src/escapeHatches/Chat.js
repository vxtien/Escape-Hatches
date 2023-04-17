import { useRef, useState } from "react";
const Chat=()=>{
    const [text, setText] = useState('');
    const textRef = useRef(text)
    const handleSubmit=(e)=>{
        e.preventDefault();
        setTimeout(()=>{
            alert('Sending: ' + textRef.current)
        }, 5000)
    }
    const handleChange=(e)=>{
        setText(e.target.value);
        textRef.current = e.target.value;
    }
    return(
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={handleChange}/>
            <button type="submit">Send</button>
        </form>
    )
}
export default Chat;