import {RatingValueProps} from "common/types/Rating/RatingValueProps.ts";

export type UncontrolledRatingProps = {
    defaultValue?: RatingValueProps
    onClick?: (value: RatingValueProps) => void
}