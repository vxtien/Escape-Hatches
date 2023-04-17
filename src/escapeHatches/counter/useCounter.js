import { useEffect, useState } from "react";

const useCounter=(delay)=>{
    const [count, setCount] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + 1);
        }, delay)
        return () => clearInterval(id);
    }, [delay])
    return count
}
export default useCounter;