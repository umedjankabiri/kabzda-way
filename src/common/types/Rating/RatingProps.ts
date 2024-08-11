import {RatingValueProps} from "common/types/Rating/RatingValueProps.ts";

export type RatingProps = {
    value: RatingValueProps
    onClick?: (value: RatingValueProps) => void
}