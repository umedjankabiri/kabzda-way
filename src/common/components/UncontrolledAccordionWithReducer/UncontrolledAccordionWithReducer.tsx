import {useReducer} from "react";
import {AccordionTitle} from "common/components/Accordion/AccordionTitle/AccordionTitle.tsx";
import {UncontrolledAccordionProps} from "common/types/UncontrolledAccordion/UncontrolledAccordionProps.ts";
import {UncontrolledAccordionBody} from "common/components/UncontrolledAccordionBody/UncontrolledAccordionBody.tsx";
import {UncontrolledAccordionReducer} from "common/components/Reducers/UncontrolledAccordionReducer.ts";

export const UncontrolledAccordionWithReducer = (props: UncontrolledAccordionProps) => {
    console.log("UncontrolledAccordionWithReducer rendering")
    const [collapsed, dispatch] = useReducer(UncontrolledAccordionReducer, false);

    return (
        <>
            <AccordionTitle title={props.title} collapsed={!collapsed} onClick={
                () => {
                    dispatch({type: "TOGGLE-COLLAPSED"})
                }
            }
            />
            {collapsed && <UncontrolledAccordionBody/>}
        </>
    );
};
