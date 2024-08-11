import {Star} from "common/components/Star/Star.tsx";

export const Rating = () => {
    console.log("Rating rendering")

    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
        </div>
    );
};