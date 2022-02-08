import { useState } from "react";

const Say = () => {
  const [isUserOnline, setIsUserOnline] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("black");
  const onClickEnter = () => {
    if (!isUserOnline) {
      setIsUserOnline(!isUserOnline);
      setMessage("입장하셨습니다.");
    }
  };
  const onClickLeave = () => {
    if (isUserOnline) {
      setIsUserOnline(!isUserOnline);
      setMessage("퇴장하셨습니다.");
    }
  };

  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <div style={{ color }}>
        참가자가 {message === "" ? "입장 전입니다." : message}
      </div>
      <button style={{ color: "black" }} onClick={() => setColor("black")}>
        검정
      </button>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨강
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록
      </button>
    </>
  );
};

export default Say;
