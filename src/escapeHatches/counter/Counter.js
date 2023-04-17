import { useState } from "react"
import useCounter from "./useCounter";

const Counter=()=>{
    const [delay, setDelay] = useState(1000);
    const count = useCounter(delay);
    const handleChangeDelay=(e)=>{
        setDelay(Number(e.target.value))
    }
    return(
        <>
            <label>
                Tick duration: {delay} ms
                <br/>
                <input
                    type="range"
                    value={delay}
                    min="10"
                    max="2000"
                    onChange={handleChangeDelay}
                />
            </label>
            <hr/>
            <h1>Ticks: {count}</h1>
        </>
    )
}
export default Counter;