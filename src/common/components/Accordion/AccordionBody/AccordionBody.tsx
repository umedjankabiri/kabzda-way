import {FC} from "react";
import {AccordionBodyProps} from "common/types/Accordion/AccordionBodyProps.ts";

export const AccordionBody: FC<AccordionBodyProps> = (props) => {
    console.log("AccordionBody rendering")

    const mappedAccordionBody = props.items.map((item, index) => {
        const onClickHandler = ()=> {
            props.onClick && props.onClick(item.value)
        }

        return (
            <li key={index} onClick={onClickHandler}>
                {item.title}
            </li>
        )
    })

    return (
        <ul>
            {mappedAccordionBody}
        </ul>
    );
};