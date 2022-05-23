import { useState, useEffect } from 'react';

const UseEffectExample = () => {
    const [text, setText] = useState('');
    const [isEnable, setIsEnable] = useState(true);

    useEffect(()=>{
        console.log("마운트 될 때만 실행됩니다.");
    }, [])

    useEffect(() => {
        console.log("값이 변경 되었습니다. text :" + text);
    });

    useEffect(()=>{
        console.log("버튼이 눌렸습니다");
        return () => {
            console.log("clean up 함수 실행");
        }
    }, [isEnable]);

    return <div>
        <h1>UseEffect 예제</h1>
        <div>{text}</div>
        <input placeholder='값을 입력하세요' onChange={(e)=>{
            setText(e.target.value);
        }}/>
        <button onClick={()=>{
            setIsEnable(!isEnable);
        }}>이 버튼을 누르면 useEffect가 실행됩니다</button>
    </div>
}

export default UseEffectExample;
