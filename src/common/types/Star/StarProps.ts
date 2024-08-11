import {RatingValueProps} from "common/types/Rating/RatingValueProps.ts";

export type StarProps = {
    value: RatingValueProps
    selected: boolean
    onClick?: (value: RatingValueProps) => void
}
