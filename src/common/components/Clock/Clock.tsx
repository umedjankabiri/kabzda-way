import {FC, useEffect, useState} from "react";
import {ClockProps} from "common/types/Clock/ClockProps.ts";
import {DigitalClockView} from "common/components/Clock/DigitalClockView/DigitalClockView.tsx";
import {AnalogClockView} from "common/components/Clock/AnalogClockView/AnalogClockView.tsx";

export const Clock: FC<ClockProps> = ({watchMode}) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timerID = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timerID);
    }, []);

    let view;

    switch (watchMode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break;
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }

    return (
        <div>
            {
                view
            }
        </div>
    )
}
