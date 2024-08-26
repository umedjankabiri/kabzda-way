import {ChangeEvent, useRef, useState} from "react";

export default {
    title: "UncontrolledInput"
}

export const UncontrolledInput = () => <input/>
export const ControlledInputWithFixedValue = () => <input value={"it-incubator"}/>
export const UncontrolledInputWithTrackedValue = () => {
    const [value, setValue] = useState("")

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>)=> {
        setValue(event.currentTarget.value)
    }

    return (
        <>
            <input onChange={onChangeHandler}/> actual value: {value}
        </>
    )
}
export const UncontrolledInputWithRefByButtonPress = () => {
    const [value, setValue] = useState("")

    const inputRefValue = useRef<HTMLInputElement>(null)

    const onClickSaveHandler = ()=> {
        const inputValue = inputRefValue.current
        inputValue && setValue(inputValue.value)
    }

    return (
        <>
            <input ref={inputRefValue}/> {" "}
            <button onClick={onClickSaveHandler}>save</button> {" "}
            actual value: {value}
        </>
    )
}