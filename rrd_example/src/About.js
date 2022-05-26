import { Link, useLocation } from "react-router-dom";

const About = () => {
    const location = useLocation();
    console.dir(location);

    return(
        <div>
            <h1>About</h1>
            <p>예제 화면</p>
            <p>쿼리스트링:{location.search}</p>
            <Link to="/">홈으로</Link>
        </div>
    )
}

export default About;