import {useEffect, useState} from "react";

export default {
    title: 'setInterval stories',
}

export const SetIntervalDemonstration = () => {
    console.log("setInterval Demonstration")
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log("useEffect")
        const intervalID = setInterval(() => {
            console.log("tick: " + counter);
            setCounter(prevState => prevState + 1);
        }, 1000)

        return () => clearInterval(intervalID)
    }, [])

    return (
        <div>
            counter: {counter}
        </div>
    )
}
