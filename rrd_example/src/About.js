import { Link, useSearchParams } from "react-router-dom";

const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        setSearchParams({mode, detail: detail === 'true' ? false : true});
    }
    
    const onIncreaseMode = () => {
        const nextMode = null ? 1 : parseInt(mode) + 1;
        setSearchParams({mode: nextMode , detail});
    }
    return(
        <div>
            <h1>About</h1>
            <p>예제 화면</p>
            <p>detail:{detail}</p>
            <button onClick={onToggleDetail}>토글 변경</button>
            <p>mode:{mode}</p>
            <button onClick={onIncreaseMode}>모드 1 증가</button> <br />
            <Link to="/">홈으로</Link>
        </div>
    );
}

export default About;