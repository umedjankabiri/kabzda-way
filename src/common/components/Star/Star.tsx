import {StarProps} from "common/types/Star/StarProps.ts";

export const Star = (props: StarProps) => {
    console.log("Star rendering")
    const onClickHandler = () => props.onClick && props.onClick(props.value)

    return (
        <span onClick={onClickHandler}>
            {props.selected ? <b>Star </b> : "Star "}
        </span>
    );
};