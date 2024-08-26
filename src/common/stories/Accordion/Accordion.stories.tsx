import {Meta, StoryObj} from "@storybook/react";
import {Accordion} from "common/components/Accordion/Accordion.tsx";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

const meta: Meta<typeof Accordion> = {
    title: 'Accordion stories',
    component: Accordion,
    args: {
        title: 'Accordion',
        collapsed: false,
        items: [{title: "Umedjan", value: 1}, {title: "Leyla", value: 2}, {title: "Muhammad", value: 3}],
        onClick: () => {}
    }
}

export default meta;

const onClickHandler = action('Clicked Handler');
const onClickItemsHandler = action("Some item was clicked");

export const CollapsedAccordion = () =>
    <Accordion title={"Collapsed Accordion"}
               collapsed={true}
               onClick={onClickHandler}
               items={[]}
               onClickItems={onClickItemsHandler}
    />
export const OpenedAccordion = () => {
    const items = [{title: "Umedjan", value: 1}, {title: "Leyla", value: 2}, {title: "Muhammad", value: 3}]

    return (
        <Accordion
            title={"Opened Accordion"}
            collapsed={false}
            onClick={onClickHandler}
            onClickItems={onClickItemsHandler}
            items={items}/>
    )
}
export const DemonstrationAccordion = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const items = [{title: "Umedjan", value: 1}, {title: "Leyla", value: 2}, {title: "Muhammad", value: 3}]

    return (
        <>
            <Accordion title={"Accordion"}
                       collapsed={collapsed}
                       onClick={setCollapsed}
                       items={items}
                       onClickItems={onClickItemsHandler}
            />
        </>
    )
}
export const StoryAccordion: Story = {
    args: {
        title: 'Accordion',
        collapsed: false,
        items: [{title: "Umedjan", value: 1}, {title: "Leyla", value: 2}, {title: "Muhammad", value: 3}],
        onClick: () => {
        }
    },
    argTypes: {
        onClick: {onClick: "Clicked"}
    }
}
type Story = StoryObj<typeof Accordion>