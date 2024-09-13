import {useEffect, useState} from "react";

export default {
    title: 'setInterval stories',
}

export const SetIntervalDemonstration = () => {
    console.log("setInterval Demonstration")
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        setInterval(() => {
            console.log("tick: " + counter);
            setCounter(prevState => prevState + 1);
        }, 1000)
    }, [])

    return (
        <div>
            <div>
                fake: {fake}
            </div>
            <div>
                counter: {counter}
            </div>
        </div>
    )
}
