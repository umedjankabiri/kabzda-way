import {UncontrolledStarProps} from "common/types/UncontrolledStar/UncontrolledStarProps.ts";

export const UncontrolledStar = (props: UncontrolledStarProps) => {
    console.log("UncontrolledStar rendering")
    const onClickHandler = ()=> props.onClick && props.onClick()

    return (
        <span onClick={onClickHandler}>
            {props.selected ? <b>Star </b> : "Star "}
        </span>
    )
};