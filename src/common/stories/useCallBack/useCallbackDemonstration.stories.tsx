import {memo, useCallback, useMemo, useState} from "react";
import {MessagesCounterMemoDemonstration} from "common/stories/ReactMemo/CounterMemoDemonstration.tsx";
import {BooksWithUseCallbackDemonstration} from "common/stories/useCallBack/BooksWithUseCallbackDemonstration.tsx";

export default {
    title: 'useCallback',
}

const initialState: string[] = ["Learn JS/TS&React", "RTK toolkit", "Express.js"]

export const useCallbackDemonstration = () => {
    console.log("useCallback Demonstration")
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(initialState);

    const memoizedAddBooksWithUseMemo = useMemo(()=> {
        return () => {
            console.log(books)
            setBooks([...books, "Learn C++ " + new Date().getTime()]);
        }
    }, [books])
    const memoizedAddBooksWithUseCallback = useCallback(()=> {
            console.log(books)
            setBooks([...books, "Learn C++ " + new Date().getTime()]);
    }, [books])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <MessagesCounterMemoDemonstration counter={counter}/>
            <span>addBook with useMemo: </span><NewBooksWithUseCallbackDemonstration addBook={memoizedAddBooksWithUseMemo}/>
            <span>addBook with useCallback: </span><NewBooksWithUseCallbackDemonstration addBook={memoizedAddBooksWithUseCallback}/>
        </div>
    )
}

const NewBooksWithUseCallbackDemonstration = memo(BooksWithUseCallbackDemonstration)
