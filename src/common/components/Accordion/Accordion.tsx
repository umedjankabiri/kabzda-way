import {AccordionTitle} from "common/components/Accordion/AccordionTitle/AccordionTitle.tsx";
import {AccordionBody} from "common/components/Accordion/AccordionBody/AccordionBody.tsx";

export const Accordion = (props: any) => {
    console.log("Accordion rendering")

    return (
        <div>
            <AccordionTitle title = {props.title}/>
            <AccordionBody/>
        </div>
    );
};