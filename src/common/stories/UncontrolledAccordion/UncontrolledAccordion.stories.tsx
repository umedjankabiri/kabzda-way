import {Meta, StoryObj} from "@storybook/react";
import {UncontrolledAccordion} from "common/components/UncontrolledAccordion/UncontrolledAccordion.tsx";
import {action} from "@storybook/addon-actions";

const meta: Meta<typeof UncontrolledAccordion> = {
    title: 'Uncontrolled Accordion stories',
    component: UncontrolledAccordion,
    args: {
        title: 'Uncontrolled Accordion',
    }
}

export default meta;

const onClickHandler = action('Clicked Handler');
export const DemonstrationUncontrolledAccordion = () => {
    return (
        <>
            <UncontrolledAccordion title={"Menu"}/>
        </>
    )
}
export const StoryAccordion: Story = {
    args: {
        title: 'Uncontrolled Accordion',
    },
    argTypes: {
        onClick: onClickHandler
    }
}
type Story = StoryObj<typeof UncontrolledAccordion>