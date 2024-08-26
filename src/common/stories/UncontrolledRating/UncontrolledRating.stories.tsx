import {Meta} from "@storybook/react";
import {UncontrolledRating} from "common/components/UncontrolledRating/UncontrolledRating.tsx";
import {action} from "@storybook/addon-actions";

const meta: Meta<typeof UncontrolledRating> = {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating,
    args: {
        defaultValue: 0,
    }
}

export default meta

const onClickHandler = action("UncontrolledRating clicked inside component")
export const EmptyUncontrolledRating = () => <UncontrolledRating defaultValue={0} onClick={onClickHandler}/>
export const UncontrolledRating1 = () => <UncontrolledRating defaultValue={1} onClick={onClickHandler}/>
export const UncontrolledRating2 = () => <UncontrolledRating defaultValue={2} onClick={onClickHandler}/>
export const UncontrolledRating3 = () => <UncontrolledRating defaultValue={3} onClick={onClickHandler}/>
export const UncontrolledRating4 = () => <UncontrolledRating defaultValue={4} onClick={onClickHandler}/>
export const UncontrolledRating5 = () => <UncontrolledRating defaultValue={5} onClick={onClickHandler}/>
export const DemonstrationRating = () => {
    return (
        <>
            <UncontrolledRating onClick={onClickHandler}/>
        </>
    );
}