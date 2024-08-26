import {SelectItemProps} from "common/types/Select/SelectItemProps.ts";

export type SelectProps = {
    value: any
    onChange?: (value: any) => void
    items: SelectItemProps[]
}