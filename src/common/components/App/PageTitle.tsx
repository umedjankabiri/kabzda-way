import {PageTitleProps} from "common/types/PageTitle/PageTitleProps.ts";

export const PageTitle = (props: PageTitleProps) => {
    console.log("PageTitle rendering")

    return <h2>{props.title}</h2>
};