import {FC, useEffect, useState} from "react";
import {SelectProps} from "common/types/Select/SelectProps.ts";
import stl from "common/components/Select/select.module.css"

export const Select: FC<SelectProps> = (props) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(item => item.value === props.value)
    const hoveredItem = props.items.find(item => item.value === hoveredElementValue)

    useEffect(()=> {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setIsActive(!isActive)
    const onItemClick = (newValue: string) => {
        props.onChange && props.onChange(newValue)
        toggleItems()
    }
    const onMouseEnterHandler = (newValue: string) => setHoveredElementValue(newValue)
    const onKeyUpHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.items.length; i++) {
           if (props.items[i].value === hoveredElementValue) {
               if (props.items[i + 1]) {
                   props.onChange && props.onChange(props.items[i + 1].value)
                   break;
               }
               setHoveredElementValue(props.items[i + 1].value)
               break;
           }
        }
    }

    const mappedItems = props.items.map(item =>
        <div key={item.value}
             className={stl.selectItem + " " + (hoveredItem === item ? stl.selected : "")}
             onClick={() => onItemClick(item.value)}
             onMouseEnter={() => onMouseEnterHandler(item.value)}
        >
            {item.title}
        </div>
    )

    return (
        <div>
            <div className={stl.select} tabIndex={0} onKeyUp={onKeyUpHandler}>
                <span className={stl.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    isActive &&
                    <div className={stl.selectedItems}>
                        {mappedItems}
                    </div>
                }
            </div>
        </div>
    );
};
