import { Navigate } from 'react-router-dom';

const MyPage = () => {
    const isLogin = false;
    if(!isLogin){
        return <Navigate to="/login" replace={true} />;
    }

    return <div>마이 페이지</div>;
}

export default MyPage;