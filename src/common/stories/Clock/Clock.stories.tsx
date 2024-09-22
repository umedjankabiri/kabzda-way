import {Clock} from "common/components/Clock/Clock.tsx";

export default {
    title: "Clock stories",
    component: Clock
}

export const DigitalClockDemonstration = () => {
    return (
        <Clock watchMode={"digital"}/>
    )
}
export const AnalogClockDemonstration = () => {
    return (
        <Clock watchMode={"analog"}/>
    )
}
