import React from "react";
import "./App.css";
import ChapFourRender from "./chap04/ChapFourRender";
import ChapFiveRender from "./chap05/ChapFiveRender";
import ChapSixRender from "./chap06/ChapSixRender";

function App() {
  return (
    <div className='App'>
      <ChapFourRender />
      <ChapFiveRender />
      <ChapSixRender />
    </div>
  );
}

export default App;
