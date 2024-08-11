import {Star} from "common/components/Star/Star.tsx";

export const Rating = () => {
    console.log("Rating rendering")

    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
};