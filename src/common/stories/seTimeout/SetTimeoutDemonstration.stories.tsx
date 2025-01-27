import {useEffect, useState} from "react";

export default {
    title: 'setTimeout stories',
}

export const SetTimeoutDemonstration = () => {
    console.log("setTimeout Demonstration")
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            console.log("setTimeout")
            document.title = counter.toString();
        }, 1000)
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
