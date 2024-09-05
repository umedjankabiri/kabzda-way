import {ActionProps, InitialStateProps} from "common/types/ReducersProps/ActionProps.ts";
import {UncontrolledAccordionReducer} from "common/components/Reducers/UncontrolledAccordionReducer.ts";

test("collapsed should be true", () => {
    const state: InitialStateProps = {
        collapsed: false
    }
    const action: ActionProps = {type: "TOGGLE-COLLAPSED"};

    const newState = UncontrolledAccordionReducer(state, action)

    expect(newState.collapsed).toBe(true)
})

