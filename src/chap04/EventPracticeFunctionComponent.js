import React, { useState } from "react";

const EventPracticeFunctionComponent = () => {
  const [message, setMessage] = useState({
    username: "",
    text: "",
  });

  const handleChange = (e) => {
    const newMessage = {
      ...message,
      [e.target.name]: e.target.value,
    };

    setMessage(newMessage);
  };

  const handleClick = () => {
    console.log(`이름 : ${message.username} 내용 : ${message.text}`);
    setMessage({
      username: "",
      text: "",
    });
  };

  const handlePressEnter = (e) => {
    if (e.key === "Enter") handleClick();
  };
  return (
    <div>
      <h1>함수형 컴포넌트로 구현한 이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="이름을 입력하세요"
        value={message.username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="text"
        placeholder="내용을 입력하세요"
        value={message.text}
        onChange={handleChange}
        onKeyPress={handlePressEnter}
      />
      <button onClick={handleClick}>보내기(spacebar)</button>
    </div>
  );
};

export default EventPracticeFunctionComponent;
