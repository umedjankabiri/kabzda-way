import {useEffect, useState} from "react";

export default {
    title: 'setInterval stories',
}

export const SetIntervalDemonstration = () => {
    console.log("setInterval Demonstration")
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("tick: " + counter);
            setCounter(prevState => prevState + 1);
        }, 1000)

        return () => clearInterval(intervalID)
    }, [counter])

    return (
        <div>
            counter: {counter}
        </div>
    )
}
