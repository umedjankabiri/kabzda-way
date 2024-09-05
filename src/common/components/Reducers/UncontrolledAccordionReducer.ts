import {
    InitialStateProps,
    ActionProps
} from "common/types/ReducersProps/ActionProps.ts";

const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"

export const UncontrolledAccordionReducer = (state: InitialStateProps, action: ActionProps): InitialStateProps => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            throw new Error("error in action type")
    }
}
