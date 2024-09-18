import {FC, useEffect, useState} from "react";
import {ClockProps} from "common/types/OnOff/ClockProps.ts";

export const Clock: FC<ClockProps> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timerID = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timerID);
    }, []);

    const putZeroFirst = (number: number) => number < 10 ? ("0" + number) : number

    const hours = putZeroFirst(date.getHours())
    const minutes = putZeroFirst(date.getMinutes())
    const seconds = putZeroFirst(date.getSeconds())

    return (
        <div>
            <span>{hours}</span>
            :
            <span>{minutes}</span>
            :
            <span>{seconds}</span>
        </div>
    )
}
