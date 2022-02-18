import { Component } from "react";
import ScrollBox from "./ScrollBox";
import ValidationSample from "./ValidationSample";

class ChapFiveRender extends Component {
  render() {
    return (
      <div>
        <h1>Chap 05. Ref</h1>
        <ValidationSample />
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default ChapFiveRender;
