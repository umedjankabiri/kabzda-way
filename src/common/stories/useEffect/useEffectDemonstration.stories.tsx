import {useEffect, useState} from "react";

export default {
    title: 'useEffect stories',
}

export const UseEffectDemonstration = () => {
    console.log("useEffect Demonstration")
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log("useEffect")
        document.title = counter.toString();
    })

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </div>
    )
}
