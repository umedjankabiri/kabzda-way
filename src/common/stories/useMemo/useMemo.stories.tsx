import {memo, useMemo, useState} from "react";
import {MessagesCounterMemoDemonstration} from "common/stories/ReactMemo/CounterMemoDemonstration.tsx";
import {UsersMemoDemonstration} from "common/stories/ReactMemo/UsersMemoDemonstration.tsx";

export default {
    title: 'UseMemo stories'
}

export const useMemoDemonstration = () => {
    console.log("use Memo Demonstration")
    const [a, setA] = useState(1)
    const [b, setB] = useState(1)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake += Math.random()
            }
            tempResultA *= i;
        }
        return tempResultA
    }, [a])
    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return (
        <>
            <div>
                input for a: <input value={a} onChange={(event) => setA(Number(event.currentTarget.value))}/>
            </div>
            <div>
                input for b: <input value={b} onChange={(event) => setB(+event.currentTarget.value)}/>
            </div>
            <hr/>
            <div>
                Result a: {resultA}
            </div>
            <div>
                Result b: {resultB}
            </div>

        </>
    )
}

export const HelperToReactMemoDemonstration = () => {
    console.log("Helper To React Memo Demonstration")
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Umedjan", "Leyla", "Muhammad", "Yusuf"]);

    const newUsers = useMemo (()=> {
        return users.filter(user => user.toLowerCase().indexOf("a") > -1)
    }, [users])
    const addUser = ()=> setUsers([...users, "Svetlana " + new Date().getTime()]);

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>Add user</button>
            <MessagesCounterMemoDemonstration counter={counter}/>
            <NewUsersWithMemoDemonstration users={newUsers}/>
        </div>
    )
}

const NewUsersWithMemoDemonstration = memo(UsersMemoDemonstration)