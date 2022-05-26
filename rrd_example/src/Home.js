import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>홈</h1>
            <p>첫번째 화면</p>
            <ul>
                <li>
            <Link to="/about">소개</Link>
                </li>
                <li>
            <Link to="/profile/yunseong">yunseong의 프로필</Link>
                </li>
                <li>
            <Link to="/profile/seohyun">seohyun의 프로필</Link>
                </li>
                <li>
            <Link to="/profile/se">알수없는 프로필</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home;