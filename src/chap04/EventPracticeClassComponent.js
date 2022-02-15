import { Component } from "react";

class EventPracticeClassComponent extends Component {
  state = {
    username: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username);
    alert(this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };

  handlePressEnter = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="이름를 입력하세요"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <input
          type="text"
          name="message"
          placeholder="메세지를 입력하세요"
          onChange={this.handleChange}
          value={this.state.message}
          onKeyPress={this.handlePressEnter}
        />
        <button onClick={this.handleClick}>검증</button>
      </div>
    );
  }
}

export default EventPracticeClassComponent;
