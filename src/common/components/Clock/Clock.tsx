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

    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

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
