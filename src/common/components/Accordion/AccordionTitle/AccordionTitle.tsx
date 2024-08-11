import {AccordionTitleProps} from "common/types/Accordion/AccordionTitleProps.ts";

export const AccordionTitle = (props: AccordionTitleProps) => {
    console.log("AccordionTitle rendering")
    const onClickHandler = () => props.onClick && props.onClick(props.collapsed);

    return (
        <h3 onClick={onClickHandler}>{props.title}</h3>
    );
};