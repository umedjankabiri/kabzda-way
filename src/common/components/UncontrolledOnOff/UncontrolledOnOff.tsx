import {CSSProperties, useState} from "react";

export const UncontrolledOnOff = () => {
    console.log("UncontrolledOnOff rendering")
    const [on, setOn] = useState<boolean>(false)

    const mainWrapper: CSSProperties = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        margin: "10px"
    }
    const onStyle: CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50px",
        height: "50px",
        border: "1px solid black",
        background: on ? "green" : "white",
        marginLeft: "5px"
    }
    const offStyle: CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50px",
        height: "50px",
        border: "1px solid black",
        background: !on ? "red" : "white",
    }
    const indicatorStyle: CSSProperties = {
        display: "inline-block",
        width: "25px",
        height: "25px",
        border: "1px solid black",
        borderRadius: "100%",
        backgroundColor: on ? "green" : "red",
    }

    const onClickOnHandler = () => setOn(true)
    const onClickOffHandler = () => setOn(false)

    return (
        <div style={mainWrapper}>
            <div style={onStyle} onClick={onClickOnHandler}>ON</div>
            <div style={offStyle} onClick={onClickOffHandler}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};