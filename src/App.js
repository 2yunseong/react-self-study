import React from "react";
import "./App.css";
import Counter from "./chap03/Counter";
import MyChildren from "./chap03/MyChildren";
import MyComponent from "./chap03/MyComponent.js";
import Say from "./chap03/Say";

function App() {
  return (
    <div className="App">
      <MyChildren name="yunseong">Test</MyChildren>
      <MyComponent name="yunseong2">Test</MyComponent>
      <Counter />
      <Say />
    </div>
  );
}

export default App;
