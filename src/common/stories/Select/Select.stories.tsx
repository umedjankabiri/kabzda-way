import {Select} from "common/components/Select/Select.tsx";
import {useState} from "react";

export default {
    title: "Select stories",
    component: Select,
}

export const SelectWithValue = () => {
    const [value, setValue] = useState('2')

    const onChangeHandler = (newValue: string) => setValue(newValue)
    return (
        <>
            <Select value={value}
                    items={
                        [
                            {value: '1', title: "Minsk"},
                            {value: '2', title: "Moscow"},
                            {value: '3', title: "Kiev"}
                        ]
                    }
                    onChange={onChangeHandler}
            />
        </>
    )
}

export const SelectWithoutValue = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (newValue: string) => setValue(newValue)
    return (
        <>
            <Select value={value}
                    items={
                        [
                            {value: '1', title: "Minsk"},
                            {value: '2', title: "Moscow"},
                            {value: '3', title: "Kiev"}
                        ]
                    }
                    onChange={onChangeHandler}
            />
        </>
    )
}
