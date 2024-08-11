import {AccordionTitleProps} from "common/types/Accordion/AccordionTitleProps.ts";

export const AccordionTitle = (props: AccordionTitleProps) => {
    console.log("AccordionTitle rendering")

    return (
            <h3 onClick={props.onClick}>{props.title}</h3>
    );
};