import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const goArticles = () => {
        navigate("/articles");
    }

    const goArticlesReplace = () => {
        navigate("/articles", {replace: true});
    }
    return(<div>
        <header style={{background: 'lightblue', padding: 16, fontSize: 24}}>
            Header
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goArticles}>게시물 목록</button>
            <button onClick={goArticlesReplace}>replace</button>
        </header>
        <main>
            <Outlet />
        </main>
    </div>)
}

export default Layout;