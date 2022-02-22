import { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  // 컴포넌트를 새로 만들 때 생성하는 메서드
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // props에 있는 값을 state에 넣을 때 사용하는 메서드
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    // 현재 props가 state값과 다르다면,
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    // 같다면
    return null;
  }

  // 컴포넌트가 웹 브라우저 상에 나타날 때 호출
  componentDidMount() {
    console.log("componentDidMount");
  }

  // 컴포넌트가 리렌더링 할지 말지 결정하는 메서드. true -> 다음 라이프사이클 메서드 계속 실행. false 면 작업중지
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    // 예제에서는 임의로 마지막 자리가 4면 리렌더링하지 않게 함.
    return nextState.number % 10 !== 4;
  }

  // 컴포넌트가 언마운트 되기 직전에 실행
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // DOM에 변화가 일어나기 직전 색상 속성을 snapshot 값으로 반환하여 이것을 componentDidUpdate에서 조회 가능하게 함.(3번째 인자로 전달됨.)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트 이전 색상:", snapshot);
    }
  }
  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // 컴포넌트를 리 렌더링 한다.
  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </>
    );
  }
}

export default LifeCycleSample;
