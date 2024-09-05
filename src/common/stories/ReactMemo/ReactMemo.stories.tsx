import {memo, useState} from "react";
import {MessagesCounterMemoDemonstration} from "common/stories/ReactMemo/CounterMemoDemonstration.tsx";
import {
    UsersMemoDemonstration
} from "common/stories/ReactMemo/UsersMemoDemonstration.tsx";

export default {
    title: 'ReactMemo',
}

export const ReactMemoDemonstration = () => {
    console.log("React Memo Demonstration")
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Umedjan", "Leyla", "Muhammad"]);

    const addUser = ()=> setUsers([...users, "Svetlana " + new Date().getTime()]);

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>Add user</button>
            <MessagesCounterMemoDemonstration counter={counter}/>
            <NewUsersWithMemoDemonstration users={users}/>
        </div>
    )
}

const NewUsersWithMemoDemonstration = memo(UsersMemoDemonstration)
