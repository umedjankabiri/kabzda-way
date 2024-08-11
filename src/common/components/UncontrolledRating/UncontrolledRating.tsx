import {useState} from "react";
import {UncontrolledStar} from "common/components/UncontrolledStar/UncontrolledStar.tsx";

export const UncontrolledRating = () => {
    console.log("UncontrolledRating rendering")
    const [value, setValue] = useState(0);

    return (
        <div>
            <UncontrolledStar selected={value > 0} onClick={()=> setValue(1)}/>
            <UncontrolledStar selected={value > 1} onClick={()=> setValue(2)}/>
            <UncontrolledStar selected={value > 2} onClick={()=> setValue(3)}/>
            <UncontrolledStar selected={value > 3} onClick={()=> setValue(4)}/>
            <UncontrolledStar selected={value > 4} onClick={()=> setValue(5)}/>
        </div>
    );
};