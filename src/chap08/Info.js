import React, { useEffect, useReducer } from "react";
import useInputs from "./Hooks/useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    state: "",
  });

  const { name, nickname } = state;

  useEffect(() => {
    console.log("first rendering");
  }, []);

  useEffect(() => {
    console.log("nickname change");
    console.log({});
  }, [nickname]);

  useEffect(() => {
    console.log("name change");
    console.log({ name });
  }, [name]);

  return (
    <div>
      <h1>Hook 예제</h1>
      <input placeholder='이름' name='name' value={name} onChange={onChange} />
      <input
        placeholder='닉네임'
        name='nickname'
        value={nickname}
        onChange={onChange}
      />
      <p>이름 : {name}</p>
      <p>닉네임 : {nickname}</p>
    </div>
  );
};

export default Info;
