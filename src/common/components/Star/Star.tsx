export const Star = (props: any) => {
    console.log("Star rendering")

    return (
        <span>
            {props.selected ? <b>Star </b> : "Star "}
        </span>
    );
};