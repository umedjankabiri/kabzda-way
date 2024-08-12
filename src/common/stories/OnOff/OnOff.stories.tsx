import {OnOff} from "common/components/OnOff/OnOff.tsx";
import {Meta} from "@storybook/react";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

const meta: Meta<typeof OnOff> = {
    title: 'OnOff stories',
    component: OnOff,
    args: {
        toggle: true,
        onClick: () => {}
    }
}

export default meta

const onClickHandler = action("Clicked handler")
export const switchedOn = () => <OnOff toggle={true} onClick={onClickHandler}/>
export const switchedOff = () => <OnOff toggle={false} onClick={onClickHandler}/>
export const DemonstrationOnOff = () => {
    const [on, setOn] = useState<boolean>(false);

    return (
        <>
            <OnOff toggle={on} onClick={setOn}/>
        </>
    )
}