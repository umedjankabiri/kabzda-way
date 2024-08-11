import {AccordionTitle} from "common/components/Accordion/AccordionTitle/AccordionTitle.tsx";
import {AccordionBody} from "common/components/Accordion/AccordionBody/AccordionBody.tsx";

export const Accordion = () => {
    console.log("Accordion rendering")

    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
};