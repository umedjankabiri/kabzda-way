import {StarProps} from "common/types/Star/StarProps.ts";

export const Star = (props: StarProps) => {
    console.log("Star rendering")

    return (
        <span onClick={()=> props.onClick && props.onClick(props.value)}>
            {props.selected ? <b>Star </b> : "Star "}
        </span>
    );
};