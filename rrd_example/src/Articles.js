import { NavLink, Outlet } from 'react-router-dom';

import ArticleItem from './ArticleItem';

const Articles = () => {
    return(
        <div>
            <ul>
            <ArticleItem id={1} />
            <ArticleItem id={2} />
            <ArticleItem id={3} />
            </ul>
            <Outlet />
        </div>
    );
}

export default Articles;
