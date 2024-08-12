import {Meta, StoryObj} from "@storybook/react";
import {Accordion} from "common/components/Accordion/Accordion.tsx";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion,
    args: {
        title: 'Accordion',
        collapsed: false,
        onClick: () => {}
    }
}

export default meta;

const onClickHandler = action('Clicked Handler');
export const CollapsedAccordion = () => <Accordion title={"Collapsed Accordion"} collapsed={true} onClick={onClickHandler} />
export const OpenedAccordion = () => <Accordion title={"Opened Accordion"} collapsed={false} onClick={onClickHandler}/>
export const DemonstrationAccordion = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    return (
        <>
            <Accordion title={"Accordion"} collapsed={collapsed} onClick={setCollapsed}/>
        </>
    )
}
export const StoryAccordion: Story = {
    args: {
        title: 'Accordion',
        collapsed: false,
        onClick: () => {}
    },
    argTypes: {
        onClick: {onClick: "Clicked"}
    }
}
type Story = StoryObj<typeof Accordion>