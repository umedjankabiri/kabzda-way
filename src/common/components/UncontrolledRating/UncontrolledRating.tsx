import {FC, useState} from "react";
import {UncontrolledStar} from "common/components/UncontrolledStar/UncontrolledStar.tsx";
import {UncontrolledRatingProps} from "common/types/UncontrolledRating/UncontrolledRatingProps.ts";
import {RatingValueProps} from "common/types/Rating/RatingValueProps.ts";

export const UncontrolledRating: FC<UncontrolledRatingProps> = (props) => {
    console.log("UncontrolledRating rendering")
    const [value, setValue] = useState<RatingValueProps>(props.defaultValue ? props.defaultValue : 0);

    return (
        <div>
            <UncontrolledStar selected={value > 0}
                              onClick={() => {
                                  setValue(1);
                                  props.onClick && props.onClick(1)
                              }
                              }
            />
            <UncontrolledStar selected={value > 1}
                              onClick={
                                  () => {
                                      setValue(2);
                                      props.onClick && props.onClick(2)
                                  }
                              }
            />
            <UncontrolledStar selected={value > 2}
                              onClick={
                                  () => {
                                      setValue(3);
                                      props.onClick && props.onClick(3)
                                  }
                              }
            />
            <UncontrolledStar selected={value > 3}
                              onClick={
                                  () => {
                                      setValue(4);
                                      props.onClick && props.onClick(4)
                                  }
                              }
            />
            <UncontrolledStar selected={value > 4}
                              onClick={
                                  () => {
                                      setValue(5);
                                      props.onClick && props.onClick(5)
                                  }
                              }
            />
        </div>
    );
};