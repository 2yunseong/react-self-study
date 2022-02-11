import React from "react";
import MyChildren from "./MyChildren";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";

const Chap03 = () => {
  return (
    <>
      <MyChildren name="yunseong">Test</MyChildren>
      <MyComponent name="yunseong2">Test</MyComponent>
      <Counter />
      <Say />
    </>
  );
};

export default Chap03;
