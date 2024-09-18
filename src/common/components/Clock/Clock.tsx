import {FC, useState} from "react";
import {ClockProps} from "common/types/OnOff/ClockProps.ts";

export const Clock: FC<ClockProps> = (props) => {
    const [date, setDate] = useState(new Date())

    return (
        <div>
            <span>{date.getHours()}</span>
            :
            <span>{date.getMinutes()}</span>
            :
            <span>{date.getSeconds()}</span>
        </div>
    )
}
