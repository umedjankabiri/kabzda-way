import {StarProps} from "common/types/Star/StarProps.ts";

export const Star = (props: StarProps) => {
    console.log("Star rendering")

    return (
        <span>
            {props.selected ? <b>Star </b> : "Star "}
        </span>
    );
};