import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Home from './Home';

function Menu(props){
    return(
        <div className="menu">
            <NavLink to='/' className="logo" activeClassName="active" >Logo</NavLink>
            {
                props.children.map(list => (
                    <Link to={`/collections/${list.link}`} key={list.name}>{list.name}</Link>
                ))
            }
            <Link to='/search' className="find" />
        </div>
    )
}

export default Menu;