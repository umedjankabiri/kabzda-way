import {FC} from "react";
import {ClockViewProps} from "common/types/Clock/ClockViewProps.ts";
import {putZeroFirst} from "common/utils/putZeroFirst.ts";

export const DigitalClockView: FC<ClockViewProps> = ({date}) => {

        return (
            <>
                <span>{putZeroFirst(date.getHours())}</span>
                :
                <span>{putZeroFirst(date.getMinutes())}</span>
                :
                <span>{putZeroFirst(date.getSeconds())}</span>
            </>
        )
}
