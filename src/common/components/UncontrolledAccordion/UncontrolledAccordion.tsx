import {useState} from "react";
import {AccordionTitle} from "common/components/Accordion/AccordionTitle/AccordionTitle.tsx";
import {AccordionBody} from "common/components/Accordion/AccordionBody/AccordionBody.tsx";
import {UncontrolledAccordionProps} from "common/types/UncontrolledAccordion/UncontrolledAccordionProps.ts";

export const UncontrolledAccordion = (props: UncontrolledAccordionProps) => {
    console.log("Accordion rendering")
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <AccordionTitle title = {props.title} collapsed={!collapsed} onClick={setCollapsed}/>
            { collapsed && <AccordionBody/>}
        </>
    );
};