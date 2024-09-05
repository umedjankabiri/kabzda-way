import {useState} from "react";
import {AccordionTitle} from "common/components/Accordion/AccordionTitle/AccordionTitle.tsx";
import {UncontrolledAccordionProps} from "common/types/UncontrolledAccordion/UncontrolledAccordionProps.ts";
import {UncontrolledAccordionBody} from "common/components/UncontrolledAccordionBody/UncontrolledAccordionBody.tsx";

export const UncontrolledAccordion = (props: UncontrolledAccordionProps) => {
    console.log("UncontrolledAccordion rendering")
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <AccordionTitle title = {props.title} collapsed={!collapsed} onClick={setCollapsed}/>
            { collapsed && <UncontrolledAccordionBody/> }
        </>
    );
};
