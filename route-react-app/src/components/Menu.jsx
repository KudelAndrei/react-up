import React from "react";
import { NavLink } from "react-router-dom";

function Menu(){
    return(
        <nav className="navigation">
            <NavLink to="/" className="logo" activeClassName="selected">Logo</NavLink>
            <div className="menu">
                <NavLink to="/statistic" className="menu-link" activeClassName="selected">Statistic</NavLink>
                <NavLink to="/books" className="menu-link" activeClassName="selected">Books</NavLink>
            </div>
        </nav>
    )
}

export default Menu;