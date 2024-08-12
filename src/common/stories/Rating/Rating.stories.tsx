import {Rating} from "common/components/Rating/Rating.tsx";
import {Meta} from "@storybook/react";
import {action} from "@storybook/addon-actions";

const meta: Meta<typeof Rating> = {
    title: 'Rating stories',
    component: Rating,
    args: {
        value: 0,
        onClick: () => {}
    }
}

export default meta

const onClickHandler = action("Clicked handler")
export const EmptyRating = () => <Rating value={0} onClick={onClickHandler} />
export const Rating1 = () => <Rating value={1} onClick={onClickHandler} />