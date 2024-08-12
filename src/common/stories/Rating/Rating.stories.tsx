import {Rating} from "common/components/Rating/Rating.tsx";
import {Meta} from "@storybook/react";

const meta: Meta<typeof Rating> = {
    title: 'Rating stories',
    component: Rating,
    args: {
        value: 0,
        onClick: () => {}
    }
}

export default meta