import {UncontrolledAccordionReducerProps} from "common/types/ReducersProps/UncontrolledAccordionReducerProps.ts";

const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"

export const UncontrolledAccordionReducer = (state: boolean, action: UncontrolledAccordionReducerProps): boolean => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state
        default:
            throw new Error("error in action type")
    }
}
