import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

class Menu extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="menu">
                <Link to='/' className="logo" >Logo</Link>
                {
                    this.props.menu.map(list => (
                        <Link to={`/collections/${list.link}`} key={list.name}>{list.name}</Link>
                    ))
                }
                <Link to='/search' className="find" />
            </div>
        )
    }
}

export default Menu;