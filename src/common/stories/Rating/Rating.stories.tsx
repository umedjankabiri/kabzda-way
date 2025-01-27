import {Rating} from "common/components/Rating/Rating.tsx";
import {Meta} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {RatingValueProps} from "common/types/Rating/RatingValueProps.ts";
import {useState} from "react";

const meta: Meta<typeof Rating> = {
    title: 'Rating stories',
    component: Rating,
    args: {
        value: 0,
        onClick: () => {
        }
    }
}

export default meta

const onClickHandler = action("Clicked handler")
export const EmptyRating = () => <Rating value={0} onClick={onClickHandler}/>
export const Rating1 = () => <Rating value={1} onClick={onClickHandler}/>
export const Rating2 = () => <Rating value={2} onClick={onClickHandler}/>
export const Rating3 = () => <Rating value={3} onClick={onClickHandler}/>
export const Rating4 = () => <Rating value={4} onClick={onClickHandler}/>
export const Rating5 = () => <Rating value={5} onClick={onClickHandler}/>
export const DemonstrationRating = () => {
    const [rating, setRating] = useState<RatingValueProps>(0);

    return (
        <>
            <Rating value={rating} onClick={setRating}/>
        </>
    );
}