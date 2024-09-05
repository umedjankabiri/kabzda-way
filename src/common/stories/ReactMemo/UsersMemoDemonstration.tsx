export const UsersMemoDemonstration = (props: {users: string[]}) => {
    console.log("Users Memo demonstration");

    return (
        <ul>
            {props.users.map((user, index) => (<li key={index}>{user}</li>))}
        </ul>
    );
};
