import {useState} from "react";
import {UseStateCounterDemonstration} from "common/stories/useState/UseStateCounterDemonstration.tsx";

export default {
    title: 'useState stories',
}

function generateData() {
    // difficult counting
    console.log("generateData")
    return 1;
}

export const UseStateDemonstration = () => {
    console.log("useState Demonstration")
    const [counter, setCounter] = useState(generateData);

    return (
        <div>
            <button onClick={() => setCounter(prevState => prevState + 1)}>+</button>
            <UseStateCounterDemonstration counter={counter}/>
        </div>
    )
}
