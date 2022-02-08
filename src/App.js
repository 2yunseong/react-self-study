import React from "react";
import "./App.css";
import MyChildren from "./chap03/MyChildren";
import MyComponent from "./chap03/MyComponent.js";

function App() {
  return (
    <div className="App">
      <MyChildren name="yunseong">Test</MyChildren>
      <MyComponent name="yunseong2">Test</MyComponent>
    </div>
  );
}

export default App;
