import {useEffect, useState} from "react";

export default {
    title: 'useEffect stories',
}

export const UseEffectDemonstration = () => {
    console.log("useEffect Demonstration")
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log("useEffect will be called every render")
        document.title = counter.toString();
    })
    useEffect(() => {
        console.log("useEffect will be called only in first render (ComponentDidMount)")
        document.title = counter.toString();
    }, [])
    useEffect(() => {
        console.log("useEffect will be called in first render, and when it's dependency will be changed")
        document.title = counter.toString();
    }, [counter])

    return (
        <div>
            <div>fake:
                <button onClick={() => setFake(fake + 1)}>fake +</button>
                {fake}
            </div>
            <div>counter:
                <button onClick={() => setCounter(counter + 1)}>counter +</button>
                {counter}
            </div>
        </div>
    )
}
