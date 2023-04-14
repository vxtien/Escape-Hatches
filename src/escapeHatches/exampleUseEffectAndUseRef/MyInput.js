import { useEffect, useRef } from "react"

const MyInput=({value, onChange, shouldFocus})=>{
    const ref = useRef(null);
    useEffect(() => {
        if (shouldFocus) {
            ref.current.focus();
        }
    }, [shouldFocus])
    return(
        <input 
            ref={ref}
            value={value}
            onChange={onChange}
        />
    )
}
export default MyInput;