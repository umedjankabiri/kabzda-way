import {Meta} from "@storybook/react";
import {UncontrolledOnOff} from "common/components/UncontrolledOnOff/UncontrolledOnOff.tsx";

const meta: Meta<typeof UncontrolledOnOff> = {
    title: 'Uncontrolled OnOff stories',
    component: UncontrolledOnOff,
}

export default meta

export const switchedOn = () => <UncontrolledOnOff defaultValue={true}/>
export const switchedOff = () => <UncontrolledOnOff defaultValue={false}/>
export const DemonstrationUncontrolledOnOff = () => {
    return (
        <>
            <UncontrolledOnOff />
        </>
    )
}