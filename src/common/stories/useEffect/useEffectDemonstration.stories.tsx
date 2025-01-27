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
            <div>
                fake:
                <button onClick={() => setFake(fake + 1)}>fake +</button>
                {fake}
            </div>
            <div>
                counter:
                <button onClick={() => setCounter(counter + 1)}>counter +</button>
                {counter}
            </div>
        </div>
    )
}

export const ResetUseEffectDemonstration = () => {
    console.log("Component ResetUseEffectDemonstration rendered")
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log("useEffect occurred: " + counter + " actual counter");

        return () => {
            console.log("Reset useEffect: " + counter + " old counter");
        }
    }, [counter])

    const increase = () => setCounter(counter + 1)

    return (
        <>
            <button onClick={increase}>+</button>
            counter: {counter}
        </>
    )
}

export const KeysTrackerDemonstration = () => {
    console.log("Component KeysTracker rendered")
    const [text, setText] = useState("");

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            console.log(event.key)
            setText(text + event.key)
        }
        window.addEventListener("keypress", handler)

        return () => {
            window.removeEventListener("keypress", handler)
        }
    }, [text])

    return (
        <>
            <span>Typed text: {text}</span>
        </>
    )
}

export const SetTimeoutDemonstration = () => {
    console.log("Component SetTimeoutDemonstration rendered")
    const [text, setText] = useState("");

    useEffect(() => {
        const timeoutID = setTimeout(()=> {
            console.log("Timeout expired")
            setText("3 seconds passed")
        }, 3000)

        return () => {
            console.log("Reset useEffect:  clearing setTimeout demonstration");
            clearTimeout(timeoutID)
        }
    }, [text])

    return (
        <>
            <span>waiting for setTimeout: {text}</span>
        </>
    )
}
