import {OnOff} from "common/components/OnOff/OnOff.tsx";
import {Meta} from "@storybook/react";

const meta: Meta<typeof OnOff> = {
    title: 'OnOff stories',
    component: OnOff,
    args: {
        toggle: true,
        onClick: () => {}
    }
}

export default meta

export const switchedOn = () => <OnOff toggle={true} onClick={()=> {}}/>
export const switchedOff = () => <OnOff toggle={false} onClick={()=> {}}/>