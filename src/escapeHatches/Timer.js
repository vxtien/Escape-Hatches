import { useEffect, useState } from "react";
import { experimental_useEffectEvent as useEffectEvent} from "react";
const Timer=()=>{
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(1);

    const onTick = useEffectEvent(() => {
        setCount(c => c + increment);
    })

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         setCount(c => c + increment);
    //     }, 1000);
    //     return () => {
    //         clearInterval(id);
    //     }
    // }, [increment])
    useEffect(() => {
        const id = setInterval(() => {
            onTick();
        }, 1000);
        return () => {clearInterval(id)};
    })
    const handleReset=()=>{
        setCount(0);
    }
    const handleDecrease=()=>{
        setIncrement(increment - 1)
    }
    const handleIncrement=()=>{
        setIncrement(increment + 1)
    }
    return(
        <>
            <h1>
                Counter: {count}
                <button onClick={handleReset}>Rest</button>
            </h1>
            <hr />
            <p>
                Every second, increment by:
                <button disabled={increment === 0} onClick={handleDecrease}>-</button>
                <b>{increment}</b>
                <button onClick={handleIncrement}>+</button>
            </p>
        </>
    )
}
export default Timer;