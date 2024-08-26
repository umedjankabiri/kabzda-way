import {ChangeEvent, useState} from "react";

export default {
    title: "Input"
}

export const ControlledInput = () => {
    const [value, setValue] = useState<string>("")

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>)=> {
        setValue(event.currentTarget.value)
    }

    return (
        <>
            <input type="text" value={value} onChange={()=> onChangeHandler}/>
        </>
    )
}
export const ControlledCheckbox = () => {
    const [value, setValue] = useState<boolean>(true)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>)=> setValue(event.currentTarget.checked)

    return (
        <>
            <input type="checkbox" checked={value} onChange={onChangeHandler}/>
        </>
    )
}
export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>(undefined)

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>)=> {
        setValue(event.currentTarget.value)
    }

    return (
        <select value={value} onChange={onChangeHandler}>
            <option>none</option>
            <option value={"1"}>Minsk</option>
            <option value={"2"}>Moscow</option>
            <option value={"3"}>Istanbul</option>
        </select>
    )
}