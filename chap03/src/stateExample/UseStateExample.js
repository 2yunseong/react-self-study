import {useState} from 'react';

const textStyleDefault = {
    'color': 'black'
};

const textStyleRed = {
    'color': 'red'
};

const textStyleBlue = {
    'color': 'blue'
};

const UseStateExample = () => {
    const [message, setMessage] = useState("");
    const [color, setColor] = useState({});

    const onClickEnter = () => setMessage('Hello!');
    const onClickLeave = () => setMessage('Bye!');
    const onClickDefault = () => setColor(textStyleDefault);
    const onClickRed = () => setColor(textStyleRed);
    const onClickBlue = () => setColor(textStyleBlue);
    
    return(
        <div>
            <div style={color}>{message}</div>
            <div>{color.color}</div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <div>글자 색 설정</div>
            <button style={textStyleDefault} onClick={onClickDefault}>검정</button>
            <button style={textStyleRed} onClick={onClickRed}>빨강</button>
            <button style={textStyleBlue} onClick={onClickBlue}>파랑</button>
        </div>
    )
}

export default UseStateExample;