import {OnOffProps} from "common/types/OnOff/OnOffProps.ts";
import s from "common/components/OnOff/onOff.module.css"

export const OnOff = (props: OnOffProps) => {
    const onClickOnHandler = () => props.onClick && props.onClick(true)
    const onClickOffHandler = () => props.onClick && props.onClick(false)

    return (
        <div className={s.mainWrapper}>
            <div className={s.on}
                 style={props.toggle ? {backgroundColor: "green"} : {backgroundColor: "white"}}
                 onClick={onClickOnHandler}
            >
                ON
                <div className={s.off}
                     style={!props.toggle ? {backgroundColor: "red"} : {backgroundColor: "white"}}
                     onClick={onClickOffHandler}
                >
                    OFF
                </div>
            </div>
            <div className={s.circle} style={props.toggle ? {backgroundColor: "green"} : {backgroundColor: "red"}}>

            </div>
        </div>
    );
};