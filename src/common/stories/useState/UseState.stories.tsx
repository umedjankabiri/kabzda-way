import {useMemo, useState} from "react";
import {UseStateCounterDemonstration} from "common/stories/useState/UseStateCounterDemonstration.tsx";

export default {
    title: 'useState stories',
}

function generateData() {
    console.log("generateData")
    return 3284982732;
}

export const UseStateDemonstration = () => {
    console.log("useState Demonstration")
    const initialValue = useMemo(generateData, []);
    const [counter, setCounter] = useState(initialValue);

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <UseStateCounterDemonstration counter={counter}/>
        </div>
    )
}
