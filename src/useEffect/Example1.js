import { useEffect, useState } from "react"

const Example2 = () => {
    const [a, setA] = useState(1);
    const [b, setB] = useState(2);
    const [numberC, setNumberC] = useState(0);

    const handleChangeA=(e)=>{setA(e.target.value)}
    const handleChangeB=(e)=>{setB(e.target.value)}

    useEffect(() => {
        setNumberC( Number(a) + Number(b));
        console.log(typeof a);
    },[a , b])
    return(
        <div>
            <label>
                A:{a}
                <input type="number" value={a} onChange={handleChangeA} />
            </label>
            <br/>
            <label>
                B:{b}
                <input type="number" value={b} onChange={handleChangeB}/>
            </label>
            <br/>
            <label>
                C:{numberC}
                <input value={numberC}/>
            </label>
        </div>
    )
}
export default Example2;