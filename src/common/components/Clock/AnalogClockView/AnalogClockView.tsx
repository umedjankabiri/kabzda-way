import {FC} from "react";
import {ClockViewProps} from "common/types/Clock/ClockViewProps.ts";
import stl from "./AnalogClockView.module.css";

export const AnalogClockView: FC<ClockViewProps> = ({date}) => {
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };

    return (
        <div className={stl.clock}>
            <div className={stl["analog-clock"]}>
                <div className={`${stl.dial} ${stl.seconds}`} style={secondsStyle}/>
                <div className={`${stl.dial} ${stl.minutes}`} style={minutesStyle}/>
                <div className={`${stl.dial} ${stl.hours}`} style={hoursStyle}/>
            </div>
        </div>
    )
}
