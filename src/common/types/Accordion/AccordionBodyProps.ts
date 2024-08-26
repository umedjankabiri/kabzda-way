import {ItemProps} from "common/types/Accordion/ItemProps.ts";

export type AccordionBodyProps = {
    items: ItemProps[]
    onClick?: (value: string | number | boolean) => void
}