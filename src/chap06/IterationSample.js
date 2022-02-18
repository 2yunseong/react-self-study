import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, name: "yunseong" },
    { id: 2, name: "yunseong2" },
    { id: 3, name: "yunseong3" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    if (inputText === "") return;
    const newUser = {
      id: nextId,
      name: inputText,
    };
    setNames([...names, newUser]);
    setNextId(nextId + 1);
    setInputText("");
  };

  const onPressEnter = (e) => {
    if (e.key === "Enter") {
      handleClick();
      setInputText("");
    }
  };

  const onRemove = (id) => {
    setNames(names.filter((element) => element.id !== id));
  };
  return (
    <>
      <input
        type='text'
        value={inputText}
        placeholder='추가할 사람의 이름 입력..'
        onChange={handleChange}
        onKeyPress={onPressEnter}
      />
      <button onClick={handleClick}>제출하기</button>
      <ul>
        {names.map((element) => (
          <li key={element.id} onDoubleClick={() => onRemove(element.id)}>
            {element.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default IterationSample;
