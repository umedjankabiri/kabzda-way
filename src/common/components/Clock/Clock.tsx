import {FC, useEffect, useState} from "react";
import {ClockProps} from "common/types/OnOff/ClockProps.ts";
import {putZeroFirst} from "common/utils/putZeroFirst.ts";

export const Clock: FC<ClockProps> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timerID = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timerID);
    }, []);

    return (
        <div>
            <span>{putZeroFirst(date.getHours())}</span>
            :
            <span>{putZeroFirst(date.getMinutes())}</span>
            :
            <span>{putZeroFirst(date.getSeconds())}</span>
        </div>
    )
}
