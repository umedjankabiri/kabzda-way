import {Star} from "common/components/Star/Star.tsx";
import {RatingProps} from "common/types/Rating/RatingProps.ts";

export const Rating = (props: RatingProps) => {
    console.log("Rating rendering")

    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    );
};