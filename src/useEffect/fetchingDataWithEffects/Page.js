import { useEffect, useState } from "react";
import { fetchBio } from "./api";

const Page=()=>{
    const [person, setPerson] = useState('Alice');
    const [bio, setBio] = useState(null);

    // dung Promise
    // useEffect(() => {
    //     
    //     setBio(null);
    //     fetchBio(person).then(result => {  
    //     setBio(result);     
    //     });
    // }, [person])

    // async/await
    useEffect(() => {
        async function startFetching() {
            setBio(null);
            const result = await fetchBio(person);
            setBio(result)
        }
        startFetching();
    }, [person])

    return (
        <>
            <select value={person} onChange={e => {setPerson(e.target.value)}}>
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
                <option value="Taylor">Taylor</option>
            </select>
            <p><i>{bio ?? 'Loading...'}</i></p>
        </>
    )
}
export default Page;

