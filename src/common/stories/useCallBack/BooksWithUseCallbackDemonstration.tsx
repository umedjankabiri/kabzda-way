import {FC} from "react";
import {BookProps} from "common/types/Books/BookProps.ts";

export const BooksWithUseCallbackDemonstration: FC<BookProps> = (props) => {
    console.log("BooksWithUseCallbackDemonstration")
    const onClickAddBookHandler = ()=> {
        props.addBook && props.addBook()
    }

    return (
        <div>
            <button onClick={onClickAddBookHandler}>Add book</button>
        </div>
    );
};
