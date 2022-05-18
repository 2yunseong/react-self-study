import { useState, useEffect } from "react";

const IterationExample = () => {
    const [users, setUsers] = useState([
        {id : 1 , name : "yunseong"},
        {id : 2 , name : "yunseong2"},
        {id : 3 , name : "yunseong3"},
    ]); 
    
    const [usersId, setUsersId] = useState(4);
    const [inputName, setInputName] = useState("");

    const onChange = (e) => {
        setInputName(e.target.value);
    }

    const onClick = () => {
        setUsers([
            ...users,
            {id : usersId, name : inputName}
        ]);
        setUsersId(usersId + 1);
        setInputName("");
    }
    
    const onDelete = (id) => {
        setUsers(users.filter(
            (user) => {
                return user.id !== id;
            }
        ));
    }

    return(<div>
        <input type="text" placeholder="write name.." onChange={onChange} value={inputName}/>
        <button onClick={onClick}>인원 추가</button>
        {users.map((user) => {
            return <li key={user.id} onDoubleClick={() => {onDelete(user.id)}}>{user.name}</li>
        })}
    </div>);
    
}

export default IterationExample;