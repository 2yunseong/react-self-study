import { useState } from "react";
const EventPractice = () => {
    const [userInfo, setUserInfo] = useState({
        userId : "",
        passwd : "",
    });

    const onChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name] : e.target.value
        });
        console.log(e.target.value);
    };
    
    const onResetClick = () => {
        setUserInfo({
            userId : "",
            passwd : ""
        });
    }; 

    const onKeyPress = (e) => {
        if(e.key === "Enter"){
            onResetClick();
        }
    };

    return (
        <div>
            <input type="text" name="userId" onChange={onChange} value={userInfo.userId} placeholder="ID" onKeyPress={onKeyPress}/>
            <input type="password" name="passwd" onChange={onChange} value={userInfo.passwd} placeholder="Password" onKeyPress={onKeyPress}/>
            <button onClick={onResetClick}>Reset!</button>
            <div>{userInfo.userId}</div>
        </div>
    )
}

export default EventPractice;