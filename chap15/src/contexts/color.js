import { createContext, useState } from "react";

// createContext에 기본 값 전달
const ColorContext = createContext({ 
    state: { color: 'black', subcolor: 'red'},
    actions: {
        setColor: () => {},
        setSubcolor: () => {}
    }
});

// Provider 컴포넌트 
const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    // createConext의 기본 값은 실제 Provider의 value에 넣는 객체의 형태와 일치시켜 주는 것이 좋다.
    const value = {
        state: {color, subcolor},
        actions: {setColor, setSubcolor}
    };

    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
}

// ColorContext 객체 안에 있는 Consumer를 ColorConsumer로 선언하겠다와 같은 의미이다.
const { Consumer: ColorConsumer } = ColorContext;

// 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
