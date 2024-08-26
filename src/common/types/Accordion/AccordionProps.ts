import {ItemProps} from "common/types/Accordion/ItemProps.ts";

export type AccordionProps =  {
    title: string
    collapsed: boolean
    items: ItemProps[]
    onClick?: (collapsed: boolean) => void
    onClickItems?: (value: string | number | boolean) => void

}