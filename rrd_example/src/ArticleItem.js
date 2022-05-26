import { NavLink } from 'react-router-dom';

const activeStyle = {
    color: 'green',
    fontSize : 21
};

const ArticleItem = ({ id }) => {

    return(
    <li>
        <NavLink 
        to={`/articles/${id}`}
        style={navItemActivate}
        >게시글 {id}</NavLink>
    </li>)
}

const navItemActivate = ({ isActive }) => {
    return (isActive ? activeStyle : undefined);
}

export default ArticleItem;